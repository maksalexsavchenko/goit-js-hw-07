const counterBtns = document.querySelectorAll('#counter button');

let currentValue = 0;

counterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const DATASET = {
            INCREMENT: 'increment',
            DECREMENT: 'decrement',
        };

        const action = this.dataset.action;
        const value = document.getElementById('value');

        switch (action) {
            case DATASET.INCREMENT:
                currentValue += 1;
                value.textContent = currentValue;
                break;

            case DATASET.DECREMENT:
                currentValue > 0 ? (currentValue -= 1) : 0;
                value.textContent = currentValue;
                break;
        }
    });
});