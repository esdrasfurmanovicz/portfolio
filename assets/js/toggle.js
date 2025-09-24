/**
 * About Page Specific JS
 * Toggle idioma + Typed.js para hero section
 */
(function () {
  "use strict";

  // -------------------------------
  // Typed.js para hero section
  // -------------------------------
  const heroTyped = document.querySelector('.hero .typed');
  if (heroTyped) {
    let typedStrings = heroTyped.getAttribute('data-typed-items').split(',');
    new Typed(heroTyped, {
      strings: typedStrings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // -------------------------------
  // Iniciar AOS (animações)
  // -------------------------------
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  // -------------------------------
  // Scroll top button
  // -------------------------------
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    });

    scrollTop.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // -------------------------------
  // PureCounter
  // -------------------------------
  if (typeof PureCounter !== 'undefined') new PureCounter();

})();

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const btn = document.getElementById('lang-toggle');

  // -------------------------------
  // Função para aplicar idioma
  // -------------------------------
  function applyLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
      if (el.getAttribute('data-lang') === lang) {
        el.classList.remove('d-none');
      } else {
        el.classList.add('d-none');
      }
    });

  }

  // -------------------------------
  // Carrega idioma salvo no LocalStorage
  // -------------------------------
  let savedLang = localStorage.getItem('siteLang');
  if (!savedLang) savedLang = 'pt'; // padrão
  body.dataset.lang = savedLang;
  applyLanguage(savedLang);

  // -------------------------------
  // Listener para botão de toggle
  // -------------------------------
  if (btn) {
    btn.addEventListener('click', function () {
      const newLang = body.dataset.lang === 'pt' ? 'en' : 'pt';
      body.dataset.lang = newLang;
      localStorage.setItem('siteLang', newLang); // salva no navegador
      applyLanguage(newLang);

      // Se quiser, pode reinicializar AOS ou Typed.js aqui
      if (typeof AOS !== 'undefined') AOS.refresh();
    });
  }

});
