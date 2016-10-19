((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.list', {
            url: '/list',
            template: '<list />'
        })
    }])
})(angular.module('app.list', []))
