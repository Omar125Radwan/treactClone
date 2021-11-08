// jQuery
$(document).ready(function() {
  $(window).scroll(function(){
    if($(window).scrollTop() >= 100) {
      $('.navbar').addClass('bg-black');
      $('.back-top').fadeIn(200);
    } else {
      $('.navbar').removeClass('bg-black');
      $('.back-top').fadeOut(200);
    }
  });
  $(".back-top").click(function () {
    $("html, body").animate({
      scrollTop: 0,
      behavior: 'smooth'
    }, 1000)
  });
  
});

// swiper js
var swiper = new Swiper(".opinions", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".pagination .fa-arrow-right",
    prevEl: ".pagination .fa-arrow-left",
  },
});

//Wow Lib
new WOW().init();