module.controller('calificarCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    $("#wrapper").toggleClass("toggled");
    $scope.ruta = "http://www.portoalto.com.co";
    $scope.errores ={};
    $scope.object = {};

    $scope.calificar = function () {

        var cedula =  $localStorage.cedula;
        var error = false;

        if(!$scope.object.calificacion){
            $scope.errores.selectA ='Campo obligatorio';
            error = true;
        } else {
            $scope.errores.selectA ='';
        }

        if(!$scope.object.satisfaccion){
            $scope.errores.satisfaccion ='Campo obligatorio';
            error = true;
        } else {
            $scope.errores.satisfaccion ='';
        }

        if(!$scope.object.observaciones){
            $scope.errores.observaciones ='Campo obligatorio';
            error = true;
        } else {
            $scope.errores.observaciones ='';
        }
        if(error){
            return;
        }
        $('#msgEsperaM').html("Procesando...");
        $('#dlgEsperaM').modal();

        $http.get($scope.ruta + "/webservice.php?opc=10&calificacion=" + $scope.object.calificacion + "&satisfaccion=" + $scope.object.satisfaccion + "&obsers_calificacion=" + $scope.object.observaciones + "&cedula=" + cedula, {}
        ).success(function (data) {
            $('#dlgEsperaM').modal('hide');
            if(data=='Guardada'){
                $('#msgEsperaM').html("Gracias por tu calificacion, nos ayudara a mejorar.");
                window.location.href = './index.html#/home';
            } else {
                $('#msgEsperaM').html(data);    
            }
            $('#dlgEsperaM').modal();
        }).error(function (data, status, headers, config) {
           
            $('#msgEsperaM').html("Los servicios web no están disponibes");
            $('#dlgEsperaM').modal();
        });

    }

    $scope.cancelar = function(){
        window.location.href = './index.html#/home';
    }
}]);