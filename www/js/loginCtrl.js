module.controller('loginCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

    console.log("Bienvenido a login");
    
    $scope.obj = {};
    $scope.errores = {};
    $scope.urlc = "http://www.portoalto.com.co";
    $scope.isLogin = true;

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

        $http.get($scope.urlc + "/webservice.php?opc=1&cedula=" + $scope.obj.cedula + "&primerpaellido=" + $scope.obj.apellido + "&callback=?", {}
        ).success(function (data) {
            if (data == 'Existe') {
                $('#msgEsperaM').html("Bienvenido!!!!");
                cedula = $scope.obj.cedula;
                $localStorage.cedula = $scope.obj.cedula;
                $localStorage.tipo = "cliente";
                window.location.href = './portoalto.html#/home';
            } else {
                $('#msgEsperaM').html(data);
            }
            $('#dlgEsperaM').modal();
        }).error(function (data, status, headers, config) {

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
        $("html, body").animate({ scrollTop: 0 }, 600);
    }


    $scope.registrar = function(){
        var error = false;
        $scope.urlc = "http://www.portoalto.com.co";

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
        if(error){
            return;
        }

        $http.get($scope.urlc + "/webservice.php?opc=2"+
            + "&correo=" + $scope.obj.email 
            + "&nombres=" + $scope.obj.nombres 
            + "&apellidos=" + $scope.obj.apellidos 
            + "&nodocumento=" + $scope.obj.ndoc 
            + "&telefonoreg=" + $scope.obj.celular 
            + "&genero=" + $scope.obj.genero, {}
        ).success(function (data) {
            if (data == 'Adelante') {
                $('#msgEsperaM').html("Bienvenido!!!!");
                $localStorage.cedula = $scope.obj.ndoc;
                $localStorage.tipo = "cliente";
                setTimeout(function(){
                    console.log("Dumiendo...");
                  }, 2000);
                window.location.href = './portoalto.html#/home';
                $window.localStorage.setItem("cedula",$scope.obj.ndoc); 
                $window.localStorage.setItem("tipo","cliente"); 
            } else {
                $('#msgEsperaM').html(data);
            }
            $('#dlgEsperaM').modal();
        }).error(function (data, status, headers, config) {

            $('#msgEsperaM').html("Los servicios web no están disponibes");
            $('#dlgEsperaM').modal();
        });
    }

}]);