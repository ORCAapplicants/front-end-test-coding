(function () {
  'use strict';

  angular.module(appName).controller('UserController', UserController);

  UserController.$inject = ['$scope','$http','$state', '$stateParams', 'Commons'];

  function UserController ($scope,$http,$state,$stateParams,Commons) {
    console.log($stateParams.userLogin);
    $scope.userData = false;
    $scope.currentUser = { login:$stateParams.userLogin };
    $http({
      url: 'https://api.github.com/users/'+$scope.currentUser.login,
      method: 'GET'
    }).then(function successCallback(response) {
      console.log(response);
      $scope.userData=response.data;
    }, function errorCallback(response) {
      console.log(response);
    });


  }

})();
