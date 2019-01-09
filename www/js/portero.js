module.controller('porteroReservaCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    $("html, body").animate({ scrollTop: 0 }, 600);
    baseController($scope, $localStorage);

    $scope.obj = {};
    $scope.errores = {};
    $scope.urlc = "http://www.portoalto.com.co";
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

module.controller('porteroQrCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    $("html, body").animate({ scrollTop: 0 }, 600);
    baseController($scope, $localStorage);

    $scope.obj = {};
    $scope.errores = {};
    $scope.urlc = "http://www.movil.portoalto.com.co";
    $scope.cedula;
    $scope.estado;
    $scope.idreserva;

    $scope.cargarInfo = function () {
        $scope.cedula =  $localStorage.cliente;
        if(!$scope.cedula){
            $scope.cedula =sessionStorage.cliente;
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
    $("html, body").animate({ scrollTop: 0 }, 600);
    baseController($scope, $localStorage);
    console.log(">>> porterohomeCtrl");

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
        console.log(">>>>>>>>>>>> cepeda qr");
        try {
            $cordovaBarcodeScanner
                .scan()
                .then(function (result) {
                    if(!result.cancelled){
                        $localStorage.cliente = result.text;
                        sessionStorage.cliente = result.text;
                        window.location.href = './portero.html#/qr';
                    }
                }, function (err) {
                    $('#msgEsperaM').html("No se puedo leer el código QR");
                    $('#dlgEsperaM').modal();
                });
        }
        catch (err) {
            $('#msgEsperaM').html("No se puedo leer el código QR");
            $('#dlgEsperaM').modal();
        }
    };


}]);