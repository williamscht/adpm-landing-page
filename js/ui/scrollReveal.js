export function initScrollReveal(){
  const targets = [];
  const isMobile = window.matchMedia("(max-width: 900px)").matches;

  document.querySelectorAll(".section").forEach((section) => {
    section.classList.add("reveal-up");
    targets.push(section);
  });

  document.querySelectorAll(".services__card").forEach((card) => {
    card.classList.add("reveal-up");
    targets.push(card);
  });

  document.querySelectorAll(".services__bento").forEach((grid) => {
    const cards = Array.from(grid.querySelectorAll(".services__card"));
    cards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 80}ms`;
    });
  });

  if (!("IntersectionObserver" in window)){
    targets.forEach((el) => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting){
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: isMobile ? "0px 0px -5% 0px" : "0px 0px -10% 0px",
      threshold: isMobile ? 0.01 : 0.15
    }
  );

  targets.forEach((el) => observer.observe(el));
}
