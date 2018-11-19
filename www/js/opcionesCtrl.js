module.controller('opcionesCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

    console.log("Cargado opciones!!");
    $scope.listaMenu=[];

    $scope.listarMenu = function(user){
        if(!user){
            $scope.listaMenu=[
                {"url":"#/home","texto":"Inicio"},
                {"url":"#/about","texto":"Acerca de"},
                {"url":"#/menu","texto":"Nuestra Carta"},
                {"url":"#/menud","texto":"Nuestra Carta Futbolera"},
                {"url":"#/eventos","texto":"Eventos"},
                {"url":"#/promo","texto":"Promociones"},
                {"url":"","texto":"Pasaporto"},
                {"url":"","texto":"Mi pasaporto"},
                {"url":"","texto":"Quiero mi pasaporto"}
            ];
        } else {
            $scope.listaMenu=[
                {"url":"#/home","texto":"Mi Ultima Reserva"},
                {"url":"","texto":"Calificar Servicio"},
                {"url":"","texto":"Cerrar Sesión"}
            ];
        }
    }
    $scope.listarMenu(false);
    
    $scope.tooglerMenu = function menu() {
        $("#wrapper").toggleClass("toggled");
    }
}]);
