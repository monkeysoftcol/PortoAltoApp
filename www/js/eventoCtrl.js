module.controller('eventoCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

        $("html, body").animate({scrollTop: 0}, 600);
        baseController($scope, $localStorage);
        $scope.myFunction(false);

        $scope.url = "http://www.movil.portoalto.com.co/webservice.php?opc=13";
        $scope.eventos;
        $scope.listaEventos = [];

        $scope.loadinfo = function () {
            //$('#msgEsperaM').html("Consultado...");
            $('#dlgLoading').modal();
            $http.get($scope.url, {}
            ).success(function (data) {
                $('#dlgLoading').modal('hide');
                if (data.codigo == 'OK') {
                    $scope.listaEventos = data.object;
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
