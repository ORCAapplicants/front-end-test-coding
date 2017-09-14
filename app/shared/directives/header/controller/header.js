(function() {
  'use strict';
  /*jshint -W117*/
  /*jshint -W097*/
  angular.module(appName).directive('myappHeader', fnHeaderDirective)
  .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['$scope'];

  // Config of routes inside this
  // The logic of this module

  function fnHeaderDirective(){
    return{
      restrict:'E',
      templateUrl: 'shared/directives/header/views/header.html',
      controller: 'HeaderController',
      replace: true
    };
  }

  function HeaderController ($scope) {
    $scope.userData = {
      name:'Super Header'
    };
    $scope.templateUrl = 'shared/header/views/header.html';
  }
})();
