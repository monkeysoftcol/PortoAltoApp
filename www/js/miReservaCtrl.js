module.controller('miReservaCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    //window.open = cordova.InAppBrowser.open;
    $("#wrapper").toggleClass("toggled");

    $("html, body").animate({ scrollTop: 0 }, 600);
    $scope.url = "http://www.portoalto.com.co/webservice.php?opc=5";
    $scope.reserva;
    $("html, body").animate({ scrollTop: 0 }, 600);
    $scope.estado = "";
    $scope.reserva;

    $scope.consultarReserva = function(){
        $http.get($scope.url + "&cedula=" + $localStorage.cedula, {}
        ).success(function (data) {
            $scope.reserva = data;
            document.getElementById("datosult_reserva").innerHTML = $scope.reserva;
            $('#dlgEsperaM').modal('hide');
            $scope.estado = document.getElementById("estadoR").value;
            $scope.reserva = document.getElementById("reservaId").value;

            console.log("Datos = " + $scope.estado + " >>> " + $scope.reserva);


        }).error(function (data, status, headers, config) {
            $('#dlgEsperaM').modal('hide');
            $('#msgEsperaM').html("Los servicios web no están disponibes");
            $('#dlgEsperaM').modal();
        });
    }

    
    $scope.loadinfo = function () {
        $('#msgEsperaM').html("Consultado...");
        $('#dlgEsperaM').modal();
        $scope.consultarReserva();
    }
    $scope.loadinfo();

    

    $scope.cancelar = function () {

        $scope.url2 = "http://www.portoalto.com.co/webservice.php?opc=18";
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