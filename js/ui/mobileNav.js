/**
 * Mobile Navigation Handler
 * Gère l'ouverture/fermeture du menu mobile
 */

export function initMobileNav() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navMobile = document.getElementById('navMobile');
  const navLinks = navMobile?.querySelectorAll('.nav-link');
  const ctaButtons = navMobile?.querySelectorAll('.header-cta-mobile');

  if (!menuBtn || !navMobile) return;

  // Toggle menu
  menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
    
    if (isExpanded) {
      navMobile.setAttribute('hidden', '');
    } else {
      navMobile.removeAttribute('hidden');
    }
  });

  // Close menu when clicking on a link
  const allCloseElements = [...(navLinks || []), ...(ctaButtons || [])];
  allCloseElements.forEach((el) => {
    el.addEventListener('click', () => {
      menuBtn.setAttribute('aria-expanded', 'false');
      navMobile.setAttribute('hidden', '');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.site-header')) {
      menuBtn.setAttribute('aria-expanded', 'false');
      navMobile.setAttribute('hidden', '');
    }
  });
}

