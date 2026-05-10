$(document).ready(function() {
   const grid = document.querySelector('#gallery-grid');
   let masonryInstance = null;

   function initMasonry() {
       imagesLoaded(grid, function() {
           if (masonryInstance) {
               masonryInstance.destroy();
           }
           masonryInstance = new Masonry(grid, {
               itemSelector: '.gallery-item',
               columnWidth: '.gallery-item',
               gutter: 20,
               percentPosition: true,
               FitWidth: false,
               transitionDuration: '0.3s'
           });
       });
   }

   initMasonry();

   let resizeTimer;
   $(window).on('resize', function() {
       clearTimeout(resizeTimer);
       resizeTimer = setTimeout(initMasonry, 150);
   });

   $('.gallery-item').on('click', function(e) {
       const img = $(this).find('img').attr('src');
       const captionTitle = $(this).find('.gallery-caption h3').text();
       const captionDesc = $(this).find('.gallery-caption p').text();

       const modal = $(`
           <div class="gallery-modal">
               <div class="modal-content">
                   <span class="modal-close">&times;</span>
                   <img src="${img}" alt="${captionTitle}">
                   <div class="modal-caption">
                       <h3>${captionTitle}</h3>
                       <p>${captionDesc}</p>
                   </div>
               </div>
           </div>
       `);

       $('body').append(modal);
       modal.fadeIn(200);

       // Закрытие по крестику или фону
       modal.on('click', function(e) {
           if (e.target === modal[0] || $(e.target).hasClass('modal-close')) {
               modal.fadeOut(200, function() { modal.remove(); });
           }
       });

       // Закрытие по Escape
       $(document).on('keydown.galleryModal', function(e) {
           if (e.key === 'Escape') {
               modal.fadeOut(200, function() { modal.remove(); });
               $(document).off('keydown.galleryModal');
           }
       });
   });
});
