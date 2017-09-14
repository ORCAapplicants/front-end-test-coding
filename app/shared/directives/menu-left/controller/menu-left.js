(function() {
  'use strict';
  /*jshint -W117*/
  /*jshint -W097*/
  angular.module(appName).directive('myappMenuleft', fnMenuLeftDirective)
  .controller('MenuLeftController', MenuLeftController);

  MenuLeftController.$inject = ['$scope'];

  // Config of routes inside this
  // The logic of this module

  function fnMenuLeftDirective(){
    return{
      restrict:'E',
      templateUrl: 'shared/directives/menu-left/views/menu-left.html',
      controller: 'MenuLeftController',
      replace: true
    };
  }

  function MenuLeftController ($scope) {
    $scope.userData = {
      name:'Super Header'
    };
    $scope.templateUrl = 'shared/menu-left/views/menu-left.html';
  }
})();
