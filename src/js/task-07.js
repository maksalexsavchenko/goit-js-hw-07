const input = document.getElementById('font-size-control');
const text = document.getElementById('text');

input.addEventListener(
    'input',
    getSizeText => (text.style.fontSize = `${getSizeText.currentTarget.value}px`),
);