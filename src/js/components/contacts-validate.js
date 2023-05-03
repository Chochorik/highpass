const errorFields = document.querySelectorAll('.connection__error');
const form = document.querySelector('.connection__form');
const labels = document.querySelectorAll('.connection__label');

const inputValidate = (value) => {
  return value.match(
    /^[a-zA-ZА-Яа-я]+$/
  );
}

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  for (const error of errorFields) {
    error.classList.remove('active');
  }

  for (const label of labels) {
    const input = label.querySelector('.connection__input');
    const error = label.querySelector('.connection__error');

    if (input.getAttribute('type') === 'email' || input.value === '') {
      if (!validateEmail(input.value)) {
        error.classList.add('active');
        input.style = `
          border-color: #FF3030;
        `;
      } else {
        error.classList.remove('active');
        input.style = `
          border-color: transparent;
        `;
      }
    }

    if (!inputValidate(input.value) || input.value === '') {
      error.classList.add('active');
      input.style = `
          border-color: #FF3030;
        `;
    } else {
      error.classList.remove('active');
      input.style = `
        border-color: transparent;
      `;
    }
  }
})

for (const label of labels) {
  const input = label.querySelector('.connection__input');
  const error = label.querySelector('.connection__error');

  input.addEventListener('input', function() {
    if (input.value !== '' && input.getAttribute('type') !== 'email') {
      if (!inputValidate(input.value)) {
        error.classList.add('active');
        input.style = `
          border-color: #FF3030;
        `;
      }
    } else if (input.value === '') {
      error.classList.remove('active');
      input.style = `
          border-color: transparent;
        `;
    } else if (input.value !== '' && input.getAttribute('type') === 'email') {
      if (!validateEmail(input.value)) {
        error.classList.add('active');
        input.style = `
          border-color: #FF3030;
        `;
      } else {
        error.classList.remove('active');
        input.style = `
            border-color: transparent;
          `;
      }
    }
  })
}

