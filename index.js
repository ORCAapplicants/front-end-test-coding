var app = angular.module('app', ['busquedaUsuarios', 'datosUsuario',
  'ui.router']);

app.controller('main', ($scope) => {
  vm = $scope;
});

app.config(function($stateProvider, $urlRouterProvider) {
  let datosUsuario = {
    name: 'datos-usuario',
    url: '/datos-usuario',
    component: 'datosUsuario',
    params: {
      usuario: null,
    },
  };

  let busquedaUsuario = {
    name: 'busqueda-usuarios',
    url: '/busqueda-usuarios',
    component: 'busquedaUsuarios',
  };

  $urlRouterProvider.otherwise('/busqueda-usuarios');

  $stateProvider.state(datosUsuario);
  $stateProvider.state(busquedaUsuario);
  
});
