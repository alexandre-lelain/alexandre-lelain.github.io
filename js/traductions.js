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
  $('.cv a').text("Qui suis-je ?");
  $('.more-projects a').text("Projets en cours...");
  saveLangFr();
}

function tradEn(){
  $('.cv a').text("Who am I ?");
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
