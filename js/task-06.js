const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const textLength = input.getAttribute('data-length');
  const inputLength = input.value.length;

  input.classList.remove('valid');
  input.classList.remove('invalid');

  if (inputLength >= textLength) {
    input.classList.add('valid');
  } else if (inputLength > 0) {
    input.classList.add('invalid');
  }
});