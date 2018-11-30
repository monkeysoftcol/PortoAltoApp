'use strict';

var module = angular.module("Pasoporto",["ngRoute","ngStorage","ja.qr"]).
        config(["$routeProvider",function(a){
        
        a.when('/reserva', {templateUrl: 'partials/portero/reserva.html', controller: 'porteroReservaCtrl'});
        a.when('/qr', {templateUrl: 'partials/portero/cliente.html', controller: 'porteroQrCtrl'});
        a.when('/home', {templateUrl: 'partials/portero/home.html', controller: 'porterohomeCtrl'});
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
