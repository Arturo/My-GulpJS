(function(window, angular, undefined) {
    'use strict';

    angular.module('myModels', [])
        .config(['myModelServiceProvider', function (myModelServiceProvider) {
            myModelServiceProvider.setUrl('http://localhost:9990/api/');
        }])
        .provider('myModelService', [function () {
            this.url = '';

            this.setUrl = function(newUrl){
                this.url = newUrl;
            };

            this.$get = [function() {
                var self = this;
                return {
                    getUrl: function(){
                        return self.url;
                    }
                };
            }];
        }])
        .factory('myModel', ['$http', 'myModelService', function ($http, myModelService) {

            this.index = function(params){
                var url = myModelService.getUrl();
                return $http.get(url + "queries/models", { params: { limit: 10 }});
            };

            return {
                index: this.index
            };
        }]);

})(window, window.angular);