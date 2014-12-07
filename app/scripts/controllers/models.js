angular.module('App')
    .controller('ModelsCtrl', ['$scope', 'myModel', function ($scope, myModel) {
        myModel.index().success(function(data){
            $scope.models = data.models;
        });
    }]);