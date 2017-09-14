(function () {
  'use strict';

  angular.module(appName).controller('HomeController', HomeController);

  HomeController.$inject = ['$scope','$http','Commons'];

  function HomeController ($scope,$http,Commons) {
    $scope.myInterestedResults=[];//default state

    /**
    * getUsers will call the api with the input name
    */
    $scope.getUsers = function(){
      // console.log('dentro de get users',$('#username').val());
      $scope.username = $('#username').val();
      if($scope.username === '' || $scope.username.length<4 || $scope.username=='gcpglobal'){
        var messageError = $scope.username.length<4?"La longitud mínima es de 4 caracteres para buscar un usuario":"No puedes buscar el usuario 'gcpglobal'";
        Commons.fnAlerts('error','Ocurrio un Error',messageError);
        console.log('no puedes pasar');
      } else {
        $http({
          url: 'https://api.github.com/search/users?q='+$scope.username,
          method: 'GET'
        }).then(function successCallback(response) {
          console.log(response);
          handlingResponseGithub(response);
        }, function errorCallback(response) {
          console.log(response);
        });
      }

    };

    /**
    * handlingResponseGithub will properly slice and format the results to be showned
    */
    function handlingResponseGithub(response){
      $scope.myInterestedResults=response.data.items.slice(0,10);
      console.log($scope.myInterestedResults);
    }


  }

})();
