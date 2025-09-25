/**
 * About Page Specific JS
 * Toggle idioma + Typed.js para hero section
 */
(function () {
  "use strict";

  /**
   * -------------------------
   * Scrolled header
   * -------------------------
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * -------------------------
   * Mobile nav toggle
   * -------------------------
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  // Hide mobile nav on same-page/hash links
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) mobileNavToogle();
    });
  });

  // Toggle mobile nav dropdowns
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) window.addEventListener('load', () => preloader.remove());

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop?.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll init
   */
  function aosInit() {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
  }
  window.addEventListener('load', aosInit);

  /**
   * Typed.js
   */
  function initTyped() {
    document.querySelectorAll('.typed').forEach(el => {
      const strings = el.getAttribute('data-typed-items').split(',').map(s => s.trim());
      // cria uma instância independente para cada .typed
      new Typed(el, {
        strings: strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    });
  }
  window.addEventListener('load', initTyped);

  /**
   * Skills animation
   */
  function initSkillsAnimation() {
    document.querySelectorAll('.skills-animation').forEach(item => {
      new Waypoint({
        element: item,
        offset: '80%',
        handler: function () {
          item.querySelectorAll('.progress .progress-bar').forEach(el => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
        }
      });
    });
  }
  window.addEventListener('load', initSkillsAnimation);

  /**
   * PureCounter
   */
  if (typeof PureCounter !== 'undefined') new PureCounter();

  /**
   * Swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(swiperElement => {
      let config = JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());
      if (swiperElement.classList.contains("swiper-tab")) initSwiperWithCustomPagination(swiperElement, config);
      else new Swiper(swiperElement, config);
    });
  }
  window.addEventListener("load", initSwiper);

  /**
   * Isotope layout and filters
   */
  function initIsotopeLayouts() {
    document.querySelectorAll('.isotope-layout').forEach(isotopeItem => {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope;
      imagesLoaded(isotopeItem.querySelector('.isotope-container'), () => {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(filters => {
        filters.addEventListener('click', function () {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({ filter: this.getAttribute('data-filter') });
          if (typeof aosInit === 'function') aosInit();
        });
      });
    });
  }
  window.addEventListener('load', initIsotopeLayouts);

  /**
   * GLightbox
   */
  const glightbox = GLightbox({ selector: '.glightbox' });

})();

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const btn = document.getElementById('lang-toggle');

  // -------------------------------
  // Função para aplicar idioma
  // -------------------------------
  function applyLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
      if (el.getAttribute('data-lang') === lang) el.classList.remove('d-none');
      else el.classList.add('d-none');
    });
  }

  // -------------------------------
  // Carrega idioma salvo no LocalStorage
  // -------------------------------
  let savedLang = localStorage.getItem('siteLang') || 'pt';
  body.dataset.lang = savedLang;
  applyLanguage(savedLang);

  // -------------------------------
  // Listener para botão de toggle
  // -------------------------------
  if (btn) {
    btn.addEventListener('click', function () {
      const newLang = body.dataset.lang === 'pt' ? 'en' : 'pt';
      btn.innerText = newLang
      body.dataset.lang = newLang;
      localStorage.setItem('siteLang', newLang);
      applyLanguage(newLang);

      // Reinicializa animações
      if (typeof AOS !== 'undefined') AOS.refresh();
    });
  }
});
