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
  $('.landscape-subtitle').text("Web");
  $('.landscape-button span').text("C'est parti");
  $('.cv a').text("Mon Web-CV");
  $('.agent-web a').text("Agent Web");
  $('.top-shape a').text("Top Shape");
  $('.more-projects a').text("Projets en cours...");
  $('.more-info').prop("title","cliquez pour plus d'information");
  $('.modal-title-agentWeb').text("Agent Web");
  $('.modal-body-agentWeb .strong1').text("Description :");
  $('.modal-body-agentWeb .p1').text("Agent Web est un plugin opensource écrit en Javascript déstiné aux développeurs souhaitant intégrer un assistant personnel à leur site web.");
  $('.modal-body-agentWeb .p2').text("L'agent possède quelques intéractions avec l'utilisateur : il réagit si on lui clique dessus, si on le déplace à l'aide d'un 'drag', et peut répondre à quelques phrases basiques telles que 'comment vas-tu ?', 'hello','help',...");
  $('.modal-body-agentWeb .strong2').text("Remarque :");
  $('.modal-body-agentWeb .p3').text("Ce projet est un 'poc' (proof of concept), et n'en est qu'au stade de prototype, c'est pour cela que le nombre d'intéractions de l'agent est très limité, l'objectif étant juste de poser l'architecture (le squelette) de l'assistant web.");
  $('.modal-body-topshape .strong1').text("Description :");
  $('.modal-body-topshape .p1').text("Top Shape est une application Android permettant de calculer son IMC (indice de masse corporelle) ainsi que son IMG (indice de masse grasse) à l'aide de différents outils. L'application propose également un suivi quotidien de ces indices pour que l'utilisateurs puisse visualiser son évolution.");
  $('.modal-body-topshape .strong2').text("Remarque :");
  $('.modal-body-topshape .p3').text("L'application n'est disponible qu'en français à ce jour.");
  $('.btn-modal').text("Fermer");
  saveLangFr();
}

function tradEn(){
  $('.navbar-title').text("Welcome to my world.");
  $('.landscape-title').text("Discover my projects made with passion");
  $('.landscape-subtitle').text("Web");
  $('.landscape-button span').text("Let's go");
  $('.cv a').text("My Web-Resume");
  $('.agent-web a').text("Web Agent");
  $('.top-shape a').text("Top Shape");
  $('.more-projects a').text("More projects soon...");
  $('.more-info').prop("title","click for more information");
  $('.modal-title-agentWeb').text("Web Agent");
  $('.modal-body-agentWeb .strong1').text("What is Web Agent ?");
  $('.modal-body-agentWeb .p1').text("It is an open-source plugin written in Javascript for web developpers willing to integrate a personnal assistant in their web application.");
  $('.modal-body-agentWeb .p2').text("The agent is able to interact with the user : it reacts if one clicks on it or if one drags it, and it can understand and reply to few basic sentences. For now, french is the only language supported but you can customize the assistant to make it reply in english.");
  $('.modal-body-agentWeb .strong2').text("Note :");
  $('.modal-body-agentWeb .p3').text("This project is just a 'poc' (proof of concept) and it's still under development, this is why its capacities are relatively limited as the main goal of the project was just to build the architecture of an personnal web assistant.");
  $('.modal-body-topshape .strong1').text("What is Top Shape ?");
  $('.modal-body-topshape .p1').text("Top Shape is an Android application that gives the users some tools to measure their BMI (Body Mass Index) and BFI (Body Fat Index) using different formulas. The application also offers a daily checkup of those indexes, in order to provide the users a way to visualize their evolution over time.");
  $('.modal-body-topshape .strong2').text("Note :");
  $('.modal-body-topshape .p3').text("Only french is supported by now.");
  $('.btn-modal').text("Close");
  saveLangEn();
}

function trad(){
  switch (localStorage.getItem(lang.label)) {
    case lang.en: tradEn();break;
    case lang.fr: tradFr();break;
    default: tradEn();break;
  }
}
