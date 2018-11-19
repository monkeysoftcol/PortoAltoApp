'use strict';

/*if (top != self) {
 if (self.location.hostname != 'www.runt.com.co') {
 top.location.replace(document.location);
 }
 }*/

// Declare app level module which depends on filters, and services
var module = angular.module("Pasoporto",["ngRoute","ngStorage"]).
        config(["$routeProvider",function(a){
        
        a.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
        a.when('/menu', {templateUrl: 'partials/menu.html', controller: 'menuCtrl'});
        a.when('/menud', {templateUrl: 'partials/menud.html', controller: 'menuDepCtrl'});
        a.when('/eventos', {templateUrl: 'partials/eventos.html', controller: 'eventoCtrl'});
        a.when('/promo', {templateUrl: 'partials/promociones.html', controller: 'promoCtrl'});
        a.when('/about', {templateUrl: 'partials/about.html', controller: 'aboutCtrl'});
        a.when('/reserva', {templateUrl: 'partials/reserva.html', controller: 'reservaCtrl'});

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