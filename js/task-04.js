let counterValue = 0;

const buttonDecrement = document.querySelector('[data-action="decrement"]')
const buttonIncrement = document.querySelector('[data-action="increment"]')
const value = document.querySelector('#value');


buttonDecrement.addEventListener('click', () => {
  value.textContent = counterValue -= 1
})
buttonIncrement.addEventListener('click', () => {
  value.textContent = counterValue += 1
})