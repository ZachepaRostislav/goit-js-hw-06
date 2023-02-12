const form = document.querySelector('.login-form');
const input = form.querySelectorAll('input');

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const { email, password } = event.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    return alert('все поля должны быть заполнены')
  }

  const inputValuesObj = {
    email: email.value,
    password: password.value
  }
  console.log(inputValuesObj);

  event.currentTarget.reset()

})
