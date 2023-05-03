const burgerBtn = document.querySelector('.header__burger-btn');
const burgerMenu = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger__close-btn');

burgerBtn.addEventListener('click', function(e) {
  e.preventDefault();

  burgerMenu.classList.add('active');
})

burgerClose.addEventListener('click', function(e) {
  e.preventDefault();

  burgerMenu.classList.remove('active');
})
