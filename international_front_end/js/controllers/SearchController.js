app.controller('SearchController', ['$scope','$http','sharedProperties','$timeout','activityIdService',function($scope, $http, sharedProperties,$timeout,activityIdService) {
    
   
    var y = JSON.parse(document.cookie);
    $scope.searchword = y.search;
   // $scope.searchword = sharedProperties.getProperty();

    var search_url = "http://192.81.223.10:8080/Oulu_Backend/webapi/activities/byKey/" + $scope.searchword;
    
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