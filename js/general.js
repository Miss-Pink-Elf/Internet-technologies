const scrollBtn = document.getElementById('scrollToTopBtn');

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
   if (window.scrollY > 300) {
       scrollBtn.style.display = 'flex';
   } else {
       scrollBtn.style.display = 'none';
   }
});

// обо мне
function toggleTooltip(id) {
    document.querySelectorAll('.starter-item').forEach(item => {
        if(item.id !== id) item.classList.remove('active');
    });

    const element = document.getElementById(id);
    element.classList.toggle('active');
}

// счетчик посетителей
(function() {
   const STORAGE_KEY = 'site_visitor_count';
   const SESSION_FLAG = 'visit_counted_this_session';

   if (!sessionStorage.getItem(SESSION_FLAG)) {
       let count = parseInt(localStorage.getItem(STORAGE_KEY)) || 0;
       count++;
       localStorage.setItem(STORAGE_KEY, count);
       sessionStorage.setItem(SESSION_FLAG, 'true');
   }

   const counterSpan = document.querySelector('#visitor-counter span');
   if (counterSpan) {
       const currentCount = parseInt(localStorage.getItem(STORAGE_KEY)) || 0;
       counterSpan.textContent = currentCount;
   }
})();
