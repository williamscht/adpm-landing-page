export function initBrandScroll() {
  const brandLink = document.querySelector('.brand');
  
  if (brandLink) {
    brandLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}
