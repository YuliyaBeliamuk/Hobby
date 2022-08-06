alert('Привет, couch!');
const introduceButton = document.getElementById('introduce-btn');
const strangerName = document.getElementById('stranger-name');
const sportButton = document.getElementById('sport-btn');
const foodButton = document.getElementById('food-btn');
const rhetoricButton = document.getElementById('rhetoric-btn');


introduceButton.addEventListener('click', () => {
    const name = prompt('Привет!Как тебя зовут?', 'Полина');

    if (name) {
        strangerName.textContent = name;
    }
});

sportButton.addEventListener('click', () => {
    const sport = prompt('Какой любишь спорт?', 'Кардио тренировки');
});

foodButton.addEventListener('click', () => {
    const food = prompt('Твоя любимая еда?', 'Хлеб');
});

rhetoricButton.addEventListener('click', () => {
    const rhetoric = prompt('Нашла себя?', 'В поиске');
});