'use strict';

describe("Unit: Testing Routes", function() {
    var state, rootScope;

    beforeEach(angular.mock.module('App'));
    beforeEach(angular.mock.inject(function($state, _$rootScope_) {
        state = $state;
        rootScope = _$rootScope_;
    }));


    it('should have a home path', function(){
        inject(function($templateCache){
            $templateCache.put('./templates/home.html', '');
        });
        state.go('home');
        rootScope.$digest();
        expect(state.current.name).to.equal('home');
    });

    it('should have a models path', function(){
        inject(function($templateCache){
            $templateCache.put('./templates/models.html', '');
        });
        state.go('models');
        rootScope.$digest();
        expect(state.current.name).to.equal('models');
    });

});