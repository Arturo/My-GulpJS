'use strict';

angular.module('App', [
    'ui.router',
    'ngAnimate',
    'ngResource'
])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/welcome");
    $stateProvider
        .state('welcome', {
            url: '/',
            templateUrl: 'templates/welcome.html',
            controller: 'MainCtrl'
        })
}]);
