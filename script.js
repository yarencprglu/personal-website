(() => {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.2 });
  document.querySelectorAll('.t-item').forEach(el => io.observe(el));

  const tl = document.querySelector('.timeline');
  const fill = tl.querySelector('.fill');
  const diver = tl.querySelector('.diver');
  const update = () => {
    const r = tl.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height));
    fill.style.height = diver.style.top = (p * 100) + '%';
  };
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
})();
