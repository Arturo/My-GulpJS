'use strict';

describe("Unit: Testing Routes", function() {
    var state;

    beforeEach(angular.mock.module('App'));
    beforeEach(angular.mock.inject(function($state) {
        state = $state;
    }));


    it('should have a home path', function(){
        state.go('home');
        expect(state.current.name).to.equal('');
    });
});