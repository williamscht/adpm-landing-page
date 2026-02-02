/**
 * Header CTA Handler
 * Gère les clics sur les boutons CTA du header (desktop et mobile)
 */

export function initHeaderCTA() {
  const ctaButtons = document.querySelectorAll('.header-cta');
  const contactSection = document.getElementById('contact');
  
  if (!contactSection) return;

  ctaButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

