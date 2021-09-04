const input = document.getElementById('validation-input');

input.addEventListener('blur', checkValueInput);

function checkValueInput(event) {
    const lenghtValue = this.dataset.length;

    event.currentTarget.value.length === Number(lenghtValue)
        ? (input.classList = 'valid')
        : (input.classList = 'invalid');
}