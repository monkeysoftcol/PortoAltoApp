
function baseController($scope, $localStorage) {

    $scope.listaMenu = [];
    if (localStorage.length == 0) {
        $localStorage.cedula = sessionStorage.cedula;
        $localStorage.tipo = sessionStorage.tipo;
    }

    
    $scope.listarMenu = function (user) {
        if (!user) {
            $scope.listaMenu = [
                { "url": "#/home", "texto": "Inicio" },
                { "url": "#/about", "texto": "Acerca de porto alto" },
                { "url": "#/menu", "texto": "Nuestra Carta" },
                { "url": "#/menud", "texto": "Nuestra Carta Futbolera" },
                { "url": "#/eventos", "texto": "Eventos" },
                { "url": "#/promo", "texto": "Promociones" },
                { "url": "#/pasoporto", "texto": "Pasaporto" }
                //{ "url": "#/mipasoporto", "texto": "Mi pasaporto" }
                //{ "url": "#/solpassoporto", "texto": "Quiero mi pasaporto" }
            ];
        } else {
            $scope.listaMenu = [
                { "url": "#/mireserva", "texto": "Mi Ultima Reserva" },
                { "url": "#/calificar", "texto": "Calificar Servicio" },
                { "url": "#/salir", "texto": "Salir" }
            ];
        }
        $localStorage.menu = $scope.listaMenu;
    }

    $scope.menu = function () {
        $("#wrapper").toggleClass("toggled");
    }

}
