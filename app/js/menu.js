const mobileMenu = document.querySelector('#mobile-menu');
const burgerIcon = document.querySelector('.nav-icon-toggle');
const menuOptions = document.querySelectorAll('.menu-option');

function showMenu() {
  mobileMenu.classList.toggle('display-menu');
  if (mobileMenu.classList.contains('display-menu')) {
    burgerIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    burgerIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
}

burgerIcon.addEventListener('click', showMenu);
menuOptions.forEach(
  (option) => {
    option.addEventListener('click', showMenu);
  },
);
