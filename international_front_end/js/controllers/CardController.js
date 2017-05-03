app.controller('CardController', ['$scope','$http','sharedProperties','$timeout','activityIdService',function($scope, $http, sharedProperties,$timeout,activityIdService) {
    
    $scope.searchword = sharedProperties.getProperty();

    var userObject = JSON.parse(document.cookie);
    $scope.distance = 10000;
    $scope.longitude = userObject.homeLong;
    $scope.latitude = userObject.homeLat;

    //Open activity in expanded activity view by id we get from card.
    $scope.openActivity =  function(id) {
        activityIdService.setProperty(id)
        window.location="#/activity/"+id;
    }

    
    function url_check (){
        var search_url = "http://192.81.223.10:8080/Oulu_Backend/webapi/activities/byKey/" + $scope.searchword;
        var basic_url = "http://192.81.223.10:8080/Oulu_Backend/webapi/activities/"
        var distance_url = "http://192.81.223.10:8080/Oulu_Backend/webapi/activities/bydistance?distance=" + $scope.distance + "&lon=" + $scope.longitude + "&lat=" +  $scope.latitude;
        
        if ($scope.searchword === ''){
            return distance_url;
        }
        else {
            return search_url;
        }
    };
    
    $http.get(url_check()).then(function(response) {

        $scope.activities = response.data;
        console.log(response.data);
        console.log();
    }, function(response){
        $scope.activities = "Something went wrong";
    });
    
}]);
