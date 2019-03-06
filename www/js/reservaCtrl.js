module.controller('reservaCtrl', ['$scope', '$http', '$localStorage', '$location', function ($scope, $http, $localStorage, $location) {

        $("html, body").animate({scrollTop: 0}, 600);
        baseController($scope, $localStorage);
        $scope.myFunction(false);

        if (sessionStorage.login && sessionStorage.login=="false") {
            $('#msgEsperaM').html("Para realizar reservas debe ingresar al sistema.");
            $('#dlgEsperaM').modal();
            window.location.href = './index.html#/vip';
            return;
        }


        $scope.url = "http://www.movil.portoalto.com.co/webservice.php?opc=3";//decoración
        $scope.urlb = "http://www.movil.portoalto.com.co/webservice.php?opc=4";
        $scope.urlc = "http://www.movil.portoalto.com.co/webservice.php?opc=6";

        $scope.errores = {};
        $scope.obj = {};
        $scope.formSend = false;
        $scope.promociones = '';
        $scope.listaMesas;
        $scope.listDecoracion = [];

        $scope.listaDecoreaciones = [];
        $scope.decoracionSelected;
        $scope.acepta = false;

        $scope.infoUser = {};

        $scope.test = function () {
            $http.get("http://www.movil.portoalto.com.co/webservice.php?opc=16", {}
            ).success(function (data) {
                $scope.listaDecoreaciones = data;
            }).error(function (data, status, headers, config) {
                $('#dlgEsperaM').modal('hide');
                $('#msgEsperaM').html("Los servicios web no están disponibes");
                $('#dlgEsperaM').modal();
            });
        }
        //$scope.test();


        $scope.loadpromociones = function () {
            $('#msgEsperaM').html("Consultado...");
            $('#dlgEsperaM').modal();
            $http.get($scope.url, {}
            ).success(function (data) {
                $scope.promociones = data;
                document.getElementById("div_promos").innerHTML = $scope.promociones;
                $('#dlgEsperaM').modal('hide');

                //$('#msgEsperaM').html("Para garantizar su reserva, el consumo mínimo debe ser no inferior a 30.000 pesos por persona.");
                //$('#dlgEsperaM').modal();
            }).error(function (data, status, headers, config) {
                $('#dlgEsperaM').modal('hide');
                $('#msgEsperaM').html("Los servicios web no están disponibes");
                $('#dlgEsperaM').modal();
            });
        }


        if (($localStorage.login == true || sessionStorage.login == true) && (!$localStorage.portero && !sessionStorage.portero)) {
            $('#msgEsperaM').html("Para realizar una reserva debes ingresar al sistema");
            $('#dlgEsperaM').modal();
            window.location.href = './index.html#/vip';
        } else {
            $scope.loadpromociones();
        }

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

            if (!$scope.acepta) {
                $scope.errores.terminos = 'Campo obligatorio';
                error = true;
            } else {
                $scope.errores.terminos = '';
            }

            /*if (document.getElementById("mesas_reserva")) {
             //$scope.obj.mesa = document.getElementById("mesas_reserva").value;
             if (!$scope.obj.mesa) {
             $scope.errores.mesa = 'Campo obligatorio';
             error = true;
             } else {
             $scope.errores.mesa = '';
             }
             } else {
             $scope.errores.mesa = 'Para consultar las mesas disponibles debe seleccionar la fecha y hora de reserva';
             error = true;
             }*/
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
                    $scope.errores = {};
                    $scope.obj = {};
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
            $scope.errores = {};
            $scope.obj = {};
            window.location.href = './portoalto.html#/home';
        };


        $scope.sentMail = function () {
            $scope.datosMail = {};
            $scope.datosMail.nombre = $scope.datosFormulario.nombre;
            $scope.datosMail.email = $scope.datosFormulario.email;
            $scope.datosMail.mensaje = "Se registró de forma exitosa la cotización, a continuación un resumen de su pedido : \n\
                                        Nombre de la empresa : " + $scope.datosFormulario.nombre + "\n\
                                        Ciudad : " + $scope.datosFormulario.ciudad + "\n\
                                        Localidad : " + $scope.datosFormulario.localidad + "\n\
                                        Fecha del evento : " + $scope.datosFormulario.fecha + "\n\
                                        Hora de ingreso : " + $scope.datosFormulario.horaIngreso.descripcion + "\n\
                                        Hora de salida : " + $scope.datosFormulario.horaSalida.descripcion + "\n\
                                        Número de personas : " + $scope.datosFormulario.numeroPersonas + "\n\
                                        Detalle del evento : " + $scope.datosFormulario.detalle + "\n\
                                        Total : " + $scope.datosFormulario.total;
            $http.post('http://portoalto.com.co/servicios/v1/sentMail', $scope.datosMail)
                    .success(function (data, status, header, config) {
                        if (data.status === 'SUCCESS') {
                            $scope.datosFormulario = {};
                            $scope.datos = {};
                            $('#dlgConfContizacion').modal('hide');
                            $('#dlgSucces').modal({backdrop: 'static', keyboard: false});
                        } else {
                            $('#dlgError').modal({backdrop: 'static', keyboard: false});
                            $scope.message = data.message;
                        }
                    }).error(function (data, status, header, config) {
                alert('Error al consultar la información');
            });
        };


    }]);

