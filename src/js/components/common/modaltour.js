((app) => {
    'use strict'
    app.component("modaltour", {
        templateUrl: 'js/components/common/modaltour.html',
        controller: function() {
            $('.Modal').addClass('Modal--is-open');
            $('.open-modal').hide()
            $('html, body').css('overflow', 'hidden');
            $('.open-modal').click(function(e) {
                e.preventDefault();
                if (!$('.Modal').hasClass('Modal--fullscreen')) {
                    $('.Modal').after('<div class="Modal__overlay">');
                    $('html, body').find('.Modal__overlay').fadeIn(400);
                }
                $('.Modal').addClass('Modal--is-open');
                $('.open-modal').hide()
                $('html, body').css('overflow', 'hidden');
            });
            $('html, body').on('click', '.Modal__overlay, .Modal__close', function(e) {
                $('.Modal').removeClass('Modal--is-open');
                $('html, body').find('.Modal__overlay').fadeOut(400, function() {
                    $(this).remove();
                });
                $('.open-modal').show()
                $('html, body').css('overflow', 'auto');
            });

            this.modalparcours = false
        }
    })



})(angular.module('app.common'))
