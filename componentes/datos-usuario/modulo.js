angular
  .module('datosUsuario', ['ui.router'])
  .component('datosUsuario', {
    templateUrl: './componentes/datos-usuario/vista.html',
    controller: ($scope, $stateParams) => {
      vm = $scope;

      vm.usuario = $stateParams.usuario;
    },
  })
  .name;
