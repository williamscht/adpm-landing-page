/**
 * Contact Form Handler
 * Gère la soumission du formulaire de contact
 */

export function initContactForm() {
  const form = document.getElementById('contactForm');
  const hint = document.getElementById('formHint');

  if (!form || !hint) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    hint.textContent = '✓ Message envoyé !';
    form.reset();

    // Clear message after 5 seconds
    setTimeout(() => {
      hint.textContent = '';
    }, 5000);
  });
}
