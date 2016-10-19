((app) => {
    'use strict'
    app.component('list', {
        templateUrl: 'js/components/list/list.html',
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
                    $scope.openInfoWindow = function(e, selectedMarker) {
                        e.preventDefault();
                        google.maps.event.trigger(selectedMarker, 'click');
                    }



                })
        }
    })
})(angular.module('app.list'))
