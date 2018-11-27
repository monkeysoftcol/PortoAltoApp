module.controller('calificarCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

    $scope.errores ={};

    $scope.calificar = function () {
        var calificacion = document.getElementById("calificacion").value;
        var satisfaccion = document.getElementById("satisfaccion").value;
        var obsers_calificacion = document.getElementById("obsers_calificacion").value;
        var error = false;
        console.log(calificacion);
        console.log(satisfaccion);
        console.log(obsers_calificacion);

        if(calificacion.lenght==0){
            $scope.errores.selectA='Campo obligatorio';
        }

    }
}]);