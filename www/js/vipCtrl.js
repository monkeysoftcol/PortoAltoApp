module.controller('vipCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

        console.log("Bienvenido a login");

        baseController($scope, $localStorage);
        $scope.myFunction(false);

        $("html, body").animate({scrollTop: 0}, 600);

        $scope.obj = {};
        $scope.errores = {};
        $scope.urlc = "http://www.movil.portoalto.com.co";
        $scope.isLogin = true;
        //poner en falsse
        $scope.isPorto = false;
        $scope.user = {};


        $scope.infoUser = function () {
            if ($scope.obj.cedula) {
                $http.get($scope.urlc + "/webservice.php?opc=100&cedula=" + $scope.obj.cedula, {}).success(function (data) {
                    if (data.codigo == 'OK') {
                        $scope.user = data.object;

                    }
                }).error(function (data, status, headers, config) {
                    $('#msgEsperaM').html("Los servicios web no están disponibes");
                    $('#dlgEsperaM').modal();
                });
            }
        };

        $scope.login = function () {
            var error = false;

            if (!$scope.obj.cedula) {
                $scope.errores.cedula = "* Campo obligatorio";
                error = true;
            } else {
                $scope.errores.cedula = "";
            }
            if (!$scope.obj.apellido) {
                $scope.errores.apellido = "* Campo obligatorio";
                error = true;
            } else {
                $scope.errores.apellido = "";
            }
            if (error) {
                return;
            }
            $('#dlgLoading').modal();
            $http.get($scope.urlc + "/webservice.php?opc=1&cedula=" + $scope.obj.cedula + "&primerpaellido=" + $scope.obj.apellido + "&callback=?", {}
            ).success(function (data) {
                //console.log(JSON.stringify(data));
                if (data.codigo == 'OK') {
                    $scope.infoUser();
                    $localStorage.login = true;
                    $localStorage.cedula = $scope.obj.cedula;
                    $localStorage.nombres = data.object.nombres + " " + data.object.apellidos;
                    $localStorage.email = data.object.email;
                    $localStorage.telefono = data.object.telefono;
                    $localStorage.tipo = "cliente";
                    $localStorage.portero = false;

                    sessionStorage.login = true;
                    sessionStorage.cedula = $scope.obj.cedula;
                    sessionStorage.nombres = data.object.nombres + " " + data.object.apellidos;
                    sessionStorage.email = data.object.email;
                    sessionStorage.telefono = data.object.telefono;
                    sessionStorage.tipo = "cliente";
                    sessionStorage.portero = false;

                    data.object.login = true;
                    window.location.href = './index.html#/mipasoporto';
                } else {
                    $localStorage.login = false;
                    data.object.login = false;
                    
                }
                
            }).error(function (data, status, headers, config) {
                $('#dlgLoading').modal('hide');
                $('#msgEsperaM').html("Los servicios web no están disponibes");
                $('#dlgEsperaM').modal();
            });

        }

        $scope.crearCuenta = function () {
            $scope.obj = {};
            $scope.errores = {};
            $scope.isLogin = false;
        }

        $scope.cancelar = function () {
            $scope.obj = {};
            $scope.errores = {};
            $scope.isLogin = true;
            $("html, body").animate({scrollTop: 0}, 600);
        }

        $scope.registrar = function () {
            var error = false;
            //$scope.urlc = "http://www.portoalto.com.co";

            if (!$scope.obj.email) {
                $scope.errores.email = "* Ingrese un correo válido";
                error = true;
            } else {
                $scope.errores.email = "";
            }
            if (!$scope.obj.nombres) {
                $scope.errores.nombres = "* Campo obligatorio";
                error = true;
            } else {
                $scope.errores.nombres = "";
            }
            if (!$scope.obj.apellidos) {
                $scope.errores.apellidos = "* Campo obligatorio";
                error = true;
            } else {
                $scope.errores.apellidos = "";
            }
            if (!$scope.obj.ndoc) {
                $scope.errores.ndoc = "* Campo obligatorio";
                error = true;
            } else {
                $scope.errores.ndoc = "";
            }
            if (!$scope.obj.celular) {
                $scope.errores.celular = "* Campo obligatorio";
                error = true;
            } else {
                $scope.errores.celular = "";
            }
            if (!$scope.obj.genero) {
                $scope.errores.genero = "* Campo obligatorio";
                error = true;
            } else {
                $scope.errores.genero = "";
            }
            if (error) {
                return;
            }

            $http.get($scope.urlc + "/webservice.php?opc=2&correo=" + $scope.obj.email
                    + "&nombres=" + $scope.obj.nombres
                    + "&apellidos=" + $scope.obj.apellidos
                    + "&nodocumento=" + $scope.obj.ndoc
                    + "&telefonoreg=" + $scope.obj.celular
                    + "&genero=" + $scope.obj.genero, {}
            ).success(function (data) {
                //alert(data);
                if (data === 'Adelante') {
                    //console.log(">>>>>ok!!!");
                    $('#msgEsperaM').html("Bienvenido!!!!");

                    /*setTimeout(function () {
                        console.log("Dumiendo...");
                    }, 2000);*/

                    $localStorage.tipo = "cliente";
                    $localStorage.cedula = $scope.obj.ndoc;
                    $localStorage.nombres = $scope.obj.nombres + " " +$scope.obj.apellidos;
                    $localStorage.email = $scope.obj.email;
                    $localStorage.telefono = $scope.obj.celular;

                    sessionStorage.tipo = "cliente";
                    sessionStorage.cedula = $scope.obj.ndoc;
                    sessionStorage.nombres = $scope.obj.nombres + " " + $scope.obj.apellidos;
                    sessionStorage.email = $scope.obj.email;
                    sessionStorage.telefono = $scope.obj.celular;

                    $localStorage.login = true;
                    sessionStorage.login = true;

                    $localStorage.portero = false;
                    sessionStorage.portero = false;

                    window.location.href = './index.html#/mipasoporto';
                } else {
                    $('#msgEsperaM').html(data);
                }
                $('#dlgEsperaM').modal();
            }).error(function (data, status, headers, config) {

                $('#msgEsperaM').html("Los servicios web no están disponibes");
                $('#dlgEsperaM').modal();
            });
        }

        $scope.userPortoAlto = function () {
            $scope.isPorto = true;
        }

        $scope.cancelAdmin = function () {
            $scope.obj = {};
            $scope.errores = {};
            $scope.isPorto = false;
        }

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
                    setTimeout(function () {
                        console.log("Dumiendo...");
                    }, 4000);
                    window.location.href = './portero.html#/home';
                    $localStorage.cedula = $scope.obj.usuario;
                    $localStorage.tipo = "portero";
                    sessionStorage.cedula = $scope.obj.usuario;
                    sessionStorage.tipo = "portero";
                    
                    $localStorage.portero = true;
                    sessionStorage.portero = true;

                } else {
                    $('#msgEsperaM').html("El usuario o la contraseña es incorrecta!!");
                }
                $('#dlgEsperaM').modal();
            }).error(function (data, status, headers, config) {

                $('#msgEsperaM').html("Los servicios web no están disponibes");
                $('#dlgEsperaM').modal();
            });
        }

        $scope.scan = function () {
            try {
                cordova.plugins.barcodeScanner.scan(
                        function (result) {
                            //alert(result.text);
                            if (!result.cancelled) {
                                if (result.format == "QR_CODE") {
                                    navigator.notification.prompt("Please enter name of data", function (input) {
                                        var name = input.input1;
                                        var value = result.text;

                                        var data = localStorage.getItem("LocalData");
                                        console.log(data);
                                        data = JSON.parse(data);
                                        data[data.length] = [name, value];

                                        localStorage.setItem("LocalData", JSON.stringify(data));

                                        //alert("Done");
                                    });
                                }
                            }
                        },
                        function (error) {
                            alert("Scanning failed: " + error);
                        }
                );
            } catch (err) {
                alert("Error Escanenado..." + err);
            }

        }
        $scope.scanRQ = function () {
            try {
                $cordovaBarcodeScanner
                        .scan()
                        .then(function (result) {
                            //alert(JSON.stringify(result));
                        }, function (err) {
                            $scope.scanResult = 'SCAN ERROR (see console)';
                            console.error(err);
                            //alert(err);
                        });
            } catch (err) {
                alert("Error app " + err);
            }



        };

        $scope.sacarFoto = function () {

            try {
                var options = {
                    destinationType: Camera.DestinationType.FILE_URI,
                    sourceType: Camera.PictureSourceType.CAMERA,
                };

                $cordovaCamera.getPicture(options).then(function (imageURI) {
                    //alert("tengo la imagen");
                }, function (err) {
                    alert(err);
                });
            } catch (err) {
                alert("Error app " + err);
            }


        }
    }]);
