module.controller('promoCtrl', ['$scope', '$http', function ($scope, $http) {

    baseController($scope, $localStorage);
    $scope.myFunction(false);

    $("html, body").animate({ scrollTop: 0 }, 600);
    $scope.url = "http://www.portoalto.com.co/webservice.php?opc=14";
    $scope.promociones;
    $("html, body").animate({ scrollTop: 0 }, 600);

    $scope.loadinfo = function () {
        $('#msgEsperaM').html("Consultado...");
        $('#dlgEsperaM').modal();
        $http.get($scope.url, {}
        ).success(function (data) {
            $scope.promociones = data;
            document.getElementById("div_promos").innerHTML = $scope.promociones;
            $('#dlgEsperaM').modal('hide');
        }).error(function (data, status, headers, config) {
            $('#dlgEsperaM').modal('hide');
            $('#msgEsperaM').html("Los servicios web no están disponibes");
            $('#dlgEsperaM').modal();
        });
    }
    $scope.loadinfo();

}]);
