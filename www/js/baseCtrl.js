
function baseController($scope,$localStorage) {
    $scope.listaMenu = [];
    $localStorage.cedula = 123456789;

    $scope.listarMenu = function (user) {
        if (!user) {
            $scope.listaMenu = [
                { "url": "#/home", "texto": "Inicio" },
                { "url": "#/about", "texto": "Acerca de" },
                { "url": "#/menu", "texto": "Nuestra Carta" },
                { "url": "#/menud", "texto": "Nuestra Carta Futbolera" },
                { "url": "#/eventos", "texto": "Eventos" },
                { "url": "#/promo", "texto": "Promociones" },
                { "url": "#/pasoporto", "texto": "Pasaporto" },
                { "url": "#/mipasoporto", "texto": "Mi pasaporto" },
                { "url": "#/solpassoporto", "texto": "Quiero mi pasaporto" }
            ];
        } else {
            $scope.listaMenu = [
                { "url": "#/mireserva", "texto": "Mi Ultima Reserva" },
                { "url": "#/calificar", "texto": "Calificar Servicio" },
                { "url": "", "texto": "Cerrar Sesión" }
            ];
        }
        $localStorage.menu = $scope.listaMenu;
    }
}
