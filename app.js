var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      
    },
  });

function two() {
  
  var swiper2 = new Swiper(".mySwiper2", {
     slidesPerView: 5.5,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  
}
  two()