module.controller('eventoCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

        $("html, body").animate({scrollTop: 0}, 600);
        baseController($scope, $localStorage);
        $scope.myFunction(false);

        $scope.url = "http://www.movil.portoalto.com.co/webservice.php?opc=13";
        $scope.eventos;
        $scope.listaEventos = [];

        $scope.loadinfo = function () {
            $('#msgEsperaM').html("Consultado...");
            $('#dlgEsperaM').modal();
            $http.get($scope.url, {}
            ).success(function (data) {
                if (data.codigo == 'OK') {
                    $scope.listaEventos = data.object;
                } else {
                    $('#msgEsperaM').html("Los servicios web no están disponibes");
                    $('#dlgEsperaM').modal();
                }
                $('#dlgEsperaM').modal('hide');
            }).error(function (data, status, headers, config) {
                $('#dlgEsperaM').modal('hide');
                $('#msgEsperaM').html("Los servicios web no están disponibes");
                $('#dlgEsperaM').modal();
            });
        }
        $scope.loadinfo();

    }]);
