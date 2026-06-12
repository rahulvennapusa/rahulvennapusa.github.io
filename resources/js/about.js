(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // Close responsive navbar when a scroll-trigger nav link is clicked
    var navCollapse = document.querySelector('#navbarSupportedContent');
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
