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
  $(document.body).animate({ scrollTop: 0 }, 500);
  $(document.documentElement).animate({ scrollTop: 0 }, 500);
}
