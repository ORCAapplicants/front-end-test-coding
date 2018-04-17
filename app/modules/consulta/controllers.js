'use strict';

 angular
 .module('Consulta')
 .controller('ConsultaController', function ($scope, $http, AuthenticationService) {

   AuthenticationService.Consulta();
   //AuthenticationService.Busqueda();   

 });//controller
