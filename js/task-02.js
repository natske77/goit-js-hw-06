const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
  const itemList = document.createElement('li');
  itemList.textContent = ingredient;
  itemList.className = 'item';
  list.append(itemList);
});

console.log(list);