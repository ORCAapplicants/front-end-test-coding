'use strict';
/*jshint -W117*/
/*jshint -W097*/
var appName = 'myApp';

// variables for the config of the app for dev, test and production
var configVariables = {};
configVariables.dev = {};

// Declare app level module which depends on views, and components
var app = angular.module(appName, [
  'ui.router',
  'restangular',
  'ui.mask',
  'angularModalService',
  'toaster',
  'ngAnimate',
  'blockUI'
  // Commons for the whole app
  // 'myApp.header',
  // 'myApp.footer'
]);

(function (){
  app.config(fnConfig);

  fnConfig.$inject = ['$locationProvider', '$urlRouterProvider'];

  function fnConfig($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/home");
  }

  app.run(fnRun);

  fnRun.$inject = ['$rootScope', 'Restangular'];

  function fnRun($rootScope, Restangular) {

    Restangular.setBaseUrl('https://apitest.pop.space/es/api/v1/');
    Restangular.setFullResponse(true);


  }

  app.controller('AppController', AppController);
  AppController.$inject = ['$scope','$rootScope'];

  function AppController($scope, $rootScope) {
    $scope.init = function(){
      $rootScope.showHeadFoot = Commons.fnShowHeadFoot;
    }
    init();
  }

})();
