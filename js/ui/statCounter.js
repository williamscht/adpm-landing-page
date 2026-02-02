export function initStatCounter() {
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateStats();
      }
    });
  }, { threshold: 0.1 });

  observer.observe(aboutSection);

  function animateStats() {
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach(card => {
      const statValue = card.querySelector('.stat-value');
      if (!statValue) return;

      const text = statValue.textContent.trim();
      const numberMatch = text.match(/(\d+(?:\.\d+)?)/);
      
      if (numberMatch) {
        const finalValue = parseFloat(numberMatch[1]);
        const suffix = text.replace(numberMatch[0], '');
        let currentValue = 0;
        const duration = 2000; // 2 secondes
        const startTime = Date.now();

        function update() {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function (ease-out)
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          currentValue = finalValue * easeProgress;
          
          // Format avec décimales si nécessaire
          const displayValue = finalValue % 1 !== 0 
            ? currentValue.toFixed(1) 
            : Math.round(currentValue);
          
          statValue.textContent = displayValue + suffix;

          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            statValue.textContent = text; // Valeur finale exacte
          }
        }

        update();
      }
    });
  }
}
