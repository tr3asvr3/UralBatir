document.getElementById('uploadPhoto').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('uploadedImage');
            img.src = e.target.result;  // Устанавливаем источник изображения
            console.log('Image URL:', e.target.result); // Добавим вывод в консоль
            img.style.display = 'block';  // Показываем изображение
        };
        reader.readAsDataURL(file);  // Читаем файл как Data URL
    }
});
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
document.getElementById('publishButton').addEventListener('click', function() {
    // Перенаправление на указанную ссылку
    window.location.href = "https://t.me/diryakbot?start=per";
});ы