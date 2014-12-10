angular.module('App')
    .directive('myTableModelsList', [function () {
        return {
            restrict: 'C',
            replace: true,
            templateUrl: './templates/my_table_models_list.html',
            scope: {
                myCollection: '='
            },
            link: function (scope, iElement, iAttrs) {

            }
        };
    }])
    .directive('myReactModelsList', ['reactDirective', function (reactDirective) {
        return reactDirective('MyReactModelsList');
    }]);