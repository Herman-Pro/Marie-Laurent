(function () {
  const hamburger = document.getElementById('hamburger');
  const panel     = document.getElementById('mobile-menu');
  const overlay   = document.getElementById('mobile-overlay');
  const closeBtn  = document.getElementById('mobile-menu-close');

  if (!hamburger || !panel || !overlay) return;

  function open() {
    panel.classList.add('mobile-menu--open');
    overlay.classList.add('mobile-menu__overlay--open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    panel.classList.remove('mobile-menu--open');
    overlay.classList.remove('mobile-menu__overlay--open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', open);
  overlay.addEventListener('click', close);
  if (closeBtn) closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  document.querySelectorAll('.mobile-menu__link, .mobile-menu__cta').forEach(el => {
    el.addEventListener('click', close);
  });
})();
