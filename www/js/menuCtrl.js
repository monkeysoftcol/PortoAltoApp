module.controller('menuCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

      baseController($scope, $localStorage);
      $scope.myFunction(false);
      $("html, body").animate({ scrollTop: 0 }, 600);
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
                  //alert(fingerCount +">>>"+duration);
            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold: 0
      });

      $('#mybook').booklet();

      $("#gear").mlens(
            {
                  imgSrc: $("#gear").attr("data-big"),	  // path of the hi-res version of the image
                  imgSrc2x: $("#gear").attr("data-big2x"),  // path of the hi-res @2x version of the image
                  //for retina displays (optional)
                  lensShape: "circle",                // shape of the lens (circle/square)
                  lensSize: ["20%", "30%"],            // lens dimensions (in px or in % with respect to image dimensions)
                  // can be different for X and Y dimension
                  borderSize: 2,                  // size of the lens border (in px)
                  borderColor: "#fff",            // color of the lens border (#hex)
                  borderRadius: 0,                // border radius (optional, only if the shape is square)
                  imgOverlay: $("#gear").attr("data-overlay"), // path of the overlay image (optional)
                  overlayAdapt: false,    // true if the overlay image has to adapt to the lens size (boolean)
                  zoomLevel: 1,          // zoom level multiplicator (number)
                  responsive: true       // true if mlens has to be responsive (boolean)
            });

      console.log("menu cargado!!!!");
      $scope.url = '';
      $scope.showList = true;
      $scope.showMenu = function (numero) {
            $scope.showList = false;
            switch (numero) {
                  case 1:
                        $scope.url = 'img/menu/1.jpg';
                        break;
                  case 2:
                        $scope.url = 'img/menu/2.jpg';
                        break;
                  case 3:
                        $scope.url = 'img/menu/3.jpg';
                        break;
                  case 4:
                        $scope.url = 'img/menu/4.jpg';
                        break;
                  case 5:
                        $scope.url = 'img/menu/5.jpg';
                        break;
                  case 6:
                        $scope.url = 'img/menu/6.jpg';
                        break;
                  case 7:
                        $scope.url = 'img/menu/7.jpg';
                        break;
                  case 8:
                        $scope.url = 'img/menu/8.jpg';
                        break;
                  case 9:
                        $scope.url = 'img/menu/9.jpg';
                        break;
                  case 10:
                        $scope.url = 'img/menu/10.jpg';
                        break;
                  case 11:
                        $scope.url = 'img/menu/11.jpg';
                        break;
            }

      }

      //sevicios nuevos
      $scope.listMenu = [];
      $scope.viewDetail = false;
      $scope.base = "http://www.portoalto.com.co/servicios/v1/";
      $scope.titulo = "Nuestra Carta";
      $scope.totalRegistros = 12;

      $scope.loadMenuCategoria = function (categoria, texto) {
            $http.get($scope.base + "menu/count/" + categoria, {}
            ).success(function (data) {
                  console.log(JSON.stringify(data));
                  $('#dlgLoading').modal('hide');
                  if (data.status === 'SUCCESS') {
                        $scope.totalRegistros = data.object;
                        $scope.loadMenuCategoriaDetalle(categoria, texto);
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
            $scope.showList = true;
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
