angular.module('App', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'ngResource',
    'ngCookies',
    'ui.grid',
    'ui.grid.resizeColumns',
    'ui.grid.selection',
    'pasvaz.bindonce',
    'react',
    'myModels'
]);

angular.module('App')
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
            })
            .state('models', {
                url: '/models',
                templateUrl: './templates/models.html',
                controller: 'ModelsCtrl'
            });
    }]);