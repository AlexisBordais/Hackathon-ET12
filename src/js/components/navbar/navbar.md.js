((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.navbar', {
            url: '/navbar',
            template: '<navbar />'
        })
    }])
})(angular.module('app.navbar', []))
