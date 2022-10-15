(function() {
var dictionary = {
    'projects': {
        'en': 'projects',
        'es': 'proyectos',
        'fr': 'projets',

    },
    'about': {
        'en': 'about me',
        'es': 'sobre mi',
        'fr': 'sur moi',
    },
    'contact': {
        'en': 'contact',
        'es': 'contacto',
        'fr': 'contacter',
    }

};

var langs = ['en', 'es', 'fr'];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = function(indx) {
    current_lang_index = indx;
    current_lang = langs[current_lang_index];
    translate(indx);
}

function translate(indx) {
    document.querySelectorAll("[data-translate]").forEach((ele) => {
        var key = ele.getAttribute("data-translate")
        ele.innerHTML = dictionary?.[key]?.[current_lang];
    })
}
translate("0")


})();

      
      
