(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);
  btn && btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next); localStorage.setItem('theme', next);
  });
  if (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.setAttribute('data-theme', 'dark');
  }
})();