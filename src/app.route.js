(function() {
    angular.module('app').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/home', { template: '<dashboard>'})
        .when('/dashboard', { template: '<dashboard>'})
        .when('/settings', { template: '<settings-page>'})
        .when('/about', { template: '<about>'})


        $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });

    }]);
})();