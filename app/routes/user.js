(function (){
  'use strict';

  angular.module(appName).config(fnConfig);

  fnConfig.$inject = ["$stateProvider"];

  function fnConfig ($stateProvider) {

    $stateProvider.state('user', {
      url: '/user/:userLogin',
      params:{userLogin:null},
      templateUrl: 'components/user/user.html',
      controller: 'UserController'
    });

  }
})();
