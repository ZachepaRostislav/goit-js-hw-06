const button = document.querySelector('.change-color');
const theColor = document.querySelector('.color');

button.addEventListener('click', () => {
  let currentColor = document.body.style.backgroundColor = getRandomHexColor()
  theColor.textContent = currentColor
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
