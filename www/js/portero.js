module.controller('porteroReservaCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
        $("html, body").animate({scrollTop: 0}, 600);
        baseController($scope, $localStorage);

        $scope.obj = {};
        $scope.errores = {};
        $scope.urlc = "http://www.movil.portoalto.com.co";
        $scope.showDetail = false;
        $scope.estado;
        $scope.idreserva;

        $scope.buscar = function () {
            var error = false;

            if (!$scope.obj.cedula) {
                $scope.errores.cedula = "* Campo obligatorio";
                error = true;
            } else {
                $scope.errores.cedula = "";
            }

            if (error) {
                return;
            }

            //http://www.portoalto.com.co/webservice.php?opc=8&ruta=http://www.portoalto.com.co&cedula=1111
            $http.get($scope.urlc + "/webservice.php?opc=8&ruta=http://www.portoalto.com.co&cedula=" + $scope.obj.cedula, {}
            ).success(function (data) {
                document.getElementById("result_escaneo").innerHTML = data;
                $scope.showDetail = true;

                $scope.estado = document.getElementById("txtestadoReserva").value;
                $scope.idreserva = document.getElementById("txtidReserva").value;

            }).error(function (data, status, headers, config) {

                $('#msgEsperaM').html("Los servicios web no están disponibes");
                $('#dlgEsperaM').modal();
            });



        }
        $scope.cancelar = function () {
            $scope.obj = {};
            $scope.errores = {};
            window.location.href = './index.html#/validarr';
        }

        $scope.confirmar = function () {
            var error = false;

            if (!$scope.obj.cedula) {
                $scope.errores.cedula = "* Campo obligatorio";
                error = true;
            } else {
                $scope.errores.cedula = "";
            }

            if (error) {
                return;
            }

            //http://www.portoalto.com.co/webservice.php?opc=8&ruta=http://www.portoalto.com.co&cedula=1111
            $http.get($scope.urlc + "/webservice.php?opc=9&ruta=http://www.portoalto.com.co&reservaId=" + $scope.idreserva, {}
            ).success(function (data) {
                if (data == "Guardardo") {
                    $('#msgEsperaM').html("Cliente Confirmado Correctamente");
                    $scope.cancelar();
                } else {
                    $('#msgEsperaM').html("El Cliente no tiene reservas abiertas");
                }
                $('#dlgEsperaM').modal();
            }).error(function (data, status, headers, config) {

                $('#msgEsperaM').html("Los servicios web no están disponibes");
                $('#dlgEsperaM').modal();
            });

        }

    }]);

module.controller('porteroQrCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
        $("html, body").animate({scrollTop: 0}, 600);
        baseController($scope, $localStorage);

        $scope.obj = {};
        $scope.errores = {};
        $scope.urlc = "http://www.movil.portoalto.com.co";
        $scope.cedula;
        $scope.estado;
        $scope.idreserva;

        $scope.cargarInfo = function () {
            $scope.cedula = $localStorage.cliente;
            if (!$scope.cedula) {
                $scope.cedula = sessionStorage.cliente;
            }

            $http.get($scope.urlc + "/webservice.php?opc=8&ruta=http://www.portoalto.com.co&cedula=" + $scope.cedula, {}
            ).success(function (data) {
                document.getElementById("result_escaneo").innerHTML = data;
                $scope.estado = document.getElementById("txtestadoReserva").value;
                $scope.idreserva = document.getElementById("txtidReserva").value;
            }).error(function (data) {
                $('#msgEsperaM').html("Los servicios web no están disponibes");
                $('#dlgEsperaM').modal();
            });
        }
        $scope.cargarInfo();

        $scope.escanearQR = function () {

            cordova.plugins.barcodeScanner.scan(function (result) {

                $scope.cedula = result.text;
                alert("Cedula " + result.text);
                $http.get($scope.urlc + "/webservice.php?opc=8&ruta=http://www.portoalto.com.co&cedula=" + $scope.cedula, {}
                ).success(function (data) {
                    document.getElementById("result_escaneo").innerHTML = data;
                    $scope.estado = document.getElementById("txtestadoReserva").value;
                    $scope.idreserva = document.getElementById("txtidReserva").value;
                    window.location.href = './portero.html#/qr';
                }).error(function (data, status, headers, config) {

                    $('#msgEsperaM').html("Los servicios web no están disponibes");
                    $('#dlgEsperaM').modal();
                });
            }, function (error) {
                $('#msgEsperaM').html("La camara no está disponible");
                $('#dlgEsperaM').modal();
            });
        }

        $scope.cancelar = function () {
            $scope.obj = {};
            $scope.errores = {};
            window.location.href = './portero.html#/home';
        }

        $scope.confirmar = function () {
            var error = false;

            if (!$scope.obj.cedula) {
                $scope.errores.cedula = "* Campo obligatorio";
                error = true;
            } else {
                $scope.errores.cedula = "";
            }

            if (error) {
                return;
            }

            //http://www.portoalto.com.co/webservice.php?opc=8&ruta=http://www.portoalto.com.co&cedula=1111
            $http.get($scope.urlc + "/webservice.php?opc=9&ruta=http://www.portoalto.com.co&reservaId=" + $scope.idreserva, {}
            ).success(function (data) {
                if (data == "Guardardo") {
                    $('#msgEsperaM').html("Cliente Confirmado Correctamente");
                    $scope.cancelar();
                } else {
                    $('#msgEsperaM').html("El Cliente no tiene reservas abiertas");
                }
                $('#dlgEsperaM').modal();
            }).error(function (data, status, headers, config) {

                $('#msgEsperaM').html("Los servicios web no están disponibes");
                $('#dlgEsperaM').modal();
            });

        }
    }]);

