const ingredientsList = document.querySelector('#ingredients');


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі < li > за одну операцію у список ul#ingredients.

function createElement(array) {
  const newIngredients = [];
  array.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.classList.add('ingredient');
    newIngredients.push(li);

  })
  ingredientsList.append(...newIngredients);
}

createElement(ingredients);