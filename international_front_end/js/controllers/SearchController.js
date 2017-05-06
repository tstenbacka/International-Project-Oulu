app.controller('SearchController', ['$scope','$http','sharedProperties','$timeout','activityIdService',function($scope, $http, sharedProperties,$timeout,activityIdService) {
    
   
    var y = JSON.parse(document.cookie);
    $scope.searchword = y.search;
    $scope.longitude = y.homeLong;
    $scope.latitude = y.homeLat;
   // $scope.searchword = sharedProperties.getProperty();

    //var search_url = "http://192.81.223.10:8080/Oulu_Backend/webapi/activities/byKey/" + $scope.searchword;
    var search_url = "http://192.81.223.10:8080/Oulu_Backend/webapi/activities/byKey/" + $scope.searchword + "?lon=" + $scope.longitude + "&lat=" +  $scope.latitude;
    console.log(search_url);
    //Open activity in expanded activity view by id we get from card.
    $scope.openActivity =  function(id) {
        activityIdService.setProperty(id)
        window.location="#/activity/"+id;
    }
        

    $scope.pageInfo = 'Choose a card';  
       $http.get(search_url).then(function(response) {
        $scope.activities = response.data;
        console.log(response.data);
    }, function(response){
        $scope.activities = "Something went wrong";
    });
    
}]);