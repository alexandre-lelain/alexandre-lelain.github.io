const mobileWidth = 768;
const motionSpeed = 500;

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

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("btnTop").style.display = "block";
  } else {
      document.getElementById("btnTop").style.display = "none";
  }
}

function topFunction() {
  $(document.body).animate({ scrollTop: 0 }, motionSpeed);
  $(document.documentElement).animate({ scrollTop: 0 }, motionSpeed);
}

function discover(){
    $("html, body").animate({ scrollTop: $(window).height()/2}, 800);
}

function animate(){
    if ($(window).width() > mobileWidth)
        $(".landscape-title").animate({opacity: "1",fontSize: "4.2em"},motionSpeed);
    else
        $(".landscape-title").animate({opacity: "1",fontSize: "2.6em"},motionSpeed);
}
