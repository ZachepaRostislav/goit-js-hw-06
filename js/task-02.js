const ingredientsList = document.querySelector('#ingredients');


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


function createElement(array) {

  return array.map(item => {
    const li = document.createElement('li');
    li.classList.add('ingredient');
    li.textContent = item;
    ingredientsList.append(li)
  })
}

createElement(ingredients);