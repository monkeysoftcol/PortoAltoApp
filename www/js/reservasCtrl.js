module.controller('reservasCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
       
        baseController($scope, $localStorage);
        $scope.myFunction(false);

        $("html, body").animate({scrollTop: 0}, 600);
        $scope.url = "http://www.movil.portoalto.com.co/webservice.php?opc=100";
        $scope.reservas = [];

        $scope.estado = "";


        $scope.consultarReserva = function () {
            $http.get($scope.url + "&cedula=" + $localStorage.cedula, {}
            ).success(function (data) {
                $('#dlgLoading').modal('hide');
                if (data.codigo == 'OK') {
                    $scope.reservas = data.object;
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