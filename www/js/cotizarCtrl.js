module.controller('cotizarCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

        $("html, body").animate({scrollTop: 0}, 600);
        baseController($scope, $localStorage);
        $scope.myFunction(false);

        $scope.url = "";
      

        $scope.errores = {};
        $scope.obj = {};
        $scope.formSend = false;

        $scope.guardarCotizacion = function (){
            $('#dlgLoading').modal();
        }
        
    }]);
