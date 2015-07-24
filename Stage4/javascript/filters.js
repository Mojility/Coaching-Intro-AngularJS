(function () {

    var primrFilters = angular.module("myFilters", []);

    primrFilters.filter('phoneFormatter', function () {
        return function (input) {
            if (input)
                return input.replace(/\+\d(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        };
    });

})();