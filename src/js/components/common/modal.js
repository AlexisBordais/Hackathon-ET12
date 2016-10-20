((app) => {
    'use strict'
    app.component("modal", {
        templateUrl: 'js/components/common/modal.html',
        controller: function($scope, $http) {
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
            $http.get("BordeauxPOI.json")
                .then(function(r) {

                    $scope.data = r.data
                    var mapOptions = {
                        zoom: 15,
                        center: new google.maps.LatLng(44.84, -0.56) //,
                            //mapTypeId: google.maps.MapTypeId
                    }

                    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

                    $scope.markers = [];

                    var imagePath = "http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png";

                    for (let i = 0; i < $scope.data.length; i++) {
                        var data = $scope.data[i]

                        var marker = new google.maps.Marker({
                            map: $scope.map,
                            position: new google.maps.LatLng(data.Latitude, data.Longitude),

                            icon: imagePath,
                            title: data.Nom,
                            adress: data.Adresse,
                            desc: data.Description
                        })
                        marker.content = '<div class="infoWindowContent">' + data.Description + '</div>';

                        var infoWindow = new google.maps.InfoWindow();

                        google.maps.event.addListener(marker, 'click', function() {
                            $('.Modal').removeClass('Modal--is-open');
                            $('html, body').find('.Modal__overlay').fadeOut(400, function() {
                                    $(this).remove();
                                })
                            $('#full').append('<div class="imgfullmarker"><div class="container"><div class="row"><div class="col-xs-12"><h1>'+ this.title +'</h1><br><h2>'+this.adress+'</h2></div></div></div></div>')
                                // infoWindow.setContent('<h3>' + this.title + '</h3>' + this.content);
                                // infoWindow.open(this.map, this.marker);
                        })



                    }
                    $scope.openInfoWindow = function(e, selectedMarker) {
                        e.preventDefault();
                        google.maps.event.trigger(selectedMarker, 'click');
                    }

                })
            $scope.selected = 0;

            $scope.select = function(index) {
                $scope.selected = index;
            };
        }
    })



})(angular.module('app.common'))
