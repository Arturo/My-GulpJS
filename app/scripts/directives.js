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
    .directive('myReactModelsList', [function () {
        return {
            restrict: 'C',
            replace: true,
            scope: {
                data: '='
            },
            link: function (scope, iElement, iAttrs) {
                scope.$watchCollection('data', function(newValue, oldValue){
                    React.render( ModelsList({data:newValue}), iElement[0] );
                });
            }
        };
    }]);