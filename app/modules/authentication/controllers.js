'use strict';

angular.module('Authentication')

.run(function ($rootScope) {
    $rootScope.token = "";
})

.controller('LoginController', ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        //AuthenticationService.ClearCredentials();
        $scope.token = "";

        $scope.login = function () {
            $scope.dataLoading = false;
            AuthenticationService.Login($scope.usuario, function(response, data) {
                if(data == 400) {
                    sweetAlert("El usuario que ingresaste no es correcto:", "valida tu info", "error");
                } else if (data == 200) {                                        
                    AuthenticationService.SetCredentials($scope.usuario);                    
                    sweetAlert("Total de resultados:", response.total_count, "success");
                }
            });
        };

        $scope.logout = function () {
            AuthenticationService.Logout($scope.telefono, $scope.password, function(response) {
                console.log("controlador logut",response);
            });
        };

        $scope.consulta = function () {
            AuthenticationService.Consulta($scope.btnId, function(response) {
                AuthenticationService.SetCredentials($scope.btnId);
            });
        };

        $scope.nuevo = function () {
          AuthenticationService.Nuevo($scope.nombre, $scope.paterno, $scope.materno, $scope.genero, $scope.fechaNacimiento, $scope.cveElector, $scope.telefono, $scope.colonia, $scope.calle, $scope.numero, $scope.delegacion, $scope.password, $scope.perfil, $scope.seccion, $scope.imagePreview, function(response) {
                AuthenticationService.SetCredentials($scope.nombre, $scope.paterno, $scope.materno, $scope.genero, $scope.fechaNacimiento, $scope.cveElector, $scope.telefono, $scope.colonia, $scope.calle, $scope.numero, $scope.delegacion, $scope.password, $scope.perfil, $scope.seccion, $scope.imagePreview);
                console.log("response controller", response);
          });
        };

        $scope.delete = function () {
            AuthenticationService.Delete($scope.btnId, function(response) {
                AuthenticationService.SetCredentials($scope.btnId);
                console.log("controlador delete",response);
            });
        };

        $scope.detalle = function () {
            AuthenticationService.Detalle($scope.btnId, function(response) {
                AuthenticationService.SetCredentials($scope.btnId);
                console.log("controlador detalle",response);
            });
        };

    }]);