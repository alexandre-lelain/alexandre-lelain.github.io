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
  $('.navbar-title').text("Bienvenue chez moi.");
  $('.landscape-title').text("Découvrez mes projets réalisés avec passion");
  $('.landscape-subtitle').text("Web, IA, Android,..");
  $('.landscape-button span').text("C'est parti");
  $('.cv a').text("Mon CV");
  $('.agent-web a').text("Agent Web");
  $('.top-shape a').text("Top Shape");
  $('.more-projects a').text("Projets en cours...");
  saveLangFr();
}

function tradEn(){
  $('.navbar-title').text("Welcome to my world.");
  $('.landscape-title').text("Discover my projects made with passion");
  $('.landscape-subtitle').text("Web, AI, Android,..");
  $('.landscape-button span').text("Let's go");
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
