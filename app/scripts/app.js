'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Home', []);
angular.module('Consulta', []);
angular.module('Detalle', []);
angular.module('Estadistica', []);

angular.module('Wod', [
    'Authentication',
    'Home',
    'Consulta',
    'Detalle',    
    'ngRoute',
    'ngCookies'
])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'modules/authentication/views/login.html',
            hideMenus: true
        })

        .when('/', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/home.html'
        })

        .when('/consulta', {
            controller: 'ConsultaController',
            templateUrl: 'modules/consulta/views/consulta.html'
        })

        .when('/detalle', {
            controller: 'DetalleController',
            templateUrl: 'modules/detalle/views/detalle.html'
        })

        .otherwise({ redirectTo: '/' });
}])

.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);