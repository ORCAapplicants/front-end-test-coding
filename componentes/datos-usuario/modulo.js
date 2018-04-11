angular
  .module('datosUsuario', ['ui.router'])
  .component('datosUsuario', {
    templateUrl: './componentes/datos-usuario/vista.html',
    controller: ($scope, $stateParams, $state) => {
      vm = $scope;

      vm.usuario = $stateParams.usuario;
      !vm.usuario && $state.go('busqueda-usuarios');
    },
  })
  .name;
