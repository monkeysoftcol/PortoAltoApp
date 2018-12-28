
function baseController($scope, $localStorage) {

    $scope.listaMenu = [];
    if (localStorage.length == 0) {
        $localStorage.cedula = sessionStorage.cedula;
        $localStorage.tipo = sessionStorage.tipo;
    }

    
    $scope.listarMenu = function (user) {
        if (!user) {
            $scope.listaMenu = [
                { "url": "#/home", "texto": "Inicio", "img":"img/menui/lupa.png" },
                { "url": "#/about", "texto": "Acerca de porto alto", "img":"img/menui/acerca.png"  },
                { "url": "#/menu", "texto": "Nuestra Carta" , "img":"img/menui/carta.png" },
                { "url": "#/menud", "texto": "Nuestra Carta Futbolera" , "img":"img/menui/cartaf.png" },
                { "url": "#/eventos", "texto": "Eventos" , "img":"img/menui/eventos.png" },
                { "url": "#/promo", "texto": "Promociones" , "img":"img/menui/promocion.png" },
                { "url": "#/pasoporto", "texto": "Pasaporto" , "img":"img/menui/quees.png" }
                //{ "url": "#/mipasoporto", "texto": "Mi pasaporto" }
                //{ "url": "#/solpassoporto", "texto": "Quiero mi pasaporto" }
            ];
        } else {
            $scope.listaMenu = [
                { "url": "#/mireserva", "texto": "Mi Ultima Reserva" , "img":"img/menui/reserva.png"},
                { "url": "#/calificar", "texto": "Tu opinión es importante", "img":"img/menui/calificar.png" },
                { "url": "#/salir", "texto": "Salir", "img":"img/menui/salir.png" }
            ];
        }
        $localStorage.menu = $scope.listaMenu;
    }

    $scope.menu = function () {
        $("#wrapper").toggleClass("toggled");
    }

}
