module.controller('menuCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

      baseController($scope, $localStorage);
      $scope.myFunction(false);


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

      $scope.atras = function () {
            $("html, body").animate({ scrollTop: 0 }, 600);
            $scope.showList = true;
      }

      //carousel
      $scope.imagenActual = 1;

      $scope.setTab = function(imagen) {
            $scope.imagenActual = imagen;
      }
      ;
      $scope.isSet = function(imagen) {
            return $scope.imagenActual === imagen;
      }
      ;

      $scope.slideDerecha = function(){
            console.log(">>>>"+$scope.imagenActual);
            var ultima =3;
            var primera = 1;
            if($scope.imagenActual<ultima){
                  $scope.setTab($scope.imagenActual+1);
            } else {
                  $scope.setTab(primera);
            }
      }

      $scope.slideIzquierda = function(){
            console.log(">>>>"+$scope.imagenActual);
            var primera = 1;
            var ultima =3;
            if($scope.imagenActual>primera){
                  $scope.setTab($scope.imagenActual-1);
            } else {
                  $scope.setTab(ultima);
            }
      }

}]);
