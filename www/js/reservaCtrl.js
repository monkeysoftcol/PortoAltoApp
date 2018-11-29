module.controller('reservaCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    
    $("html, body").animate({ scrollTop: 0 }, 600);
    baseController($scope, $localStorage);

    console.log("reserva....");
    $scope.url = "http://www.portoalto.com.co/webservice.php?opc=3";//decoración
    $scope.urlb = "http://www.portoalto.com.co/webservice.php?opc=4";
    $scope.urlc = "http://www.portoalto.com.co/webservice.php?opc=6";

    $scope.errores = {};
    $scope.obj = {};
    $scope.formSend = false;
    $scope.promociones = '';
    $scope.listaMesas;
    $scope.listDecoracion = [];




    $scope.loadpromociones = function () {
        $('#msgEsperaM').html("Consultado...");
        $('#dlgEsperaM').modal();
        $http.get($scope.url, {}
        ).success(function (data) {
            $scope.promociones = data;
            document.getElementById("div_promos").innerHTML = $scope.promociones;
            //$('#dlgEsperaM').modal('hide');

            $('#msgEsperaM').html("Tenga en cuenta que el costo de la reserva por cada persona es de $30.000 pesos consumibles");
            $('#dlgEsperaM').modal();
        }).error(function (data, status, headers, config) {
            $('#dlgEsperaM').modal('hide');
            $('#msgEsperaM').html("Los servicios web no están disponibes");
            $('#dlgEsperaM').modal();
        });
    }
    $scope.loadpromociones();

    $scope.loadMesas = function () {
        if ($scope.obj.fecha && $scope.obj.hora) {
            $('#msgEsperaM').html("Consultado...");
            $('#dlgEsperaM').modal();
            $http.get($scope.urlb + "&fecha_reserva=" + $scope.obj.fecha + "&hora_reserva=" + $scope.obj.hora, {}
            ).success(function (data) {
                $scope.listaMesas = data;
                document.getElementById("div_mesas").innerHTML = $scope.listaMesas;
                $('#dlgEsperaM').modal('hide');
            }).error(function (data, status, headers, config) {
                $('#dlgEsperaM').modal('hide');
                $('#msgEsperaM').html("Los servicios web no están disponibes");
                $('#dlgEsperaM').modal();
            });
        } else {
            $scope.errores.fecha = "Campo obligatorio";
            $scope.errores.hora = "Campo obligatorio";
            $scope.formSend = true;
        }
    };

    $scope.saveReserva = function () {
        $scope.obj.cedula = $localStorage.cedula;
        var error = false;
        $scope.obj.decora = document.getElementById("decora").value;
        $scope.obj.horaReserva = document.getElementById("hora_reserva").value;
        $scope.obj.personas = document.getElementById("personas").value;

        if (!$scope.obj.decora) {
            $scope.errores.tdecoracion = 'Campo obligatorio';
            error = true;
        } else {
            $scope.errores.tdecoracion = '';
        }
        if (!$scope.obj.fecha) {
            $scope.errores.fecha = 'Campo obligatorio';
            error = true;
        } else {
            $scope.errores.fecha = '';
        }
        if (!$scope.obj.horaReserva) {
            $scope.errores.hora = 'Campo obligatorio';
            error = true;
        } else {
            $scope.errores.hora = '';
        }
        if (document.getElementById("mesas_reserva")) {
            $scope.obj.mesa = document.getElementById("mesas_reserva").value;
            if (!$scope.obj.mesa) {
                $scope.errores.mesa = 'Campo obligatorio';
                error = true;
            } else {
                $scope.errores.mesa = '';
            }
        } else {
            $scope.errores.mesa = 'Para consultar las mesas disponibles debe seleccionar la fecha y hora de reserva';
            error = true;
        }
        if (!$scope.obj.personas) {
            $scope.errores.nropersonas = 'Campo obligatorio';
            error = true;
        } else {
            $scope.errores.nropersonas = '';
        }

        if (!$scope.obj.motivo) {
            $scope.errores.motivo = 'Campo obligatorio';
            error = true;
        } else {
            $scope.errores.motivo = '';
        }

        if (error) {
            return;
        }

        $http.get($scope.urlc + "&cedula=" + $scope.obj.cedula + "&mesa=" + $scope.obj.mesa + "&fecha_reserva=" + $scope.obj.fecha + "&hora_reserva=" + $scope.obj.horaReserva + "&decora=" + $scope.obj.decora + "&personas=" + $scope.obj.personas + "&motivo=" + $scope.obj.motivo, {}
        ).success(function (data) {
            if (data == 'Guardada') {
                $('#msgEsperaM').html("Tu Reserva Ha Sido Apartada - Gracias Por Confiar En Nosotros");
            } else {
                $('#msgEsperaM').html(data);
            }
            $('#dlgEsperaM').modal();
        }).error(function (data, status, headers, config) {

            $('#msgEsperaM').html("Los servicios web no están disponibes");
            $('#dlgEsperaM').modal();
        });

    };

    $scope.cancelar = function () {
        window.location.href = './index.html#/home';
    };



}]);
