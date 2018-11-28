module.controller('miPasoportoCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    baseController($scope,$localStorage);
    $scope.url ="http://www.portoalto.com.co/api/v1/infoUser";
    $scope.object={};
    $scope.object.cedula =  $localStorage.cedula;
    $scope.infoQr;

    $scope.loadInfo = function(){
        $('#msgEsperaM').html("Consultado...");
        $('#dlgEsperaM').modal();
        $http.post($scope.url,$scope.object).success(function (data) {
            console.log(data);
            if(data.status=='SUCCESS'){
                alert(JSON.stringify(data.object));
                $scope.infoQr = "CC"+data.object.nodocumento;
            } else{
                console.log("Error en los ws");
                $('#msgEsperaM').html(data.message);
                $('#dlgEsperaM').modal();
            }
            $('#dlgEsperaM').modal('hide');
        }).error(function (data, status, headers, config) {
            console.log("Error en los ws");
            $('#dlgEsperaM').modal('hide');
            $('#msgEsperaM').html("Los servicios web no están disponibes");
            $('#dlgEsperaM').modal();
        });
    }
    $scope.loadInfo();
    
}]);


module.controller('pasoportoCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    baseController($scope,$localStorage);
    console.log("Cargado pasoportoCtrl!!");
    baseController($scope,$localStorage);
    
}]);


module.controller('solPasoCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    baseController($scope,$localStorage);
    console.log("Cargado solPasoCtrl!!");
    baseController($scope,$localStorage);
    
}]);




