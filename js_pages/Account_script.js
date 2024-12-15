function submitForm(event) {
    event.preventDefault();  // Предотвращает перезагрузку страницы

    const number = document.getElementById('number').value;
    const button = document.getElementById('myButton');

    if (number) {
        console.log("Номер телефона:", number);
        alert("Авторизация прошла успешно, теперь Вам доступно накопление и списание баллов.");
        document.getElementById('form').reset();  // Сбросить форму
    } else {
        alert("Пожалуйста, введите свой номер телефона!");  
    }
}