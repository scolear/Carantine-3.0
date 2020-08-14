(function() {
    angular.module('app').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', { template: '<dashboard></dashboard>'})
        .when('/dashboard', { template: '<dashboard></dashboard>'})
        .when('/settings', { template: '<settings-page></settings-page>'})
        .when('/about', { template: '<about></about>'})

        $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });

    }]);
})();
