app.controller('ExpandedActivityController', ['$scope','$http','$routeParams', function($scope, $http, $routeParams) {
    $scope.test = "Test";
    $http.get('http://192.81.223.10:8080/Oulu_Backend/webapi/activities/').then(function(response) {
        $scope.activity = response.data[$routeParams.id];
        console.log($routeParams.id);
    }, function(response){
        $scope.activities = "Something went wrong";
        console.log("WRONG");
    });
}]);