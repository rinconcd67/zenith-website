/* Zenith: menú móvil, recuerdo de idioma y mapa de hubs */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var lang = document.querySelector('a.lang');
    if (lang) lang.addEventListener('click', function () {
      try { localStorage.setItem('zenith-lang', lang.getAttribute('hreflang')); } catch (e) {}
    });
    var mb = document.getElementById('menuBtn'), nav = document.getElementById('mainNav');
    if (mb && nav) mb.addEventListener('click', function () {
      nav.classList.toggle('open');
      mb.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    var pins = document.querySelectorAll('.mapbox .pin');
    function openHub(id, scroll) {
      document.querySelectorAll('.hub').forEach(function (d) { d.open = (d.id === 'hub-' + id); });
      pins.forEach(function (p) { p.classList.toggle('on', p.getAttribute('data-hub') === id); });
      var d = document.getElementById('hub-' + id);
      if (d && scroll) d.scrollIntoView({ block: 'nearest', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
    pins.forEach(function (p) {
      p.addEventListener('click', function (e) { e.preventDefault(); openHub(p.getAttribute('data-hub'), true); });
    });
  });
})();
