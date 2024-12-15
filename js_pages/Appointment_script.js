function submitForm(event) {
    event.preventDefault();  // Предотвращает перезагрузку страницы

    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const databirth = document.getElementById('databirth').value;
    const service = document.getElementById('service').value;
    const number = document.getElementById('number').value;
    const mail = document.getElementById('mail').value;
    const wishes = document.getElementById('wishes').value;
    const option = document.getElementById('option').value;

    if (name && lastname && databirth && service && number && mail && wishes && option) {
        console.log("Имя:", name);
        console.log("Фамилия:", lastname);
        console.log("Дата рождения:", databirth);
        console.log("Услуга:", service);
        console.log("Номер телефона:", number);
        console.log("Электронная почта:", mail);
        console.log("Пожелания:", wishes);
        console.log("Уже посещали:", option);
        alert("Спасибо, что выбираете нас. Вскоре мы увидим Вашу анкету и перезвоним Вам!");
        document.getElementById('form').reset();  // Сбросить форму
    } else {
        alert("Пожалуйста, заполните все обязательные поля!");
    }
}