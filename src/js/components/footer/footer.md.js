((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.footer', {
            url: '/footer',
            template: '<footer />'
        })
    }])
})(angular.module('app.footer', []))
