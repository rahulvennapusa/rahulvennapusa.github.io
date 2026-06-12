(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.getElementById('mainNav');
    var navCollapse = document.querySelector('#navbarMain');

    // Add shadow to navbar after scrolling past hero
    if (nav) {
      window.addEventListener('scroll', function () {
        nav.classList.toggle('navbar-scrolled', window.scrollY > 50);
      });
    }

    // Collapse mobile nav on anchor link click
    document.querySelectorAll('.js-scroll-trigger').forEach(function (link) {
      link.addEventListener('click', function () {
        if (navCollapse && navCollapse.classList.contains('show')) {
          var bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      });
    });
  });
}());
