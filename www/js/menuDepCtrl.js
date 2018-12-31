module.controller('menuDepCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

      baseController($scope, $localStorage);
      $scope.myFunction(false);

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

      $scope.atras = function () {
            $("html, body").animate({ scrollTop: 0 }, 600);
            $scope.showList = true;
      }
}]);
