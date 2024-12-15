// Ждем окончания загрузки документа
$(function() {
    // Выбираем #flowplanes и делаем его доступным для прокручивания с помощью плагинов circular и navigator
    $("#flowpanes").scrollable({ circular: true, mousewheel: true}).navigator({		

        // Делаем рабочей кнопку "Назад" в браузере
        history: true
    });
});