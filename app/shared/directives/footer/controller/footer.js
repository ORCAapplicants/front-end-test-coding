(function() {
  'use strict';
  /*jshint -W117*/
  /*jshint -W097*/
  angular.module(appName).directive('myappFooter', fnFooterDirective)
  .controller('FooterController', FooterController);

  FooterController.$inject = ['$scope','$rootScope'];

  // Config of routes inside this
  // The logic of this module

  function fnFooterDirective(){
    return{
      restrict:'E',
      templateUrl: 'shared/directives/footer/views/footer.html',
      controller: 'FooterController',
      replace: true
    };
  }

  function FooterController ($scope, $rootScope) {
    $scope.userData = {
      name:'Super Footer'
    };
    $scope.templateUrl = 'shared/footer/views/footer.html';
    $scope.valorroot = $rootScope.myData;

    $scope.changeLanguage = function(){
      $rootScope.idiom.prefered = $rootScope.idiom.prefered ==='es'?'en':'es';
    };
  }
})();
