const categoriesItems = document.querySelectorAll('.item');


function getPageInfo(categoriesItems) {
  return [...categoriesItems].map(categories =>
    `Number of categories: ${categoriesItems.length}, 
    Category: ${categories.children[0].textContent}, 
    Elements: ${categories.children[1].children.length}.`).join(' ')
}

console.log(getPageInfo(categoriesItems))


