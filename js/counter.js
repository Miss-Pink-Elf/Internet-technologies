// Счётчик посетителей (увеличивается 1 раз за сессию)
(function() {
   const STORAGE_KEY = 'site_visitor_count';
   const SESSION_FLAG = 'visit_counted_this_session';

   // Проверяем, увеличивали ли счётчик в этой сессии
   if (!sessionStorage.getItem(SESSION_FLAG)) {
       // Берём текущее значение из localStorage, если нет – начинаем с 0
       let count = parseInt(localStorage.getItem(STORAGE_KEY)) || 0;
       count++;
       localStorage.setItem(STORAGE_KEY, count);
       sessionStorage.setItem(SESSION_FLAG, 'true');
   }

   // Отображаем счётчик на всех страницах
   const counterSpan = document.querySelector('#visitor-counter span');
   if (counterSpan) {
       const currentCount = parseInt(localStorage.getItem(STORAGE_KEY)) || 0;
       counterSpan.textContent = currentCount;
   }
})();