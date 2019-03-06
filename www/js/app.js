'use strict';

/*if (top != self) {
 if (self.location.hostname != 'www.runt.com.co') {
 top.location.replace(document.location);
 }
 }*/

// Declare app level module which depends on filters, and services
var module = angular.module("Pasoporto",["ngRoute","ngStorage","ja.qr","ngCordova","ngSanitize"]).
        config(["$routeProvider",function(a){
        
        a.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
        a.when('/menu', {templateUrl: 'partials/menu.html', controller: 'menuCtrl'});
        a.when('/menud', {templateUrl: 'partials/menud.html', controller: 'menuDepCtrl'});
        a.when('/eventos', {templateUrl: 'partials/eventos.html', controller: 'eventoCtrl'});
        a.when('/promo', {templateUrl: 'partials/promociones.html', controller: 'promoCtrl'});
        a.when('/about', {templateUrl: 'partials/about.html', controller: 'aboutCtrl'});
        a.when('/reserva', {templateUrl: 'partials/reserva.html', controller: 'reservaCtrl'});
        a.when('/mireserva', {templateUrl: 'partials/mireserva.html', controller: 'miReservaCtrl'});
        a.when('/reservas', {templateUrl: 'partials/reservas.html', controller: 'reservasCtrl'});
        
        a.when('/vip', {templateUrl: 'partials/vip.html', controller: 'vipCtrl'});
        a.when('/portero', {templateUrl: 'partials/portero/login.html', controller: 'porteroLoginCtrl'});
        a.when('/validarr', {templateUrl: 'partials/portero/home.html', controller: 'porterohomeCtrl'});
        a.when('/validarc', {templateUrl: 'partials/portero/reserva.html', controller: 'porteroReservaCtrl'});
        a.when('/qr', {templateUrl: 'partials/portero/cliente.html', controller: 'porteroQrCtrl'});
        
        a.when('/calificar', {templateUrl: 'partials/calificar.html', controller: 'calificarCtrl'});
        //nuevo
        a.when('/mipasoporto', {templateUrl: 'partials/mipasoporto.html', controller: 'miPasoportoCtrl'});
        a.when('/pasoporto', {templateUrl: 'partials/pasoporto.html', controller: 'pasoportoCtrl'});
        a.when('/solpassoporto', {templateUrl: 'partials/solpasoporto.html', controller: 'solPasoCtrl'});

        a.when('/dev', {templateUrl: 'partials/dev.html', controller: 'solPasoCtrl'});
        a.when('/salir', {templateUrl: 'partials/home.html', controller: 'salirCtrl'});

        a.otherwise({redirectTo:"/home"});
    }]).directive('capitalize', function () {
            return {
                require: 'ngModel',
                link: function (scope, element, attrs, modelCtrl) {
                    var capitalize = function (inputValue) {
                        if (inputValue === undefined)
                            inputValue = '';
                        var capitalized = inputValue.toUpperCase();
                        if (capitalized !== inputValue) {
                            modelCtrl.$setViewValue(capitalized);
                            modelCtrl.$render();
                        }
                        return capitalized;
                    }
                    modelCtrl.$parsers.push(capitalize);
                    capitalize(scope[attrs.ngModel]); // capitalize initial value
                }
            };
        });
