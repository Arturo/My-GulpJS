'use strict';

describe("Unit: Testing Modules", function(){
    describe("App Module:", function() {
        var module;

        before(function(){
            module = angular.module('App');
        });

        it("should be registered", function() {
            expect(module).not.to.equal(null);
        });

        describe("Dependencies: ", function(){
            var deps,
                hasModule = function(m) {
                return deps.indexOf(m);
            };

            before(function(){
                deps = module.value('appName').requires;
            });

            it("should have myModels as a dependency", function() {
                expect(hasModule('myModels')).to.not.equal(-1);
            });
        });
    });
});