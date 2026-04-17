/* =====================================================
   MAIN.JS – Navigation, scroll effects, shared utilities
   ===================================================== */

// ── Navbar scroll effect ──
(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
})();

// ── Hamburger menu ──
(function () {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    links.classList.toggle('mobile-open');
    // Animate hamburger
    const spans = btn.querySelectorAll('span');
    const open = links.classList.contains('mobile-open');
    spans[0].style.transform = open ? 'rotate(45deg) translate(5px,5px)' : '';
    spans[1].style.opacity = open ? '0' : '1';
    spans[2].style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
  });
  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('mobile-open');
      const spans = btn.querySelectorAll('span');
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
})();

// ── Hero loaded animation ──
(function () {
  const hero = document.getElementById('hero');
  if (!hero) return;
  setTimeout(() => hero.classList.add('loaded'), 100);
})();

// ── Active nav link ──
(function () {
  const links = document.querySelectorAll('.nav-links a:not(.nav-cta)');
  const current = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === current || (current === '' && href === 'index.html'));
  });
})();

// ── Intersection Observer: scroll reveal ──
(function () {
  const observe = () => {
    const items = document.querySelectorAll('.reveal:not(.visible)');
    if (!items.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    items.forEach(el => io.observe(el));
  };
  // Run on DOMContentLoaded and after small delay for dynamically rendered elements
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observe);
  } else {
    observe();
  }
  setTimeout(observe, 600);
})();

// ── Toast notification ──
window.showToast = function (message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type] || icons.info}</span> ${message}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
};

// ── Smooth scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
