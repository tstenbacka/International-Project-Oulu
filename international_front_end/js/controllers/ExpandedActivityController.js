app.controller('ExpandedActivityController', ['$scope','$http','$routeParams','activityIdService', function($scope, $http, $routeParams,activityIdService) {
    $scope.test = "Test";
    $scope.activityId = activityIdService.getProperty();
    $http.get('http://192.81.223.10:8080/Oulu_Backend/webapi/activities/' + $scope.activityId ).then(function(response) {
        $scope.activity = response.data;
        console.log(response.data);
    }, function(response){
        console.log("Couldn't fetch data");
    });
}]);