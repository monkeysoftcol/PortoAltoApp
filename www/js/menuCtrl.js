module.controller('menuCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
      $("#wrapper").toggleClass("toggled");
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

      //pruebas carousel
      $scope.w = window.innerWidth;
      $scope.h = window.innerHeight;
      $scope.uri = "http://lorempixel.com";
      $scope.folders = ['abstract', 'animals', 'business', 'cats', 'city', 'food', 'night', 'life', 'fashion', 'people', 'nature', 'sports', 'technics', 'transport'];
      $scope.images = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      $scope.currentFolder = $scope.folders[0];
      $scope.selectFolder = function (folder) {
            $scope.currentFolder = folder;
      };
      $scope.activeFolder = function (folder) {
            return (folder === $scope.currentFolder);
      };
}]);
