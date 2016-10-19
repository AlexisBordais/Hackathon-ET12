((app) => {
    'use strict'
    app.component("modal", {
        templateUrl: 'js/components/common/modal.html',
        controller: function() {
            $('.open-modal').click(function(e) {
                e.preventDefault();
                if (!$('.Modal').hasClass('Modal--fullscreen')) {
                    $('.Modal').after('<div class="Modal__overlay">');
                    $('html, body').find('.Modal__overlay').fadeIn(400);
                }
                $('.Modal').addClass('Modal--is-open');
                $('html, body').css('overflow', 'hidden');
            });
            $('html, body').on('click', '.Modal__overlay, .Modal__close', function(e) {
                $('.Modal').removeClass('Modal--is-open');
                $('html, body').find('.Modal__overlay').fadeOut(400, function() {
                    $(this).remove();
                });
                $('html, body').css('overflow', 'auto');
            });
        }
    })



})(angular.module('app.common'))
