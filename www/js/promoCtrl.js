module.controller('promoCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

        baseController($scope, $localStorage);
        $scope.myFunction(false);

        $("html, body").animate({scrollTop: 0}, 600);

        $scope.url = "http://www.movil.portoalto.com.co/webservice.php?opc=14";
        $scope.promociones = [];


        $scope.loadinfo = function () {
            $('#dlgLoading').modal();
            $http.get($scope.url, {}
            ).success(function (data) {
                $('#dlgLoading').modal('hide');
                if (data.codigo == 'OK') {
                    $scope.promociones = data.object;
                } else {
                    $('#msgEsperaM').html(data.mensaje);
                    $('#dlgEsperaM').modal();
                }
            }).error(function (data, status, headers, config) {
                $('#dlgLoading').modal('hide');
                $('#msgEsperaM').html("Los servicios web no están disponibes");
                $('#dlgEsperaM').modal();
            });
        }
        $scope.loadinfo();

    }]);
