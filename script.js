//  For smoooth scrolling in web pages
// step 1:- get sooth scrolljs link cdn
// step 2:- get smooth scroll min.css link using cdn
// step 3:- get smooth scrollbar code from github

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// var a = document.querySelector("#elem1");
// var image = a.getAttribute("data-image");
// console.log(image);

function Page4Animation() {
  var elemC = document.querySelector(".elem-container");
  var fixed = document.querySelector(".fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  // For image  pop up
  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = this.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}
Page4Animation();

function Swiperfunc() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

Swiperfunc();

function fullSrc() {
  var menu = document.querySelector("nav h3");
  var Full = document.querySelector("#full-src");
  var NavImg = document.querySelector("nav img");
  var flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      Full.style.top = 0;
      NavImg.style.opacity = 0;
      flag = 1;
    } else {
      Full.style.top = "-100%";
      NavImg.style.opacity = 1;
      flag = 0;
    }
  });
}
fullSrc();

var loader = document.querySelector("#Loader");
setTimeout(() => {
  loader.style.top = "-100%";
}, 4000);
