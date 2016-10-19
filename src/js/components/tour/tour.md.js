((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.tour', {
            url: '/tour',
            template: '<tour />'
        })
    }])
})(angular.module('app.tour', []))
