export const initServicesFocus = () => {
  const cards = Array.from(document.querySelectorAll(".services__card"));
  if (!cards.length) return;

  const desktopQuery = window.matchMedia("(min-width: 1024px)");
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let observer = null;
  let visibleCards = new Set();
  let lastActive = null;
  let ticking = false;

  const clearActive = () => {
    cards.forEach((card) => card.classList.remove("is-active"));
    lastActive = null;
  };

  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
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
      if (distance < bestDistance) {
        bestDistance = distance;
        bestCard = card;
      }
    });

    if (!bestCard) return;
    if (bestDistance > focusZone && lastActive) return;

    if (lastActive && lastActive !== bestCard) {
      lastActive.classList.remove("is-active");
    }
    bestCard.classList.add("is-active");
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
          if (entry.isIntersecting) {
            visibleCards.add(entry.target);
          } else {
            visibleCards.delete(entry.target);
          }
        });
        updateActive();
      },
      { root: null, rootMargin: "50% 0px 50% 0px", threshold: 0 }
    );

    cards.forEach((card) => observer.observe(card));
  };

  const handleMode = () => {
    cleanup();
    if (!desktopQuery.matches || reduceMotionQuery.matches) return;
    initObserver();
    updateActive();
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);

  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", handleMode);
    reduceMotionQuery.addEventListener("change", handleMode);
  } else if (desktopQuery.addListener) {
    desktopQuery.addListener(handleMode);
    reduceMotionQuery.addListener(handleMode);
  }

  handleMode();
};
