'use strict';

describe("Unit: Testing Modules", function(){
    describe("App Module:", function() {
        var module;

        before(function(){
            module = angular.module.mock('App');
        });

        it("should be registered", function() {
            // expect(module).not.toBe(null); jasmine
            expect(module).not.to.equal(null);
        });
    });
});