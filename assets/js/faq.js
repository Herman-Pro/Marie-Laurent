/* ============================================================
   FAQ — Accordion
   Fichier : assets/js/faq.js
   ============================================================ */

function initFaq() {
  const items = document.querySelectorAll('.faq__item');
  if (!items.length) return;

  items.forEach(item => {
    const btn = item.querySelector('.faq__question');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('faq__item--open');

      /* Fermer tous */
      items.forEach(i => {
        i.classList.remove('faq__item--open');
        i.querySelector('.faq__question')?.setAttribute('aria-expanded', 'false');
      });

      /* Ouvrir celui cliqué si était fermé */
      if (!isOpen) {
        item.classList.add('faq__item--open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initFaq);
