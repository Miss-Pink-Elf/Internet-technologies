const scrollBtn = document.getElementById('scrollToTopBtn');

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Делает прокрутку плавной
    });
});

window.addEventListener('scroll', () => {
   if (window.scrollY > 300) {
       scrollBtn.style.display = 'flex';
   } else {
       scrollBtn.style.display = 'none';
   }
});

function toggleTooltip(id) {
    // Находим все подсказки и закрываем их
    document.querySelectorAll('.starter-item').forEach(item => {
        if(item.id !== id) item.classList.remove('active');
    });

    // Переключаем класс активного предмета
    const element = document.getElementById(id);
    element.classList.toggle('active');
}