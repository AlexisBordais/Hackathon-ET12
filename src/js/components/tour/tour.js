((app) => {
    'use strict'
    app.component('tour', {
        templateUrl: 'js/components/tour/tour.html',
        controller: function($scope, $http) {
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
                        if ($scope.data[i].Type === 'Romantique') {
                            var dataRomantique = $scope.data[i]

                            var marker = new google.maps.Marker({
                                map: $scope.map,
                                position: new google.maps.LatLng(dataRomantique.Latitude, dataRomantique.Longitude),

                                icon: imagePath,
                                title: dataRomantique.Nom
                            })
                            marker.content = '<div class="infoWindowContent">' + dataRomantique.Description + '</div>';

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
})(angular.module('app.tour'))