module.controller('porterohomeCtrl', ['$scope', '$http', '$localStorage', '$cordovaBarcodeScanner', function ($scope, $http, $localStorage, $cordovaBarcodeScanner) {
        $("html, body").animate({scrollTop: 0}, 600);
        baseController($scope, $localStorage);
        $scope.myFunction(false);
        
       console.log($localStorage.login);
       console.log(sessionStorage.login);
       console.log($localStorage.portero);
       console.log(sessionStorage.portero);
        
        if (sessionStorage.login=="false") {
            $('#msgEsperaM').html("Para acceder a las funcionalidades del portero, debes ingresar al sistema");
            $('#dlgEsperaM').modal();
            window.location.href = './index.html#/portero';
        }
        
        
        
        $scope.escanerQr = function () {
            //alert("Escanear codigo");
        };

        $scope.buscarUser = function () {
            //alert("buscar usuario");
        };

        $scope.cancelar = function () {
            $localStorage.cedula = null;
            $localStorage.tipo = null;
            sessionStorage.cedula = null;
            sessionStorage.tipo = null;
            window.location.href = './index.html#/home';
        }

        $scope.scanRQ = function () {
            //console.log(">>>>>>>>>>>> cepeda qr");
            try {
                $cordovaBarcodeScanner
                        .scan()
                        .then(function (result) {
                            if (!result.cancelled) {
                                $localStorage.cliente = result.text;
                                sessionStorage.cliente = result.text;
                                window.location.href = './index.html#/qr';
                            }
                        }, function (err) {
                            $('#msgEsperaM').html("No se puedo leer el código QR");
                            $('#dlgEsperaM').modal();
                        });
            } catch (err) {
                $('#msgEsperaM').html("No se puedo leer el código QR");
                $('#dlgEsperaM').modal();
            }
        };


    }]);



module.controller('porteroLoginCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
        $("html, body").animate({scrollTop: 0}, 600);
        baseController($scope, $localStorage);
        $scope.myFunction(false);

        $scope.obj = {};
        $scope.errores = {};
        $scope.urlc = "http://www.movil.portoalto.com.co";
        $scope.isLogin = true;
        //poner en falsse
        $scope.isPorto = false;
        $scope.user = {};


        $scope.loginAdmin = function () {
            console.log("-------adm-----");
            var error = false;
            //$scope.urlc = "http://www.portoalto.com.co";

            if (!$scope.obj.usuario) {
                $scope.errores.usuario = "* Campo obligatorio";
                error = true;
            } else {
                $scope.errores.usuario = "";
            }
            if (!$scope.obj.password) {
                $scope.errores.password = "* Campo obligatorio";
                error = true;
            } else {
                $scope.errores.password = "";
            }

            if (error) {
                return;
            }

            $http.get($scope.urlc + "/webservice.php?opc=7&usuario=" + $scope.obj.usuario + "&pass=" + $scope.obj.password, {}).success(function (data) {
                if (data == '0') {
                    $('#msgEsperaM').html("Bienvenido!!");
                    
                    window.location.href = './index.html#/validarr';
                    $localStorage.cedula = $scope.obj.usuario;
                    $localStorage.tipo = "portero";
                    $localStorage.portero = true;
                    
                    sessionStorage.cedula = $scope.obj.usuario;
                    sessionStorage.tipo = "portero";
                    sessionStorage.portero = true;
                    
                    $localStorage.login =true;
                    sessionStorage.login =true;

                } else {
                    $('#msgEsperaM').html("El usuario o la contraseña es incorrecta!!");
                }
                $('#dlgEsperaM').modal();
            }).error(function (data, status, headers, config) {

                $('#msgEsperaM').html("Los servicios web no están disponibes");
                $('#dlgEsperaM').modal();
            });
        }


        $scope.cancelAdmin=function(){
            $scope.obj={};
            $scope.errores = {};
        }

    }]);