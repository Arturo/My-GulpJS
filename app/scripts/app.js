angular.module('App', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'ngResource'
])
.run(['$rootScope', function($rootScope){
    $rootScope.name = "Arturo";
}])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './templates/home.html',
            controller: 'MainCtrl'
        });
}]);
