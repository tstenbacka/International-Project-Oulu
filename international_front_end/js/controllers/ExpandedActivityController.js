app.controller('ExpandedActivityController', ['$scope','$http', function($scope, $http) {
    $scope.test = "Test";
    $http.get('http://192.81.223.10:8080/Oulu_Backend/webapi/activities/1').then(function(response) {
        $scope.activity = response.data;
        console.log(response.data);
    }, function(response){
        $scope.activities = "Something went wrong";
        console.log("WRONG");
    });
}]);
