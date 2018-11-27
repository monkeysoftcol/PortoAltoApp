module.controller('eventoCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log("eventoCtrl ctrl");
    $scope.url = "http://www.portoalto.com.co/webservice.php?opc=13";
    $scope.eventos;
    $("html, body").animate({ scrollTop: 0 }, 600);
    
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
