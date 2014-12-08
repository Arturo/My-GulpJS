angular.module('App')
    .controller('ModelsCtrl', ['$scope', 'myModel', 'uiGridConstants', function ($scope, myModel, uiGridConstants) {
        $scope.gridOptions = {
            enableSorting: true,
            showFooter: true,
            columnDefs: [
                // { field: 'id', aggregationType: uiGridConstants.aggregationTypes.count, minWidth: 150, width: '10%' },
                { field: 'commercial_code', minWidth: 100, width: '30%'  },
                { field: 'brand.name', displayName: 'Brand', minWidth: 100, width: '30%' },
                { field: 'category.fullname', displayName: 'Category', minWidth: 100, width: '30%' }
            ]
        };


        myModel.index().success(function(data){
            $scope.gridOptions.data = data.models;
            $scope.models = data.models;
        });

    }]);