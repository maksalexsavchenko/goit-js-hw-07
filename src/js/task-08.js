const refs = {
    render: document.querySelector('[data-action="render"]'),
    destroy: document.querySelector('[data-action="destroy"]'),
    input: document.querySelector('#controls input'),
    box: document.getElementById('boxes'),
};
let initialSizeBox = 30;

refs.render.addEventListener('click', renderBox);
refs.destroy.addEventListener('click', destroyBox);

function renderBox() {
    let inputValue = Number(refs.input.value);
    let createBox = [];
    for (let i = 0; i <= inputValue; i++) {
        if (i !== 0) {
            let box = `<div style="width:${initialSizeBox}px; height:${initialSizeBox}px; background-color: ${getRandomHexColor()};"></div>`;
            createBox.push(box);
            initialSizeBox += 10;
        }
    }
    refs.box.insertAdjacentHTML('beforeend', createBox.join(''));
}

function destroyBox() {
    refs.box.innerHTML = '';
    initialSizeBox = 30;
    refs.input.value = '';
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}