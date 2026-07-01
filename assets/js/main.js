/* ============================================================
   Actuel Coiff — main.js
   ============================================================ */
(function () {
  'use strict';

  /* ---- Sticky header ---- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Mobile nav toggle ---- */
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
    });
    // Close when a link is clicked
    nav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.classList.remove('open');
      })
    );
  }

  /* ---- Active nav link ---- */
  const path = window.location.pathname;
  document.querySelectorAll('.site-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (href !== '/' && path.startsWith(href))) {
      a.classList.add('active');
    }
  });

  /* ---- Hero slider ---- */
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dots button');
  if (slides.length > 1) {
    let cur = 0;
    const go = (n) => {
      slides[cur].classList.remove('active');
      dots[cur]?.classList.remove('active');
      cur = (n + slides.length) % slides.length;
      slides[cur].classList.add('active');
      dots[cur]?.classList.add('active');
    };
    dots.forEach((d, i) => d.addEventListener('click', () => go(i)));
    setInterval(() => go(cur + 1), 5000);
  }

  /* ---- Gallery lightbox ---- */
  const lb        = document.querySelector('.lightbox');
  const lbImg     = lb?.querySelector('img');
  const lbClose   = lb?.querySelector('.lightbox-close');
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      if (!lb || !lbImg) return;
      lbImg.src = img.src;
      lb.classList.add('open');
    });
  });
  lbClose?.addEventListener('click', () => lb.classList.remove('open'));
  lb?.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });

  /* ---- Keyboard close lightbox ---- */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') lb?.classList.remove('open');
  });

  /* ---- Simple contact form (no backend — opens mailto) ---- */
  const form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name    = form.querySelector('[name=name]')?.value || '';
      const subject = form.querySelector('[name=subject]')?.value || 'Message depuis le site';
      const msg     = form.querySelector('[name=message]')?.value || '';
      const email   = form.querySelector('[name=email]')?.value || 'Non renseigné';
      const phone   = form.querySelector('[name=phone]')?.value || 'Non renseigné';
      const salon   = document.querySelector('meta[name="salon-email"]')?.content || '';
      if (salon && msg) {
        const body = encodeURIComponent(`${msg}\n\nCoordonnées de contact pour ${name} :\n- email : ${email}\n- téléphone : ${phone}`);
        window.location.href = `mailto:${salon}?subject=${encodeURIComponent(subject)}&body=${body}`;
      } else {
        alert('Merci pour votre message ! Malheureusement, il n\'a pas pu être envoyé. Veuillez nous appeler au ' +
          (document.querySelector('meta[name="salon-phone"]')?.content || ''));
      }
    });
  }
})();
