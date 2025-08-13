const menu = document.getElementById("main-menu");
const hamburgerBtn = document.getElementById("menu-btn");
const close = document.getElementById("close");

 hamburgerBtn.addEventListener('click', () => {
    menu.classList.remove('hidden'); // show menu
  });

  close.addEventListener('click', () => {
    menu.classList.add('hidden'); // hide menu
  });

  const swiper = new Swiper('.testimonial-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });