(function () {

    var primrControllers = angular.module('myControllers', ['myServices']);

    primrControllers.controller("GroupListController", ['groupsDataService', function (groupsDataService) {

        this.groups = [];

        groupsDataService.retrieveGroups().then(function (groups) {
            console.log(groups);
            this.groups = groups;
        }.bind(this));
    }]);

    primrControllers.controller("GroupDetailsController", ['$routeParams', '$scope', 'groupsDataService', function ($routeParams, $scope, groupsDataService) {
        $scope.group = {};

        groupsDataService.findGroup($routeParams.groupId).then(function (group) {
            $scope.group = group;
        }.bind(this));
    }]);

    primrControllers.controller("TabPanelController", function () {
        this.tab = 1;

        this.selectTab = function (tabNumber) {
            if (tabNumber >= 1 && tabNumber <= 2)
                this.tab = tabNumber;
        }.bind(this);

        this.isTabSelected = function (tabNumber) {
            return tabNumber == this.tab;
        }.bind(this);
    });

})();