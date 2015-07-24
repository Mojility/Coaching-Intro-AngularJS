/// <reference path="../Scripts/jasmine.js" />
/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/angular-route.js" />
/// <reference path="../Scripts/angular-mocks.js" />

/// <reference path="../App/main.js" />

describe("main", function () {
    
    beforeEach(module("main"));

    describe("phoneFormatter", function () {

        var filter;

        beforeEach(inject(function ($filter) {
            filter = $filter('phoneFormatter');
        }));

        it("should present a properly formatted phone number", function () {
            var formattedPhone = filter('+19055551212', 'phoneFormatter');
            expect(formattedPhone).toEqual("(905) 555-1212");
        });

    });

});