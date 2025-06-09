document.getElementById('sendBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Отключаем отправку формы

    // Получаем элементы
    const fioInput = document.getElementById('FIO');
    const numberInput = document.getElementById('number');
    const formlWin = document.querySelector('.formWin');
    
    const errorOne = document.querySelector('.error_1');
    const errorTwo = document.querySelector('.error_2');

    // Очищаем ошибки и стили перед новой проверкой
    fioInput.style.border = '';
    numberInput.style.border = '';
    errorOne.classList.remove('show_1');
    errorTwo.classList.remove('show_2');

    const btnClose = document.querySelector('.close')

    btnClose.addEventListener('click', ()=>{
        formlWin.classList.remove('showForm');

    })

    const fio = fioInput.value.trim();
    const number = numberInput.value.trim();

    // Регулярные выражения
    const fioRegex = /^[А-Яа-яЁёA-Za-z]+ [А-Яа-яЁёA-Za-z]+$/;
    const phoneRegex = /^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/;

    let isValid = true;

    if (!fioRegex.test(fio)) {
        isValid = false;
        fioInput.style.border = '2px solid red';  // Красная рамка для поля ФИО
        errorOne.classList.add('show_1');        // Показываем ошибку для ФИО
    }

    if (!phoneRegex.test(number)) {
        isValid = false;
        numberInput.style.border = '2px solid red';  // Красная рамка для телефона
        errorTwo.classList.add('show_2');            // Показываем ошибку для телефона
    }

    if (isValid) {
        formlWin.classList.add('showForm');
        fioInput.value = '';
        numberInput.value = ''  // Показываем форму, если все данные корректны
    }
});


const menuToggle = document.getElementById('menu_mobile');
const sidePanel = document.getElementById('header_mobile');

menuToggle.addEventListener('click', ()=>{
    sidePanel.classList.toggle('open');
})

document.addEventListener('click', (event) =>{
    if (!sidePanel.contains(event.target) && !menuToggle.contains(event.target)){
        sidePanel.classList.remove('open');
    }
});