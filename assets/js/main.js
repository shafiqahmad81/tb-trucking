const menu = document.getElementById("main-menu");
const hamburgerBtn = document.getElementById("menu-btn");
const close = document.getElementById("close");

// header section

window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  const bannerWrap = document.querySelector('.banar-wrap');
  const banner = document.querySelector('.banar-content'); 
   // banner content selector

  if (window.scrollY > 0) {
    header.classList.add('sticky');
    bannerWrap.classList.add('scrolled');
    banner.classList.add('scrolled'); // scroll হলে margin কমবে
  } else {
    header.classList.remove('sticky');
    bannerWrap.classList.remove('scrolled');
    banner.classList.remove('scrolled'); // scroll top এ margin আবার বাড়বে
  }
});
 hamburgerBtn.addEventListener('click', () => {
    menu.classList.remove('menu-hidden'); // show menu
    close.classList.remove('close-hidden'); // show menu
  });

  close.addEventListener('click', () => {
    menu.classList.add('menu-hidden');
    close.classList.add('close-hidden'); // hide menu
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

  
  
document.getElementById("loadMoreBtn").addEventListener("click", function () {
  const hiddenItems = document.querySelectorAll(".service-area-wrap .card-hidden");
  
  hiddenItems.forEach(function (item) {
    item.classList.remove("card-hidden");
  });

  this.style.display = "none";
});


