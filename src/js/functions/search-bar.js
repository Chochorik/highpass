const searchBtn = document.querySelector('.header__search');
const form = document.querySelector('.header__search-field');
const closeSearchBtn = document.querySelector('.header__search-btn');

searchBtn.addEventListener('click', function(e) {
  e.preventDefault();

  form.classList.add('active');
  searchBtn.classList.add('disabled');
})

closeSearchBtn.addEventListener('click', function(e) {
  e.preventDefault();

  form.classList.remove('active');
  searchBtn.classList.remove('disabled');
})
