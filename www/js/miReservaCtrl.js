module.controller('miReservaCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

    $scope.url = "http://www.portoalto.com.co/webservice.php?opc=5";
    $scope.reserva;
    $("html, body").animate({ scrollTop: 0 }, 600);

    $scope.loadinfo = function () {
        $('#msgEsperaM').html("Consultado...");
        $('#dlgEsperaM').modal();
        $http.get($scope.url+"&cedula="+$localStorage.cedula, {}
        ).success(function (data) {
            $scope.reserva = data;
            document.getElementById("datosult_reserva").innerHTML = $scope.reserva;
            $('#dlgEsperaM').modal('hide');
        }).error(function (data, status, headers, config) {
            $('#dlgEsperaM').modal('hide');
            $('#msgEsperaM').html("Los servicios web no están disponibes");
            $('#dlgEsperaM').modal();
        });
    }
    $scope.loadinfo();
}]);