const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length');

input.addEventListener('blur', () => {

  if (input.value.length >= dataLength) {
    input.classList.remove('invalid')
    input.classList.add('valid')
  }
  if (input.value.length < dataLength) {
    input.classList.remove('valid')
    input.classList.add('invalid')
  }

  if (input.value.length === 0) {
    input.classList.remove('valid')
    input.classList.remove('invalid')
  }

})