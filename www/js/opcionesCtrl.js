module.controller('opcionesCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

    console.log("Cargado opciones!!");
    baseController($scope,$localStorage);
    $scope.loadMenusOpt = function(){
        $scope.listarMenu(false);
        $("#wrapper").toggleClass("toggled");
        $('#btnmenuoculto').scope().cargarOpciones();
    }
    $scope.menu = function() {
        $("#wrapper").toggleClass("toggled");
    }
}]);

module.controller('userOpsCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

    console.log("Cargado userOpsCtrl!!");
    baseController($scope,$localStorage);
    $scope.listarMenu(true);
    
    $scope.loadMenusOpt = function(){
        $scope.listarMenu(true);
        $("#wrapper").toggleClass("toggled");
        $('#btnmenuoculto').scope().cargarOpciones();
    }

    $scope.menu = function() {
        $("#wrapper").toggleClass("toggled");
    }
}]);

module.controller('genOpsCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

    $scope.listaMenuF;
    baseController($scope,$localStorage);
    $scope.cargarOpciones = function(){
        $scope.listaMenuF = $localStorage.menu;
    }
    $scope.menu = function() {
        $("#wrapper").toggleClass("toggled");
    }
}]);
