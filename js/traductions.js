const lang = {
    label: "lang",
    en: "en",
    fr: "fr"
};

function saveLangFr(){
  localStorage.setItem(lang.label,lang.fr);
}

function saveLangEn(){
  localStorage.setItem(lang.label,lang.en);
}

function tradFr(){
  $('h1').text("Bienvenue chez moi.");
  $('.cv a').text("Mon CV");
  $('.agent-web a').text("Agent Web");
  $('.top-shape a').text("Top Shape");
  $('.more-projects a').text("Projets en cours...");
  saveLangFr();
}

function tradEn(){
  $('h1').text("Welcome to my world.");
  $('.cv a').text("My Resume");
  $('.agent-web a').text("Web Agent");
  $('.top-shape a').text("Top Shape");
  $('.more-projects a').text("More projects soon...");
  saveLangEn();
}

function trad(){
  switch (localStorage.getItem(lang.label)) {
    case lang.en: tradEn();break;
    case lang.fr: tradFr();break;
    default: tradEn();break;
  }
}
