var myButton = document.getElementsByClassName("navbar-toggler")[0];
var myimg_white = document.getElementsByClassName("menu-img")[0];
var myimg_black = document.getElementsByClassName("menu-img-black")[0];

var isButtonClicked = false;

var openModalBtns = document.querySelectorAll(".main-block__button");
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close-btn")[0];


myButton.addEventListener("click", function() {
  if (isButtonClicked) {    
    myimg_white.setAttribute("src", "img/icons/menu-img-white.svg");
    isButtonClicked = false;
  } 
  else {
    myimg_white.setAttribute("src", "img/icons/menu-img-close.svg");
    isButtonClicked = true;
  }
});

myButton.addEventListener("click", function() {
    if (isButtonClicked) {    
      myimg_black.setAttribute("src", "../img/icons/menu-open-black.svg");
      isButtonClicked = false;
    } 
    else {
      myimg_black.setAttribute("src", "../img/icons/menu-img-close.svg");
      isButtonClicked = true;
    }
  });

  openModalBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      modal.style.display = "block";
    });
  });
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // коли користувач клікає поза модальним вікном, воно закривається
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }