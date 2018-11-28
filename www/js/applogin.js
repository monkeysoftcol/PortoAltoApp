'use strict';

/*if (top != self) {
 if (self.location.hostname != 'www.runt.com.co') {
 top.location.replace(document.location);
 }
 }*/

// Declare app level module which depends on filters, and services
var module = angular.module("Pasoporto",["ngRoute","ngStorage","ja.qr"]).
        config(["$routeProvider",function(a){
        
        a.when('/home', {templateUrl: 'partials/login.html', controller: 'loginCtrl'});

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
