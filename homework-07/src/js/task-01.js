const ulCalcLi = document.querySelectorAll('ul#categories li.item');
console.log('В списке ' + ulCalcLi.length + ' категории.');

const title = document.querySelector("ul#categories li.item h2");
console.log('Категория:' + title.textContent);

const liCategories = document.querySelector('ul#categories li.item');
const liCalc = liCategories.querySelectorAll('li');
console.log('Количество элементов:' + liCalc.length);
