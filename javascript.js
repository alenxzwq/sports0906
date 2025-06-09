
//--------------------SLIDER----------------------------------//

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const slides = document.querySelectorAll('.slide');
const bottom = document.getElementById('bottom');
const slider = document.querySelector('.slider');

let currentSlideIndex = 0;
let startX = 0;
const dots = [];

// Создаем точки пагинации
function createDot() {
    const div = document.createElement('div');
    div.className = 'dot';
    div.dataset.slide = dots.length;
    bottom.appendChild(div);
    dots.push(div);
}

// Инициализация точек пагинации
function addDots() {
    slides.forEach((_, index) => createDot());
    dots[0].classList.add('active');

    // Добавляем обработчики кликов на точки
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
}

// Переход к конкретному слайду
function goToSlide(index) {
    currentSlideIndex = index;
    updateSlider();
    setActiveDot();
}

// Обновление позиции слайдера
function updateSlider() {
    slider.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

// Установка активной точки
function setActiveDot() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlideIndex].classList.add('active');
}

// Изменение слайда с проверкой границ
function changeSlide(newIndex) {
    if (newIndex < 0) {
        currentSlideIndex = slides.length - 1;
    } else if (newIndex >= slides.length) {
        currentSlideIndex = 0;
    } else {
        currentSlideIndex = newIndex;
    }
    
    updateSlider();
    setActiveDot();
}

// Инициализация слайдера
function initSlider() {
    addDots();
    updateSlider();
}

// Обработчики событий
arrowLeft.addEventListener('click', () => {
    changeSlide(currentSlideIndex - 1);
});

arrowRight.addEventListener('click', () => {
    changeSlide(currentSlideIndex + 1);
});

slider.addEventListener('touchstart', (event) => {
    startX = event.changedTouches[0].clientX;
});

slider.addEventListener('touchend', (event) => {
    let endX = event.changedTouches[0].clientX;
    if (startX > endX + 50) {
        changeSlide(currentSlideIndex + 1);
    } else if (startX < endX - 50) {
        changeSlide(currentSlideIndex - 1);
    }
});

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', initSlider);




//--------------------------------------------------------------------//

//------------------------MODAL WINDOW--------------------------------//

document.addEventListener('DOMContentLoaded', () =>{
    const modal = document.getElementById('modalWin');
    const closeBTN = document.getElementById('closeBTN');

    modal.classList.add('show');

    closeBTN.addEventListener('click', ()=>{
        modal.classList.remove('show');
    })
})









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



document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const sidebar = document.querySelector('.mobile-sidebar');
  const closeBtn = document.querySelector('.close-btn');
  
  menuBtn.addEventListener('click', function() {
    sidebar.classList.add('active');
  });
  
  closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('active');
  });
  
  // Закрытие при клике вне сайдбара
  document.addEventListener('click', function(e) {
    if (!sidebar.contains(e.target) && e.target !== menuBtn) {
      sidebar.classList.remove('active');
    }
  });
});

//-----------------------HEADER-MOBILE----------------------------//

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