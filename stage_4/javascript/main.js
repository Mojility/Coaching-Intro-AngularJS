(function () {

    var app = angular.module("main", ['ngRoute', 'myFilters', 'myControllers', 'myServices']);

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
