module.controller('eventoCtrl', ['$scope', '$http', function ($scope, $http) {
    
    $("html, body").animate({ scrollTop: 0 }, 600);
    baseController($scope, $localStorage);
    $scope.myFunction(false);
    
    $scope.url = "http://www.movil.portoalto.com.co/webservice.php?opc=13";
    $scope.eventos;
    
    
    $scope.loadinfo = function () {
        $('#msgEsperaM').html("Consultado...");
        $('#dlgEsperaM').modal();
        $http.get($scope.url, {}
        ).success(function (data) {
            $scope.eventos = data;
            document.getElementById("div_eventos").innerHTML = $scope.eventos;
            $('#dlgEsperaM').modal('hide');
        }).error(function (data, status, headers, config) {
            $('#dlgEsperaM').modal('hide');
            $('#msgEsperaM').html("Los servicios web no están disponibes");
            $('#dlgEsperaM').modal();
        });
    }
    $scope.loadinfo();

}]);
