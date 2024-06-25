var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
        
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      
    },
  });

  swiper()