angular
  .module('busquedaUsuarios',['ui.router', 'zingchart-angularjs'])
  .component('busquedaUsuarios', {
    templateUrl: './componentes/busqueda-usuarios/vista.html',
    controller: ($http, $q, $scope, $state) => {
      let vm = $scope;
      vm.carga = false;
      vm.error = false;
      vm.tabla = false;
      vm.alerta = false;
      vm.alerta2 = false;

      vm.obtenerUsuario = (usuario) => {
        if(usuario.score >= 30) {
          vm.alerta2 = false;
          $state.go('datos-usuario', {usuario});
        } else {
          vm.alerta2 = true;
          vm.mensajeDeValidacion = 'El usuario no se puede consultar, debido '+
          'que tiene un score menor a 30.00.';
        }
      };

      vm.validarNombre = () => {
        if(!vm.nombre || vm.nombre.length < 4) {
          vm.alerta = true;
          vm.tabla = false;
          vm.mensajeDeValidacion = 'El nombre debe contener al menos 4.'+
          ' caracteres';
        } else if(vm.nombre == 'gcpglobal') {
          vm.alerta = true;
          vm.tabla = false;
          vm.mensajeDeValidacion = 'No se puede usar el nombre "gcpglobal".';
        } else {
          vm.alerta = false;
          vm.enviarNombre();
        }
      };

      vm.enviarNombre = () => {
        let nombre = $scope.nombre;
        vm.carga = true;
        vm.error = false;
        vm.tabla = false;
        vm.grafica = false;

        vm.pedirDatos(nombre).then((usuarios) => {
          vm.usuarios = [];
          vm.loginUsr = [];

          usuarios.forEach((usuario, indice) => {
            (indice < 10) && (vm.usuarios[indice] = usuario) &&
            (vm.loginUsr[indice] = usuario.login);
          });

          if(vm.usuarios.length == 0) {
            vm.tabla = false;
            vm.alerta = true;
            vm.mensajeDeValidacion = 'No se encontró ningún usuario.';
          } else {
            vm.tabla = true;
            vm.alerta = false;
            vm.almacenarFollowers().then((followersTotales) => {
              vm.alerta2 = false;
              vm.followersTotales = followersTotales;
              vm.mostrarGrafica();
            }).catch(() => {
              vm.alerta2 = true;
              vm.grafica = false;
              vm.mensajeDeValidacion = 'Ocurrió un error al obtener'+
              ' los followers.(No se mostrará la gráfica.)';
            });
          }

          vm.carga = false;
          vm.error = false;
        }).catch((error) => {
          vm.carga = false;
          vm.error = true;
          vm.tabla = false;
          vm.alerta = false;
        });
      };

      vm.almacenarFollowers = () => {
        let defer = $q.defer();
        let numUsuarios = vm.usuarios.length;
        let numDeFollowersTotales = [];

        for (let i = 0; i < numUsuarios; i++) {
          vm.obtenerNumFollowers(vm.usuarios[i]).then((numFollowers) => {
            numDeFollowersTotales[i] = numFollowers;
            (i + 1 == numUsuarios) && defer.resolve(numDeFollowersTotales);
          }).catch(() => {
            defer.reject();
          });
        }

        return defer.promise;
      };

      vm.obtenerNumFollowers = (usuario) => {
        let defer = $q.defer();
        let numFollowers;

        $http.get(usuario.followers_url).then((datos) => {
          let followers = datos.data;
          numFollowers = followers.length;
          defer.resolve(numFollowers);
        }).catch(() => {
          defer.reject();
        });

        return defer.promise;
      };

      vm.pedirDatos = (nombre) => {
        let defer = $q.defer();
        $http.get('https://api.github.com/search/users?q=' + nombre)
          .then((datos) => {
            defer.resolve(datos.data.items);
          }).catch((error) => {
            defer.reject(error);
          });

        return defer.promise;
      };

      vm.mostrarGrafica = () => {
        vm.grafica = true;
        vm.graficaFollowers = {
          type: 'area',
          'crosshair-x': {
            'line-color': '#ff6600',
            'line-width': 1,
            'plot-label': {
              visible: false
            }
          },   
          plot: {
            animation: {
              delay: 50,
              effect: '13',
              speed: '3000',
            },
          },
          '3d-aspect':{
            depth: '100px', 
          },
          plotarea: {
            'adjust-layout': true,
          },
          'scale-x': {
            label:{
              text: 'Seguidores por usuario.',
            },
            labels: vm.loginUsr,
          },
          series: [{
            values: vm.followersTotales,
            backgroundColor: '#045FB4 #81BEF7',
            alphaArea: 0.8,
          }],
        };
      }
    },
  }).name;
