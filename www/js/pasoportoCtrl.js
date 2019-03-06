module.controller('miPasoportoCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
        baseController($scope, $localStorage);
        $scope.myFunction(false);

        $("html, body").animate({scrollTop: 0}, 600);
        $scope.url = "http://www.movil.portoalto.com.co/api/v1/infoUser";
        $scope.object = {};
        $scope.object.cedula = $localStorage.cedula!=null?$localStorage.cedula:sessionStorage.cedula;
        $scope.string = String($localStorage.cedula!=null?$localStorage.cedula:sessionStorage.cedula);

        $scope.loadInfo = function () {
            $scope.string = String("CC" + sessionStorage.cedula + "|" + sessionStorage.nombres + "| Email=" + sessionStorage.email);
            $scope.object.nombres = $localStorage.nombres;
            if (sessionStorage.nombres) {
                $scope.object.nombres = sessionStorage.nombres;
            }
            /*$http.post($scope.url, $scope.object).success(function (data) {
             console.log(data);
             if (data.status == 'SUCCESS') {
             $scope.string = String("CC" + data.object.nodocumento + "|" + data.object.nombres + " " + data.object.apellidos + "| Email=" + data.object.email);
             $scope.object.nombres = data.object.nombres + " " + data.object.apellidos;
             } else {
             $('#msgEsperaM').html(data.message);
             $('#dlgEsperaM').modal();
             }
             $('#dlgEsperaM').modal('hide');
             }).error(function (data) {
             $('#dlgEsperaM').modal('hide');
             $('#msgEsperaM').html("Los servicios web no están disponibes");
             $('#dlgEsperaM').modal();
             });*/
        }

        if (sessionStorage.login == "true" && sessionStorage.portero == "false") {
            $scope.loadInfo();
        } else {
            $('#msgEsperaM').html("Para ver tu pasoporto debes ingresar al sistema");
            $('#dlgEsperaM').modal();
            window.location.href = './index.html#/vip';
        }
        if (!$localStorage.cedula) {
            console.log("No registro localstorage!!");
            $scope.object.cedula = $localStorage.cedula;
        }


    }]);


module.controller('pasoportoCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
        $("#wrapper").toggleClass("toggled");
        baseController($scope, $localStorage);
        console.log("Cargado pasoportoCtrl!!");
        baseController($scope, $localStorage);

    }]);


module.controller('solPasoCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
        $("#wrapper").toggleClass("toggled");
        baseController($scope, $localStorage);
        console.log("Cargado solPasoCtrl!!");
        baseController($scope, $localStorage);

    }]);




