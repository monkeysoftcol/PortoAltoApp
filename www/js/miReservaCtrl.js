module.controller('miReservaCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    //window.open = cordova.InAppBrowser.open;
    baseController($scope, $localStorage);
    $scope.myFunction(false);

    $("html, body").animate({ scrollTop: 0 }, 600);
    $scope.url = "http://www.movil.portoalto.com.co/webservice.php?opc=5";
    $scope.reserva;
    
    $scope.cedula =  $localStorage.cedula!=null?$localStorage.cedula:sessionStorage.cedula;
    $scope.estado = "";
    $scope.string=$scope.cedula;

    $scope.consultarReserva = function(){
        $http.get($scope.url + "&cedula=" + $scope.cedula, {}
        ).success(function (data) {
            $('#dlgLoading').modal('hide');
            $scope.reserva = data;
            document.getElementById("datosult_reserva").innerHTML = $scope.reserva;
            $scope.estado = document.getElementById("estadoR").value;
            $scope.reserva = document.getElementById("reservaId").value;

            console.log("Datos = " + $scope.estado + " >>> " + $scope.reserva);


        }).error(function (data, status, headers, config) {
            $('#dlgLoading').modal('hide');
            $('#msgEsperaM').html("Los servicios web no están disponibes");
            $('#dlgEsperaM').modal();
        });
    }

    
    $scope.loadinfo = function () {
        $('#dlgLoading').modal();
        $scope.consultarReserva();
    }
    $scope.loadinfo();

    

    $scope.cancelar = function () {

        $scope.url2 = "http://www.movil.portoalto.com.co/webservice.php?opc=18";
        $scope.reserva = document.getElementById("reservaId").value;
        console.log("Datos = " + $scope.estado + " >>> " + $scope.reserva);
        if ($scope.reserva) {
            console.log("Cancelando reserva..");
            $scope.obj = {};
            $scope.obj.idReserva = $scope.reserva;

            $http.get($scope.url2 + "&reserva=" + $scope.reserva, {}
            ).success(function (data) {
                $scope.consultarReserva();
                $('#msgEsperaM').html(data);
                $('#dlgEsperaM').modal();
            }).error(function (data, status, headers, config) {
                $('#dlgEsperaM').modal('hide');
                $('#msgEsperaM').html("Los servicios web no están disponibes");
                $('#dlgEsperaM').modal();
            });

            /*console.log("Cancelando reserva.."+JSON.stringify($scope.obj));
            $http.post('http://www.portoalto.com.co/api/v1/cancelarReserva', $scope.obj)
                .success(function (data) {
                    $('#msgEsperaM').html(data.message);
                    $('#dlgEspera').modal();
                })
                .error(function (data) {
                    $('#dlgEsperaM').modal('hide');
                    $('#msgEsperaM').html("Los servicios web no están disponibes");
                    $('#dlgEsperaM').modal();
                });*/
        }
    }
}]);