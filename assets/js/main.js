/**
* Template Name: FolioOne
* Template URL: https://bootstrapmade.com/folioone-bootstrap-portfolio-website-template/
* Updated: Sep 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
  "use strict";
/**
 * -------------------------
 * Language toggle function
 * -------------------------
 */
function toggleLanguage() {
  const body = document.body;
  const btn = document.getElementById('lang-toggle');

  // Lê idioma salvo no LocalStorage ou usa padrão
  let currentLang = localStorage.getItem('siteLang') || 'pt';
  // Alterna idioma
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  body.dataset.lang = currentLang;

  // Atualiza todos os elementos com [data-lang]
  document.querySelectorAll('[data-lang]').forEach(el => {
    if (el.getAttribute('data-lang') === currentLang) el.classList.remove('d-none');
    else el.classList.add('d-none');
  });

  // Atualiza botão
  if (btn) btn.textContent = currentLang === 'pt' ? 'EN' : 'PT';

  // Atualiza placeholders e textos do formulário
  updateFormLang(currentLang);

  // Salva no LocalStorage
  localStorage.setItem('siteLang', currentLang);
  return currentLang;
}

// Torna a função global para onclick no HTML
window.toggleLanguage = toggleLanguage;

// Função para atualizar placeholders e textos do formulário
function updateFormLang(lang) {
  const placeholders = {
    pt: {
      name: "Seu Nome",
      email: "Seu Email",
      subject: "Assunto",
      message: "Mensagem",
      submit: "Enviar Mensagem",
      loading: "Carregando",
      sent: "Sua mensagem foi enviada. Obrigado!"
    },
    en: {
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Message",
      submit: "Send Message",
      loading: "Loading",
      sent: "Your message has been sent. Thank you!"
    }
  };

  const form = document.querySelector('.php-email-form');
  if (!form) return;

  form.querySelector('input[name="name"]').placeholder = placeholders[lang].name;
  form.querySelector('input[name="email"]').placeholder = placeholders[lang].email;
  form.querySelector('input[name="subject"]').placeholder = placeholders[lang].subject;
  form.querySelector('textarea[name="message"]').placeholder = placeholders[lang].message;
  form.querySelector('button[type="submit"]').textContent = placeholders[lang].submit;

  const loadingEl = form.querySelector('.loading');
  if (loadingEl) loadingEl.textContent = placeholders[lang].loading;

  const sentEl = form.querySelector('.sent-message');
  if (sentEl) sentEl.textContent = placeholders[lang].sent;
}

// Aplica idioma inicial ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const btn = document.getElementById('lang-toggle');
  const savedLang = localStorage.getItem('siteLang') || 'pt';
  body.dataset.lang = savedLang;

  document.querySelectorAll('[data-lang]').forEach(el => {
    if (el.getAttribute('data-lang') === savedLang) el.classList.remove('d-none');
    else el.classList.add('d-none');
  });

  if (btn) btn.textContent = savedLang === 'pt' ? 'EN' : 'PT';

  // Atualiza placeholders e textos do formulário
  updateFormLang(savedLang);
});

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
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items').split(',');
    new Typed('.typed', { strings: typed_strings, loop: true, typeSpeed: 100, backSpeed: 50, backDelay: 2000 });
  }

  /**
   * Skills animation
   */
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

  /**
   * GLightbox
   */
  const glightbox = GLightbox({ selector: '.glightbox' });

})();
