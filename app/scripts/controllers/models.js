angular.module('App')
    .controller('ModelsCtrl', ['$scope', 'myModel', function ($scope, myModel) {
        $scope.gridOptions = {
            enableSorting: true,
            columnDefs: [
                { field: 'commercial_code', minWidth: 100, width: '30%'  },
                { field: 'brand.name', displayName: 'Brand', minWidth: 100, width: '30%' },
                { field: 'category.fullname', displayName: 'Category', minWidth: 100, width: '30%' }
            ]
        };


        myModel.index().success(function(data){
            $scope.gridOptions.data = data.models;
            $scope.models = data.models;
            $scope.collection = {
                models: data.models
            };
        });

    }]);