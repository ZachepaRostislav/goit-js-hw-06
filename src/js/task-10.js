const mainBox = document.querySelector('#boxes');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');

buttonCreate.addEventListener('click', () => {
  createBoxes(9)
})

buttonDestroy.addEventListener('click', () => {
  destroyBoxes()
})


function createBoxes(amount) {
  const dimensions = {
    width: 20,
    height: 20,
  }
  for (let i = 0; i < amount; i++) {
    let div = document.createElement('div');
    dimensions.width += 10;
    dimensions.height += 10;
    div.classList.add('btn-css');
    div.style.width = dimensions.width + 'px';
    div.style.height = dimensions.height + 'px';
    div.style.backgroundColor = getRandomHexColor();
    mainBox.appendChild(div);
  }
}
function destroyBoxes() {
  const destroyDiv = document.querySelector('#boxes');
  // destroyDiv.remove()
  destroyDiv.innerHTML = ''
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
