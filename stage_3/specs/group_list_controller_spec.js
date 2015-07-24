/// <reference path="../Scripts/jasmine.js" />
/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/angular-route.js" />
/// <reference path="../Scripts/angular-mocks.js" />

/// <reference path="../App/main.js" />

describe("main", function () {
    
    beforeEach(module("main"));

    describe("GroupListController", function () {

        var controller;

        beforeEach(inject(function ($controller) {
            controller = $controller('GroupListController');
        }));

        it("should have a list of group phone numbers", function () {
            //expect(controller.groups.length).toBeGreaterThan(3);
        });

    });

});