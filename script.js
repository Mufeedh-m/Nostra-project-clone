var navbar = document.querySelector(".navbar")
var para = document.getElementById("navpara")
para.addEventListener("click", function () {
  navbar.style.display = "none"

}

)

document.addEventListener("DOMContentLoaded", function () {
  const hearts = document.querySelectorAll('.heart-icon');

  hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
      heart.classList.toggle('fa-regular');
      heart.classList.toggle('fa-solid');
    });
  });
});
var sliderLeftButton = document.getElementById("prev");
var sliderRightButton = document.getElementById("next");
var sliderImage = document.querySelector(".slider-img-container");

var sliderMargin = 0;
var slideWidth = 100;
var maxMargin = 200; // 3 images (0, 100, 200)

next.addEventListener("click", function () {
  sliderMargin += slideWidth;
  if (sliderMargin > maxMargin) {
    sliderMargin = 0;
  }
  sliderImage.style.marginLeft = `-${sliderMargin}vw`;
});

prev.addEventListener("click", function () {
  if (sliderMargin === 0) {
    sliderMargin = maxMargin;
  } else {
    sliderMargin -= slideWidth;
  }
  sliderImage.style.marginLeft = `-${sliderMargin}vw`;
});

var sidenav=document.getElementById("sidenav")
var menubar=document.getElementById("menu-bar")
var closenav=document.getElementById("closenav")
 
menubar.addEventListener("click",function(){
  sidenav.style.right="0";
})
closenav.addEventListener("click",function(){
  sidenav.style.right="-100%"; 
})
