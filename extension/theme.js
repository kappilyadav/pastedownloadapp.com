(function () {
  var pref = 'system';
  try {
    pref = localStorage.getItem('pdaTheme') || 'system';
  } catch {
    // Storage unavailable, follow system
  }
  if (pref === 'light' || pref === 'dark') {
    document.documentElement.setAttribute('data-theme', pref);
  }
})();
