
function baseController($scope, $localStorage) {

    $scope.listaMenu = [];
    if (localStorage.length == 0) {
        $localStorage.cedula = sessionStorage.cedula;
        $localStorage.tipo = sessionStorage.tipo;
    }


    $scope.listarMenu = function (user) {
        if (!user) {
            $scope.listaMenu = [
                { "url": "#/pasoporto", "texto": "Pasaporto", "img": "img/menui/quees.png" },
                { "url": "#/about", "texto": "Acerca de porto alto", "img": "img/menui/acerca.png" },
                { "url": "#/home", "texto": "Buscar", "img": "img/menui/lupa.png" },
                { "url": "#/menu", "texto": "Nuestra Carta", "img": "img/menui/carta.png" },
                //{ "url": "#/menud", "texto": "Nuestra Carta Futbolera", "img": "img/menui/cartaf.png" },
                { "url": "#/eventos", "texto": "Eventos", "img": "img/menui/eventos.png" },
                { "url": "#/promo", "texto": "Promociones", "img": "img/menui/promocion.png" }

                //{ "url": "#/mipasoporto", "texto": "Mi pasaporto" }
                //{ "url": "#/solpassoporto", "texto": "Quiero mi pasaporto" }
            ];
        } else {
            $scope.listaMenu = [
                { "url": "#/mireserva", "texto": "Mi Ultima Reserva", "img": "img/menui/reserva.png" },
                { "url": "#/calificar", "texto": "Calificar servicio", "img": "img/menui/calificar.png" },
                { "url": "#/dev", "texto": "Desarrolladores", "img": "img/dev.png" },
                { "url": "#/salir", "texto": "Salir", "img": "img/menui/salir.png" }
            ];
        }
        $localStorage.menu = $scope.listaMenu;
    }


    $scope.myFunction = function (isMenu) {
        var element = document.getElementById("wrapper");
        if (element.classList) {
            if (isMenu) {
                element.classList.toggle("toggled");
            } else {
                var classes = element.className.split(" ");
                var i = classes.indexOf("toggled");
                if (i >= 0) {
                    classes.splice(i, 1);
                }
                else {
                    if (isMenu) {
                        classes.push("toggled");
                    }
                }
                element.className = classes.join(" ");
            }
        } else {
            var classes = element.className.split(" ");
            var i = classes.indexOf("toggled");
            if (i >= 0) {
                classes.splice(i, 1);
            }
            else {
                if (isMenu) {
                    classes.push("toggled");
                }
            }
            element.className = classes.join(" ");
        }
    }
}
