const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.getElementById('ingredients');

function markUP (options) {
    return options.map(option => {
        let li = document.createElement('li');
        li.textContent = option;
        return li;
    });
}
ingredientsEl.append(...markUP(ingredients));