const menu = document.getElementById("main-menu");
const hamburgerBtn = document.getElementById("menu-btn");
const close = document.getElementById("close");

 hamburgerBtn.addEventListener('click', () => {
    menu.classList.remove('hidden'); // show menu
  });

  close.addEventListener('click', () => {
    menu.classList.add('hidden'); // hide menu
  });