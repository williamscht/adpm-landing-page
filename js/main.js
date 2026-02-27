/* ============================================================
   ADPM — main.js
   Bundle unique — remplace tous les imports/modules séparés
   ============================================================ */

/* ----------------------------------------------------------
   Footer Year
---------------------------------------------------------- */
function initFooterYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/* ----------------------------------------------------------
   Brand Scroll (logo → top)
---------------------------------------------------------- */
function initBrandScroll() {
  const brandLink = document.querySelector('.brand');
  if (brandLink) {
    brandLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ----------------------------------------------------------
   Header CTA → scroll vers #contact
---------------------------------------------------------- */
function initHeaderCTA() {
  const ctaButtons = document.querySelectorAll('.header-cta');
  const contactSection = document.getElementById('contact');
  if (!contactSection) return;

  ctaButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ----------------------------------------------------------
   Mobile Navigation
---------------------------------------------------------- */
function initMobileNav() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navMobile = document.getElementById('navMobile');
  const closeElements = navMobile?.querySelectorAll('.nav-link, .btn-nous-ecrire');

  if (!menuBtn || !navMobile) return;

  const closeMenu = () => {
    menuBtn.setAttribute('aria-expanded', 'false');
    navMobile.setAttribute('hidden', '');
  };

  const openMenu = () => {
    menuBtn.setAttribute('aria-expanded', 'true');
    navMobile.removeAttribute('hidden');
  };

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    isExpanded ? closeMenu() : openMenu();
  });

  closeElements?.forEach((el) => {
    el.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.site-header')) {
      closeMenu();
    }
  });
}

/* ----------------------------------------------------------
   Contact Form
---------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const hint = document.getElementById('formHint');
  const submitButton = form?.querySelector('button[type="submit"]');
  const startedAtInput = form?.querySelector('input[name="form_started_at"]');
  const honeypotInput = form?.querySelector('input[name="website"]');
  if (!form || !hint || !submitButton) return;

  const RATE_LIMIT_STORAGE_KEY = 'adpm_contact_rate_v1';
  const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
  const RATE_LIMIT_MAX_SUBMISSIONS = 3;
  const RATE_LIMIT_MIN_INTERVAL_MS = 60 * 1000;
  const MIN_FORM_FILL_MS = 3000;

  const now = () => Date.now();

  const setHint = (html, isError = false) => {
    hint.classList.toggle('is-error', isError);
    hint.classList.toggle('is-success', !isError);
    hint.innerHTML = html;
  };

  const readRateState = () => {
    try {
      const raw = localStorage.getItem(RATE_LIMIT_STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const saveRateState = (entries) => {
    try {
      localStorage.setItem(RATE_LIMIT_STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // Storage may be blocked; keep the form usable.
    }
  };

  const pruneRateEntries = (entries) => {
    const threshold = now() - RATE_LIMIT_WINDOW_MS;
    return entries.filter((timestamp) => Number.isFinite(timestamp) && timestamp >= threshold);
  };

  const checkRateLimit = () => {
    const entries = pruneRateEntries(readRateState());
    saveRateState(entries);
    const last = entries[entries.length - 1];
    if (last && now() - last < RATE_LIMIT_MIN_INTERVAL_MS) {
      return { allowed: false, reason: 'interval' };
    }
    if (entries.length >= RATE_LIMIT_MAX_SUBMISSIONS) {
      return { allowed: false, reason: 'window' };
    }
    return { allowed: true };
  };

  const recordSubmission = () => {
    const entries = pruneRateEntries(readRateState());
    entries.push(now());
    saveRateState(entries);
  };

  if (startedAtInput) {
    startedAtInput.value = String(now());
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    hint.textContent = '';

    if (honeypotInput?.value) {
      setHint('<span class="form-sent-icon">✓</span> Message envoyé !');
      form.reset();
      if (startedAtInput) startedAtInput.value = String(now());
      return;
    }

    const startedAt = Number(startedAtInput?.value || 0);
    if (!startedAt || now() - startedAt < MIN_FORM_FILL_MS) {
      setHint('Envoi trop rapide. Merci de réessayer.', true);
      return;
    }

    const rate = checkRateLimit();
    if (!rate.allowed) {
      setHint('Trop de tentatives. Merci de réessayer dans quelques minutes.', true);
      return;
    }

    const endpoint = form.dataset.endpoint || form.getAttribute('action');
    if (!endpoint) {
      setHint('Formulaire non configuré: ajoute un endpoint d’envoi côté serveur.', true);
      return;
    }

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    delete payload.website;
    delete payload.form_started_at;

    submitButton.disabled = true;
    submitButton.setAttribute('aria-busy', 'true');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.status === 429) {
        setHint('Trop de demandes. Merci de patienter avant de renvoyer.', true);
        return;
      }

      if (!response.ok) {
        setHint("L'envoi a échoué. Merci de réessayer.", true);
        return;
      }

      recordSubmission();
      setHint('<span class="form-sent-icon">✓</span> Message envoyé !');
      form.reset();
      if (startedAtInput) startedAtInput.value = String(now());
    } catch {
      setHint("Impossible d'envoyer le message pour le moment.", true);
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute('aria-busy');
      setTimeout(() => {
        hint.textContent = '';
      }, 5000);
    }
  });
}

/* ----------------------------------------------------------
   FAQ Accordion
---------------------------------------------------------- */
function initFaqAccordion() {
  const items = Array.from(document.querySelectorAll('.faq-item'));
  if (!items.length) return;

  items.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      items.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
}

