/**
 * Footer Year Handler
 * Affiche l'année actuelle dans le footer
 */

export function initFooterYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
