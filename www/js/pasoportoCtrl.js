module.controller('miPasoportoCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    $("#wrapper").toggleClass("toggled");
    baseController($scope,$localStorage);
    $scope.url ="http://www.portoalto.com.co/api/v1/infoUser";
    $scope.object={};
    $scope.object.cedula = $localStorage.cedula;
    $scope.string = String($localStorage.cedula);
    $scope.loadInfo = function(){
        $('#msgEsperaM').html("Consultado...");
        $('#dlgEsperaM').modal();
        $http.post($scope.url,$scope.object).success(function (data) {
            console.log(data);
            if(data.status=='SUCCESS'){
                $scope.string = String("CC"+data.object.nodocumento+"|"+data.object.nombres+ " "+data.object.apellidos+"| Email="+data.object.email);
            } else{
                $('#msgEsperaM').html(data.message);
                $('#dlgEsperaM').modal();
            }
            $('#dlgEsperaM').modal('hide');
        }).error(function (data) {
            $('#dlgEsperaM').modal('hide');
            $('#msgEsperaM').html("Los servicios web no están disponibes");
            $('#dlgEsperaM').modal();
        });
    }
    //$scope.loadInfo();
    
}]);


module.controller('pasoportoCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    $("#wrapper").toggleClass("toggled");
    baseController($scope,$localStorage);
    console.log("Cargado pasoportoCtrl!!");
    baseController($scope,$localStorage);
    
}]);


module.controller('solPasoCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    $("#wrapper").toggleClass("toggled");
    baseController($scope,$localStorage);
    console.log("Cargado solPasoCtrl!!");
    baseController($scope,$localStorage);
    
}]);




