module.controller('menuDepCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

      baseController($scope, $localStorage);
      $scope.myFunction(false);

      $("#test").swipe({
            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                  //console.log(direction);
                  if (direction) {
                        if (direction == 'right') {
                              $("#btnPreview").click();
                        } else {
                              $("#btnNext").click();
                        }
                  }

            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold: 0
      });

      console.log("menu cargado!!!!");
      $scope.url = '';
      $scope.showList = true;
      $scope.showMenu = function (numero) {
            $scope.showList = false;
            switch (numero) {
                  case 1:
                        $scope.url = 'img/menud/1.jpg';
                        break;
                  case 2:
                        $scope.url = 'img/menud/2.jpg';
                        break;
                  case 3:
                        $scope.url = 'img/menud/3.jpg';
                        break;
                  case 4:
                        $scope.url = 'img/menud/4.jpg';
                        break;
                  case 5:
                        $scope.url = 'img/menud/5.jpg';
                        break;
                  case 6:
                        $scope.url = 'img/menud/6.jpg';
                        break;
                  case 7:
                        $scope.url = 'img/menud/7.jpg';
                        break;
                  case 8:
                        $scope.url = 'img/menud/8.jpg';
                        break;
                  case 9:
                        $scope.url = 'img/menu/9.jpg';
                        break;
            }

      }

      //sevicios nuevos
      $scope.listMenu = [];
      $scope.viewDetail = false;
      $scope.base = "http://www.portoalto.com.co/servicios/v1/";
      $scope.titulo;
      $scope.totalRegistros;


      $scope.loadMenuCategoria = function (categoria,texto) {
            $http.get($scope.base + "menu/count/" + categoria, {}
            ).success(function (data) {
                  console.log(JSON.stringify(data));
                  $('#dlgLoading').modal('hide');
                  if (data.status === 'SUCCESS') {
                        $scope.totalRegistros = data.object;
                        $scope.loadMenuCategoriaDetalle(categoria,texto);
                  } else {
                        $('#msgEsperaM').html(data.message);
                        $('#dlgEsperaM').modal();
                  }

            }).error(function (data, status, headers, config) {
                  $('#dlgEsperaM').modal('hide');
                  $('#msgEsperaM').html("Los servicios web no están disponibes");
                  $('#dlgEsperaM').modal();
            });
      }

      $scope.loadMenuCategoriaDetalle = function (categoria, texto) {
            $scope.titulo = texto;
            $('#dlgLoading').modal();

            $http.get($scope.base + "menu/" + categoria, {}
            ).success(function (data) {
                  console.log(JSON.stringify(data));
                  $('#dlgLoading').modal('hide');
                  if (data.status === 'SUCCESS') {
                        $scope.listMenu = data.object;
                        $scope.viewDetail = true;
                  } else {
                        $('#msgEsperaM').html(data.message);
                        $('#dlgEsperaM').modal();
                  }

            }).error(function (data, status, headers, config) {
                  $('#dlgEsperaM').modal('hide');
                  $('#msgEsperaM').html("Los servicios web no están disponibes");
                  $('#dlgEsperaM').modal();
            });
      }

      $scope.atras = function () {
            $("html, body").animate({ scrollTop: 0 }, 600);
            $scope.viewDetail = false;
      }

      //carousel
      $scope.imagenActual = 1;

      $scope.setTab = function (imagen) {
            $scope.imagenActual = imagen;
      }
            ;
      $scope.isSet = function (imagen) {
            return $scope.imagenActual === imagen;
      }
            ;

      $scope.slideDerecha = function () {
            //console.log(">>>> Der :" + $scope.imagenActual);
            var ultima = $scope.totalRegistros;
            var primera = 1;
            if ($scope.imagenActual < ultima) {
                  $scope.setTab($scope.imagenActual + 1);
                  $scope.isSet($scope.imagenActual + 1);
            } else {
                  $scope.setTab(primera);
                  $scope.isSet(primera);
            }
      }

      $scope.slideIzquierda = function () {
            //console.log(">>>>Izq :" + $scope.imagenActual);
            var primera = 1;
            var ultima = $scope.totalRegistros;
            if ($scope.imagenActual > primera) {
                  $scope.setTab($scope.imagenActual - 1);
                  $scope.isSet($scope.imagenActual - 1);
            } else {
                  $scope.setTab(ultima);
                  $scope.isSet(ultima);
            }
      }

}]);
