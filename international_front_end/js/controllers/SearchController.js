app.controller('SearchController', ['$scope','$http','sharedProperties','$timeout',function($scope, $http, sharedProperties,$timeout) {
    
   
 
    $scope.searchword = sharedProperties.getProperty();
 
  
    var search_url = "http://192.81.223.10:8080/Oulu_Backend/webapi/activities/byKey/" + $scope.searchword;

        

    $scope.pageInfo = 'Choose a card';  
       $http.get(search_url).then(function(response) {
        $scope.activities = response.data;
        console.log(response.data);
    }, function(response){
        $scope.activities = "Something went wrong";
    });
    
}]);