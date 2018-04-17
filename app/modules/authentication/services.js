'use strict';
var datos = [];
var server = " https://api.github.com/";

angular.module('Authentication')

.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (typeof(current) !== 'undefined'){
            $templateCache.remove(current.templateUrl);
        }
    });

    $rootScope.ide = "";  
    $rootScope.result = [];
    $rootScope.resulta = [];    
    $rootScope.show = false;
    $rootScope.usrgit = "";
})

.factory('AuthenticationService',
    ['Base64', '$http', '$cookieStore', '$rootScope', '$timeout', '$location',
    function (Base64, $http, $cookieStore, $rootScope, $timeout, $location) {
        var service = {};
        var baseando = '';        

        service.Login = function (usuario, callback) {            
            $http.get(server + "search/users?q="+usuario)
                .success(function (response, data, status, headers, config) {
                  $rootScope.usrgit = usuario;                  
                  $location.path('/');
                  console.log(response);
                  callback(response, data);
                    
                })
                .error(function (response, data, status, headers, config) {
                    sweetAlert("El usuario que ingresaste no es correcto:", "valida tu info", "error");
                    callback(response, data);
                });
        };//Fin del login

        service.Logout = function () {
          $location.path('/login');          
          $rootScope.ide = "";
          $rootScope.post = [];
          $rootScope.posts = [];
          $rootScope.result = [];
          $rootScope.resulta = [];
        };//Fin del logout

        service.Consulta = function (callback) {
          $http.get(server + "search/users?q=" + $rootScope.usrgit)
            .success(function (response, status, headers, config) {
              if (response.total_count > 0 ) {
                $rootScope.post = response.items;
                $rootScope.result = angular.fromJson($rootScope.post);                
              } else {
                console.log('Sin registros');
              }
            })
            .error(function (response, data, status, headers, config) {
              sweetAlert("Oopss...", "Error al cargar el modulo de Consulta - P2", "error");
            });
        };//Fin del consulta

        service.Busqueda = function (callback) {
          $http.get(server + "search/users?q=" + $rootScope.usrgit)
            .success(function (response, status, headers, config) {
              if (response.total_count > 0 ) {
                $rootScope.post = response.items;
                $rootScope.result = angular.fromJson($rootScope.post);

              } else {
                console.log('Sin registros');
              }
            })
            .error(function (response, data, status, headers, config) {
              sweetAlert("Oopss...", "Error al cargar el modulo de Consulta - P2", "error");
            });          
        };//Fin del consulta

        service.Detalle = function (btnId, callback) {
          $rootScope.poste = btnId;//set para el detalle/delete          
          $http.get(server + "users/" + btnId)
                .success(function (response, status, headers, config) {
                $rootScope.posta = response;
                $rootScope.result = angular.fromJson($rootScope.post);
              })
              .error(function (response, data, status, headers, config) {
                sweetAlert("Oopss...", "Error al cargar el modulo de Detalle - P2", "error");
              });
        };//Fin del detalle

        service.SetCredentials = function (telefono, password) {
            var authdata = Base64.encode(telefono + ':' + password);

            $rootScope.globals = {
                currentUser: {
                    telefono: telefono,
                    authdata: authdata
                }
            };

            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            $cookieStore.put('globals', $rootScope.globals);
        };//Fin del SetCredentials

        service.ClearCredentials = function () {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
        };//FinClearCredentials

        return service;
    }])


//No borrar
.factory('Base64', function () {
  /* jshint ignore:start */

  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  return {
      encode: function (input) {
          var output = "";
          var chr1, chr2, chr3 = "";
          var enc1, enc2, enc3, enc4 = "";
          var i = 0;

          do {
              chr1 = input.charCodeAt(i++);
              chr2 = input.charCodeAt(i++);
              chr3 = input.charCodeAt(i++);

              enc1 = chr1 >> 2;
              enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
              enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
              enc4 = chr3 & 63;

              if (isNaN(chr2)) {
                  enc3 = enc4 = 64;
              } else if (isNaN(chr3)) {
                  enc4 = 64;
              }

              output = output +
                  keyStr.charAt(enc1) +
                  keyStr.charAt(enc2) +
                  keyStr.charAt(enc3) +
                  keyStr.charAt(enc4);
              chr1 = chr2 = chr3 = "";
              enc1 = enc2 = enc3 = enc4 = "";
          } while (i < input.length);

          return output;
      },

      decode: function (input) {
          var output = "";
          var chr1, chr2, chr3 = "";
          var enc1, enc2, enc3, enc4 = "";
          var i = 0;

          // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
          var base64test = /[^A-Za-z0-9\+\/\=]/g;
          if (base64test.exec(input)) {
              window.alert("There were invalid base64 characters in the input text.\n" +
                  "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                  "Expect errors in decoding.");
          }
          input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

          do {
              enc1 = keyStr.indexOf(input.charAt(i++));
              enc2 = keyStr.indexOf(input.charAt(i++));
              enc3 = keyStr.indexOf(input.charAt(i++));
              enc4 = keyStr.indexOf(input.charAt(i++));

              chr1 = (enc1 << 2) | (enc2 >> 4);
              chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
              chr3 = ((enc3 & 3) << 6) | enc4;

              output = output + String.fromCharCode(chr1);

              if (enc3 != 64) {
                  output = output + String.fromCharCode(chr2);
              }
              if (enc4 != 64) {
                  output = output + String.fromCharCode(chr3);
              }

              chr1 = chr2 = chr3 = "";
              enc1 = enc2 = enc3 = enc4 = "";

          } while (i < input.length);

          return output;
      }
  };

  /* jshint ignore:end */
});
