const refs = {
    input: document.getElementById('name-input'),
    span: document.getElementById('name-output'),
};
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    event.currentTarget.value.trim() === ''
        ? (refs.span.textContent = 'незнакомец')
        : (refs.span.textContent = event.currentTarget.value);
}