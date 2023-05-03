const emailInput = document.querySelector('.about-us__input');
const errorField = document.querySelector('.about-us__error');
const form = document.querySelector('.about-us__form');
errorField.classList.remove('acitve');

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const result = validateEmail(emailInput.value);

  if (!result || !emailInput.value) {
    errorField.classList.add('active');
    emailInput.style = `
      border-color: var(--error-color);
    `;
  } else {
    errorField.classList.remove('active');
    emailInput.style = `border-color: transparent;`;
  }
})

emailInput.addEventListener('input', function() {
  const value = emailInput.value;

  if (value !== '') {
    const result = validateEmail(value);

    if (!result) {
      errorField.classList.add('active');
      emailInput.style = `
        border-color: var(--error-color);
      `;
    } else {
      errorField.classList.remove('active');
      emailInput.style = `border-color: transparent;`;
    }
  } else {
    errorField.classList.remove('active');
    emailInput.style = `border-color: transparent;`;
  }
})
