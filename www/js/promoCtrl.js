module.controller('promoCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

        baseController($scope, $localStorage);
        $scope.myFunction(false);

        $("html, body").animate({scrollTop: 0}, 600);

        $scope.url = "http://www.movil.portoalto.com.co/webservice.php?opc=14";
        $scope.promociones = [];


        $scope.loadinfo = function () {
            $('#msgEsperaM').html("Consultado...");
            $('#dlgEsperaM').modal();
            $http.get($scope.url, {}
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
        $scope.loadinfo();

    }]);
