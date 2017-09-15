const mobileWidth = 768;
const tabletWidth = 1134;
const motionSpeed = 700;
var subtitleList = ["AI","Android","Coffee","Web"];

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
  if ($(window).width() > tabletWidth)
  $(".landscape-title").animate({opacity: "1",fontSize: "4.2em"},motionSpeed,()=>{animateSubTitle()});
  else if ($(window).width() > mobileWidth) {
    $(".landscape-title").animate({opacity: "1",fontSize: "3em"},motionSpeed,()=>{animateSubTitle()});
  }
  else {
    $(".landscape-title").animate({opacity: "1",fontSize: "2.4em"},motionSpeed,()=>{animateSubTitle()});
    displayMenuForMobile();
  }
}

function animateSubTitle(){
  if ($(window).width() > tabletWidth)
  $(".landscape-subtitle").animate({opacity: "1",fontSize: "3em"},motionSpeed,()=>{animateButton()});
  else if ($(window).width() > mobileWidth) {
    $(".landscape-subtitle").animate({opacity: "1",fontSize: "2em"},motionSpeed,()=>{animateButton()});
  }
  else {
    $(".landscape-subtitle").animate({opacity: "1",fontSize: "1.7em"},motionSpeed,()=>{animateButton()});
  }
}

function animateButton(){
  $(".landscape-button").animate({opacity: "1"},motionSpeed,()=>{subtitleLoop()});
}

function subtitleLoop(){
  animateSubTitleLoop();
  setInterval(function(){
    animateSubTitleLoop()
  }, 2000);
}

function animateSubTitleLoop(){
  $(".landscape-subtitle").animate({opacity: "0"},1000,() => {
    $(".landscape-subtitle").text(subtitleList[0]);
    $(".landscape-subtitle").animate({opacity: "1"},1000,() => {
      updateSubtitleList();
    });
  });
}

function updateSubtitleList(){
  subtitleList[subtitleList.length] = subtitleList[0];
  subtitleList.splice(0,1);
}

function initListeners(){
  window.onscroll = () => {scrollFunction()};
  animateFeatures();
}
