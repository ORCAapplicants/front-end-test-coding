(function (){
  'use strict';

  angular.module(appName).config(fnConfig);

  fnConfig.$inject = ["$stateProvider"];

  function fnConfig ($stateProvider) {

    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'components/home/home.html',
      controller: 'HomeController'
    });

  }
})();
