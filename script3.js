const showBusCheckbox = document.getElementById('showBus');
const showBusCheckbox2 = document.getElementById('showBus2');
const showBusCheckbox3 = document.getElementById('showBus3');
const showBusCheckbox4 = document.getElementById('showBus4');

// Получение элементов автобусов
const busOffer1 = document.getElementById('busOffer1');
const busOffer2 = document.getElementById('busOffer2');
const busOffer3 = document.getElementById('busOffer3');
const busOffer4 = document.getElementById('busOffer4');

// Функция управления отображением автобусов
function toggleBusOffers() {
    // Отображение отдельных автобусов
    busOffer1.classList.toggle('show', showBusCheckbox.checked);
    busOffer2.classList.toggle('show', showBusCheckbox2.checked);
    busOffer3.classList.toggle('show', showBusCheckbox3.checked);

    // Условие для 3-х чекбоксов
    if (showBusCheckbox.checked && showBusCheckbox2.checked && showBusCheckbox3.checked) {
        busOffer4.classList.add('show');
    } else {
        busOffer4.classList.remove('show');
    }

    // Условие для всех 4-х чекбоксов
    if (showBusCheckbox.checked && showBusCheckbox2.checked && showBusCheckbox3.checked && showBusCheckbox4.checked) {
        busOffer4.querySelector('.bus-name').textContent = "Ultimate Premium Bus";
        busOffer4.classList.add('show');
    } else if (!(showBusCheckbox.checked && showBusCheckbox2.checked && showBusCheckbox3.checked)) {
        busOffer4.querySelector('.bus-name').textContent = "Premium Bus";
    }
}

// Привязка событий к каждому чекбоксу
showBusCheckbox.addEventListener('change', toggleBusOffers);
showBusCheckbox2.addEventListener('change', toggleBusOffers);
showBusCheckbox3.addEventListener('change', toggleBusOffers);
showBusCheckbox4.addEventListener('change', toggleBusOffers);