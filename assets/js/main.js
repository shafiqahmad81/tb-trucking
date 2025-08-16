const menu = document.getElementById("main-menu");
const hamburgerBtn = document.getElementById("menu-btn");
const close = document.getElementById("close");

// header section

window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) { // 50px স্ক্রল হলেই কাজ করবে
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
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
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
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


