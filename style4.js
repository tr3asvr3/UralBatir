document.addEventListener('DOMContentLoaded', function () {
    const namePContainer = document.getElementById('NameP');
    const dropdownMenu = document.getElementById('dropdown-menu');

    // Обработчик события на клик по контейнеру
    namePContainer.addEventListener('click', function(event) {
        // Переключаем класс для показа или скрытия списка
        dropdownMenu.classList.toggle('show');
        
        // Останавливаем всплытие события, чтобы клик по контейнеру не закрывал меню сразу
        event.stopPropagation();
    });

    // Обработчик события на клик по документу (клик вне контейнера и меню)
    document.addEventListener('click', function(event) {
        // Если клик был не по контейнеру или не по меню
        if (!namePContainer.contains(event.target) && !dropdownMenu.contains(event.target)) {
            // Скрываем меню
            dropdownMenu.classList.remove('show');
        }
    });
});