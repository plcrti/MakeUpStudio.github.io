function submitForm(event) {
    event.preventDefault();  // Предотвращает перезагрузку страницы

    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const Review = document.getElementById('Review').value;

    if (name && service && Review) {
        console.log("Имя:", name);
        console.log("Услуга:", service);  
        console.log("Отзыв:", Review);
        alert("Спасибо за Ваш отзыв, нам важно повышать качество своей работы для наших любимых клиентов.");
        document.getElementById('form').reset();  // Сбросить форму
}   else {
        alert("Если Вы хотите оставить нам отзыв, то нужно обязательно заполнить все поля!");
    }
}

const button = document.getElementById('myButton');
        
button.addEventListener('click', function() {
window.location.href = 'https://otzovik.com/'; 
});