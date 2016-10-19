((app) => {
    'use strict'
    app.component("modaltourparcours", {
        templateUrl: 'js/components/common/modaltourparcours.html',
        controller: function($http, $scope) {
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
            })
            $http.get("BordeauxPOI.json")
                .then(function(r) {

                    $scope.data = r.data
                    var mapOptions = {
                        zoom: 15,
                        center: new google.maps.LatLng(44.84, -0.58) //,
                            //mapTypeId: google.maps.MapTypeId
                    }
                    
                    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

                    $scope.markers = [];

                    var imagePath = "http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png";

                    for (let i = 0; i < $scope.data.length; i++) {
                        if ($scope.data[i].Type === 'Romantique'){
                            var data = $scope.data[i]

                            var marker = new google.maps.Marker({
                                map: $scope.map,
                                position: new google.maps.LatLng(data.Latitude, data.Longitude),

                                icon: imagePath,
                                title: data.Nom
                            })
                            marker.content = '<div class="infoWindowContent">' + data.Description + '</div>';

                            var infoWindow = new google.maps.InfoWindow();

                            google.maps.event.addListener(marker, 'click', function() {
                                infoWindow.setContent('<h3>' + this.title + '</h3>' + this.content);
                                infoWindow.open(this.map, this.marker);
                            })
                        }


                    }
                    $scope.openInfoWindow = function(e, selectedMarker) {
                        e.preventDefault();
                        google.maps.event.trigger(selectedMarker, 'click');
                    }

                })
        }
    })
})(angular.module('app.common'))
