module.controller('homeCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    console.log("Home ctrl");

    /*if ($('#wrapper').is('toggled')) {
        $('#wrapper').toggleClass('toggled');  
    }
    else{
        $('#wrapper').removeClass('toggled');
        
    }*/

    $scope.url = "http://www.portoalto.com.co/webservice.php?opc=12&buscador=";
    $scope.promociones;
    $("html, body").animate({ scrollTop: 0 }, 600);
    $scope.filtro='';

    $scope.loadinfo = function () {
        console.log($scope.filtro);
        $('#msgEsperaM').html("Consultado..."+$scope.filtro);
        $('#dlgEsperaM').modal();
        $http.get($scope.url+$scope.filtro, {}
        ).success(function (data) {
            $scope.promociones = data;
            document.getElementById("div_resultado").innerHTML = $scope.promociones;
            $('#dlgEsperaM').modal('hide');
        }).error(function (data, status, headers, config) {
            $('#dlgEsperaM').modal('hide');
            $('#msgEsperaM').html("Los servicios web no están disponibes");
            $('#dlgEsperaM').modal();
        });
    }
    //$scope.loadinfo();

    $scope.string = 'Carlos Cepeda - 1124850065';
    
}]);
