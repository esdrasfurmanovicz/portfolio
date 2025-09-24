const translations = {
    br: {

    },
    en: {

    }
}

let actualLang = 'br'

function applyTranslation(lang) {
    $('[data-translate]').each(function() {
        const key = $(this).data('translate')
        $(this).text(translations[lang][key])
    })
}

$('.language').on('click', function() {
    actualLang = $(this).attr('id')
    const newLang = actualLang === 'br' ? 'en' : 'br'

    $(this).addClass('hide')
    $(`#${newLang}`).removeClass('hide')

    applyTranslation(actualLang)
})

// Carrega a tradução inicial
$(document).ready(function() {
    applyTranslation(actualLang)
})
