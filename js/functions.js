const mobileWidth = 768;
const motionSpeed = 700;

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor(e) {
  e.style.color = getRandomColor();
}

function hideCollapse(){
  $("#myNavbar").collapse('hide');
}

function topFunction() {
  $(document.body).animate({ scrollTop: 0 }, motionSpeed);
  $(document.documentElement).animate({ scrollTop: 0 }, motionSpeed);
}

function shakeMe(e){
    $(e).effect("shake");
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("btnTop").style.display = "block";
  } else {
      document.getElementById("btnTop").style.display = "none";
  }
}

function discover(){
    $("html, body").animate({ scrollTop: $(window).height()-70}, 800);
}

function displayMenuForMobile(){
    $(".span-us").text("english");
    $(".span-fr").text("français");
}

function animateFeatures(){
    if ($(window).width() > mobileWidth)
        $(".landscape-title").animate({opacity: "1",fontSize: "4.2em"},motionSpeed,()=>{animateSubTitle()});
    else {
        $(".landscape-title").animate({opacity: "1",fontSize: "2.4em"},motionSpeed,()=>{animateSubTitle()});
        displayMenuForMobile();
    }
}

function animateSubTitle(){
    if ($(window).width() > mobileWidth)
        $(".landscape-subtitle").animate({opacity: "1",fontSize: "3em"},motionSpeed,()=>{animateButton()});
    else {
        $(".landscape-subtitle").animate({opacity: "1",fontSize: "1.7em"},motionSpeed,()=>{animateButton()});
    }

}

function animateButton(){
    if ($(window).width() > mobileWidth)
        $(".landscape-button").animate({opacity: "1"},motionSpeed);
    else {
        $(".landscape-button").animate({opacity: "1"},motionSpeed);
    }
}

function initListeners(){
    window.onscroll = () => {scrollFunction()};
    animateFeatures();
}
