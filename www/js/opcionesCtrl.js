module.controller('opcionesCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

    console.log("Cargado opciones!!");
    baseController($scope, $localStorage);
    $scope.loadMenusOpt = function () {
        $scope.listarMenu(false);

        $scope.myFunction(true);

        $('#btnmenuoculto').scope().cargarOpciones();
    }
    
    


}]);

module.controller('userOpsCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

    console.log("Cargado userOpsCtrl!!");
    baseController($scope, $localStorage);

    $scope.myFunction(true);
    $scope.listarMenu(true);

    $scope.loadMenusOpt = function () {
        $scope.listarMenu(true);
        $("#wrapper").toggleClass("toggled");
        $('#btnmenuoculto').scope().cargarOpciones();
    }


    $scope.cerrarSesion = function () {

    }
}]);

module.controller('genOpsCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

    $scope.listaMenuF;
    baseController($scope, $localStorage);
    $scope.cargarOpciones = function () {
        $scope.listaMenuF = $localStorage.menu;
    }
}]);


module.controller('salirCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    $localStorage.cedula = null;
    $localStorage.tipo = null;
    window.location.href = './index.html#/home';
}]);