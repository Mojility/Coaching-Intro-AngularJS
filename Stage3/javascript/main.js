(function () {

    var app = angular.module("main", ['ngRoute']);

    app.controller("GroupListController", ['$http', function ($http) {

        this.groups = [];

        $http.get('data/groups.json').success(function (data) {
            angular.forEach(data, function (group) {
                this.groups.push(group);
            }.bind(this));
        }.bind(this));
    }]);

    app.controller("GroupDetailsController", function ($routeParams) {
        this.groupId = $routeParams.groupId
    });

    app.filter('phoneFormatter', function () {
        return function (input) {
            return input.replace(/\+\d(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        };
    });

    app.config(['$routeProvider',
      function ($routeProvider) {
          $routeProvider.
            when('/groups', {
                templateUrl: 'views/group-list.html',
                controller: 'GroupListController',
                controllerAs: 'groupListCtrl'
            }).
            when('/groups/:groupId', {
                templateUrl: 'views/group-details.html',
                controller: 'GroupDetailsController',
                controllerAs: 'groupDetailsCtrl'
            }).
            otherwise({
                redirectTo: '/groups'
            });
      }]);
})();
