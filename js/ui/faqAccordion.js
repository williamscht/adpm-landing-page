export const initFaqAccordion = () => {
  const items = Array.from(document.querySelectorAll(".faq-item"));
  if (!items.length) {
    return;
  }

  items.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) {
        return;
      }

      items.forEach((other) => {
        if (other !== item) {
          other.open = false;
        }
      });
    });
  });
};
