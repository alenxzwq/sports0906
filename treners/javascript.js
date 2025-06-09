document.addEventListener('DOMContentLoaded', function() {
    // 1. Скрываем все карточки при загрузке (кроме тех, что должны быть видны)
    document.querySelectorAll('.trener_card').forEach(card => {
        if (!card.style.display || card.style.display === 'block') {
            card.style.display = 'none';
        }
    });

    // 2. Делегирование событий для кликов по тренерам
    document.querySelector('.container_coaching').addEventListener('click', function(e) {
        const trenerCard = e.target.closest('.cart_coaching');
        if (!trenerCard) return;
        
        const trenerId = trenerCard.dataset.trenerId;
        if (!trenerId) return;

        // Скрываем все карточки
        document.querySelectorAll('.trener_card').forEach(card => {
            card.style.display = 'none';
        });

        // Показываем нужную карточку
        const targetCard = document.querySelector(`#container_${trenerId}`).closest('.trener_card');
        if (targetCard) {
            targetCard.style.display = 'block';
            targetCard.classList.add('show');
            
            // Сброс слайдера к первому изображению
            const slider = targetCard.querySelector('.slider');
            if (slider) {
                const slides = slider.querySelectorAll('.slide');
                slides.forEach((slide, index) => {
                    slide.classList.toggle('active', index === 0);
                    card.classList.add('show');
                });
            }
        }
    });

    // 3. Закрытие карточек по крестику
    document.querySelectorAll('.trener_card .icon').forEach(icon => {
        icon.addEventListener('click', function() {
            this.closest('.trener_card').style.display = 'none';
        });
    });

    

    

    // 4. Инициализация слайдеров (если нужно)
    initAllSliders();
});

function initAllSliders() {
    document.querySelectorAll('.trener_card').forEach(card => {
        const slider = card.querySelector('.slider');
        if (!slider) return;
        
        const slides = slider.querySelectorAll('.slide');
        const prevBtn = card.querySelector('.arrow-left');
        const nextBtn = card.querySelector('.arrow-right');
        
        let currentIndex = 0;

        function updateSlider() {
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentIndex);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateSlider();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % slides.length;
                updateSlider();
            });
        }

        updateSlider();
    });
}



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