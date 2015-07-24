describe("main", function () {

    beforeEach(module("main"));

    describe("MainController", function () {

        var controller;

        beforeEach(inject(function ($controller) {
            controller = $controller('MainController');
        }));

        it("should have a list of group phone numbers", function () {
            expect(controller.groups.length).toEqual(3);
        });

    });

});