/* ----------------------------------------------------------
   Stat Counter
---------------------------------------------------------- */
function initStatCounter() {
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateStats();
      }
    });
  }, { threshold: 0.1 });

  observer.observe(aboutSection);

  function animateStats() {
    document.querySelectorAll('.stat-card').forEach((card) => {
      const statValue = card.querySelector('.stat-value');
      if (!statValue) return;

      const text = statValue.textContent.trim();
      const numberMatch = text.match(/(\d+(?:\.\d+)?)/);
      if (!numberMatch) return;

      const finalValue = parseFloat(numberMatch[1]);
      const suffix = text.replace(numberMatch[0], '');
      let currentValue = 0;
      const duration = 2000;
      const startTime = Date.now();

      function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        currentValue = finalValue * easeProgress;

        const displayValue = finalValue % 1 !== 0
          ? currentValue.toFixed(1)
          : Math.round(currentValue);

        statValue.textContent = displayValue + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          statValue.textContent = text;
        }
      }

      update();
    });
  }
}

/* ----------------------------------------------------------
   Services Focus (highlight au scroll)
---------------------------------------------------------- */
function initServicesFocus() {
  const cards = Array.from(document.querySelectorAll('.services__card'));
  if (!cards.length) return;

  const desktopQuery = window.matchMedia('(min-width: 1024px)');
  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let observer = null;
  let visibleCards = new Set();
  let lastActive = null;
  let ticking = false;

  const clearActive = () => {
    cards.forEach((card) => card.classList.remove('is-active'));
    lastActive = null;
  };

  const cleanup = () => {
    if (observer) { observer.disconnect(); observer = null; }
    visibleCards.clear();
    clearActive();
  };

  const updateActive = () => {
    ticking = false;
    if (!desktopQuery.matches || reduceMotionQuery.matches) return;
    if (!visibleCards.size) return;

    const viewportCenter = window.innerHeight / 2;
    const focusZone = window.innerHeight * 0.15;
    let bestCard = null;
    let bestDistance = Infinity;

    visibleCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const distance = Math.abs(cardCenter - viewportCenter);
      if (distance < bestDistance) { bestDistance = distance; bestCard = card; }
    });

    if (!bestCard) return;
    if (bestDistance > focusZone && lastActive) return;

    if (lastActive && lastActive !== bestCard) lastActive.classList.remove('is-active');
    bestCard.classList.add('is-active');
    lastActive = bestCard;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateActive);
  };

  const initObserver = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { visibleCards.add(entry.target); }
          else { visibleCards.delete(entry.target); }
        });
        updateActive();
      },
      { root: null, rootMargin: '50% 0px 50% 0px', threshold: 0 }
    );
    cards.forEach((card) => observer.observe(card));
  };

  const handleMode = () => {
    cleanup();
    if (!desktopQuery.matches || reduceMotionQuery.matches) return;
    initObserver();
    updateActive();
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);

  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener('change', handleMode);
    reduceMotionQuery.addEventListener('change', handleMode);
  } else if (desktopQuery.addListener) {
    desktopQuery.addListener(handleMode);
    reduceMotionQuery.addListener(handleMode);
  }

  handleMode();
}

/* ----------------------------------------------------------
   Scroll Reveal
---------------------------------------------------------- */
function initScrollReveal() {
  const targets = [];
  const isMobile = window.matchMedia('(max-width: 900px)').matches;

  document.querySelectorAll('.section').forEach((section) => {
    section.classList.add('reveal-up');
    targets.push(section);
  });

  document.querySelectorAll('.services__card').forEach((card) => {
    card.classList.add('reveal-up');
    targets.push(card);
  });

  document.querySelectorAll('.services__bento').forEach((grid) => {
    Array.from(grid.querySelectorAll('.services__card')).forEach((card, index) => {
      card.style.transitionDelay = `${index * 80}ms`;
    });
  });

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: isMobile ? '0px 0px -5% 0px' : '0px 0px -10% 0px',
      threshold: isMobile ? 0.01 : 0.15,
    }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ----------------------------------------------------------
   Init — DOMContentLoaded
---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initFooterYear();
  initBrandScroll();
  initHeaderCTA();
  initMobileNav();
  initContactForm();
  initFaqAccordion();
  initStatCounter();
  initServicesFocus();
  initScrollReveal();
});
