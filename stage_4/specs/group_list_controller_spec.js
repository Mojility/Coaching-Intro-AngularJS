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
