module.controller('homeCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {


    baseController($scope, $localStorage);
    $scope.myFunction(false);

    $scope.url = "http://www.movil.portoalto.com.co/webservice.php?opc=12&buscador=";
    $scope.urlactualiza ="http://www.movil.portoalto.com.co/webservice.php?opc=21";
    $scope.promociones = [];
    $("html, body").animate({ scrollTop: 0 }, 600);
    $scope.filtro = '';

    $scope.loadinfo = function (verloading) {
        if (verloading) {
            $('#dlgLoading').modal();
        }
        $http.get($scope.url + $scope.filtro, {}
        ).success(function (data) {
            $('#dlgLoading').modal('hide');
            if (data.codigo == 'OK') {
                $scope.promociones = data.object;
            }
        }).error(function (data, status, headers, config) {
            $('#dlgLoading').modal('hide');
            $('#msgEsperaM').html("Los servicios web no están disponibes");
            $('#dlgEsperaM').modal();
        });


        $http.get($scope.urlactualiza, {}
            ).success(function (data) {
               //console.log("Actualizadno...."+data) ;
            }).error(function (data) {
            });
    }
    $scope.loadinfo(false);

}]);

module.controller('salirCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

    console.log("---bye--");
    baseController($scope, $localStorage);
    $scope.myFunction(false);
    $("html, body").animate({ scrollTop: 0 }, 600);

    $localStorage.login = false;
    $localStorage.portero = false;
    $localStorage.cedula = null;
    $localStorage.tipo = null;


    sessionStorage.login = false;
    sessionStorage.portero = false;
    sessionStorage.cedula = null;
    sessionStorage.tipo = null;

    window.location.href = './index.html#/home';

}]);