(function () {

    var primrServices = angular.module("myServices", []);

    primrServices.factory('groupsDataService', ['$http', function ($http) {
        return {
            retrieveGroups: function () {
                loadGroupsPromise = $http.get('data/groups.json').then(function (response) {
                    return response.data;
                });
                return loadGroupsPromise;
            },
            findGroup: function (groupId) {
                findGroupPromise = this.retrieveGroups().then(function (groups) {
                    var found;
                    angular.forEach(groups, function (group) {
                        if (group.id == groupId) found = group;
                    });
                    return found;
                });
                return findGroupPromise;
            }
        };
    }]);

})();
