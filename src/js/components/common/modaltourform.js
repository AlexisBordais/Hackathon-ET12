((app) => {
    'use strict'
    app.component("modaltourform", {
        bindings: {
            hide: '='
        },
        templateUrl: 'js/components/common/modaltourform.html',
        controller: function($scope) {
    

        }
    })

})(angular.module('app.common'))
