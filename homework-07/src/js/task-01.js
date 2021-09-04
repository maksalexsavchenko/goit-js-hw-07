const tags = {
    categories: document.getElementById('categories'),
    item: document.querySelectorAll('#categories .item'),
};

console.log(`В списке ${tags.categories.childElementCount} категории.`);

tags.item.forEach(item => {
    item.querySelectorAll('h2').forEach(name => console.log(`Категория: ${name.textContent}`)),
        console.log(`Количество элементов: ${item.querySelectorAll('li').length}`)
});

