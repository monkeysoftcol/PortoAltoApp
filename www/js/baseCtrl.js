
function baseController($scope, $localStorage) {

    $scope.listaMenu = [];

    $localStorage.login = sessionStorage.login;
    $localStorage.cedula = sessionStorage.cedula;
    $localStorage.nombres = sessionStorage.nombres;
    $localStorage.email = sessionStorage.email;
    $localStorage.telefono = sessionStorage.telefono;
    $localStorage.tipo = sessionStorage.tipo;
    $localStorage.portero =  sessionStorage.portero;



    $scope.listarMenu = function (user) {
        if (!user) {
            $scope.listaMenu = [
                {"url": "#/pasoporto", "texto": "Pasaporto", "img": "img/menui/quees.png"},
                {"url": "#/about", "texto": "Acerca de porto alto", "img": "img/menui/acerca.png"},
                {"url": "#/home", "texto": "Buscar", "img": "img/menui/lupa.png"},
                {"url": "#/menu", "texto": "Nuestra Carta", "img": "img/menui/carta.png"},
                //{ "url": "#/menud", "texto": "Nuestra Carta Futbolera", "img": "img/menui/cartaf.png" },
                {"url": "#/eventos", "texto": "Eventos", "img": "img/menui/eventos.png"},
                {"url": "#/promo", "texto": "Promociones", "img": "img/menui/promocion.png"}
            ];

            if (sessionStorage.login == "true") {
                $scope.listaMenu.push({"url": "#/salir", "texto": "Salir", "img": "img/menui/salir.png"});
            } else {
                $scope.listaMenu.push({"url": "#/vip", "texto": "Acceso clientes", "img": "img/menui/vip.png"});
                $scope.listaMenu.push({"url": "#/portero", "texto": "Acceso porto", "img": "img/menui/portero.png"});
            }

        } else {
            $scope.listaMenu = [
                {"url": "#/calificar", "texto": "Calificar servicio", "img": "img/menui/calificar.png"},
                {"url": "#/dev", "texto": "Desarrolladores", "img": "img/dev.png"}
            ];
            if (sessionStorage.login == "true" && $localStorage.portero=="false") {
                $scope.listaMenu.push({"url": "#/mireserva", "texto": "Mi Ultima Reserva", "img": "img/menui/reserva.png"});
                $scope.listaMenu.push({"url": "#/reservas", "texto": "Mis reservas", "img": "img/menui/reserva.png"});
            }
            if (sessionStorage.login=="true" && sessionStorage.portero && sessionStorage.portero == "true") {
                $scope.listaMenu.push({"url": "#/validarr", "texto": "Validar datos", "img": "img/menui/ticket.png"});
            }
        }
        $localStorage.menu = $scope.listaMenu;
    }


    $scope.myFunction = function (isMenu) {
        console.log(">>>>>"+isMenu);
        //isMenu = !isMenu;
        var element = document.getElementById("wrapper");
        if (element.classList) {
            if (isMenu) {
                element.classList.toggle("toggled");
            } else {
                var classes = element.className.split(" ");
                var i = classes.indexOf("toggled");
                if (i >= 0) {
                    classes.splice(i, 1);
                } else {
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
            } else {
                if (isMenu) {
                    classes.push("toggled");
                }
            }
            element.className = classes.join(" ");
        }
    }
}
