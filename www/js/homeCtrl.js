module.controller('homeCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {


        baseController($scope, $localStorage);
        $scope.myFunction(false);

        $scope.url = "http://www.movil.portoalto.com.co/webservice.php?opc=12&buscador=";
        $scope.promociones = [];
        $("html, body").animate({scrollTop: 0}, 600);
        $scope.filtro = '';

        $scope.loadinfo = function () {
            console.log($scope.filtro);
            $('#msgEsperaM').html("Consultado..." + $scope.filtro);
            $('#dlgEsperaM').modal();
            $http.get($scope.url + $scope.filtro, {}
            ).success(function (data) {
                $('#dlgEsperaM').modal('hide');
                if (data.codigo == 'OK') {
                    $scope.promociones = data.object;
                } else {
                    $('#msgEsperaM').html(data.mensaje);
                    $('#dlgEsperaM').modal();
                }
            }).error(function (data, status, headers, config) {
                $('#dlgEsperaM').modal('hide');
                $('#msgEsperaM').html("Los servicios web no están disponibes");
                $('#dlgEsperaM').modal();
            });
        }
        //$scope.loadinfo();

    }]);
