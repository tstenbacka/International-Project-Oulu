app.controller('SearchController', ['$scope','$http','sharedProperties','$timeout','activityIdService',function($scope, $http, sharedProperties,$timeout,activityIdService) {
    

    if(document.cookie.length > 0) {
        try {
        var userObject = JSON.parse(document.cookie);
        }
        catch (err) {
            
        }
        $scope.searchword = userObject.search;
        if(userObject.username) {
            $scope.longitude = userObject.homeLong;
            $scope.latitude = userObject.homeLat
        }
        else {
        }
    }

    else {
        
    }
   
    var y = JSON.parse(document.cookie);
    $scope.searchword = y.search;
    $scope.longitude = y.homeLong;
    $scope.latitude = y.homeLat;
   // $scope.searchword = sharedProperties.getProperty();

    function url_check (){
   
        var search_url = "http://192.81.223.10:8080/Oulu_Backend/webapi/activities/byKey/" + $scope.searchword;
        var search_url_lat = "http://192.81.223.10:8080/Oulu_Backend/webapi/activities/byKey/" + $scope.searchword + "?lon=" + $scope.longitude + "&lat=" +  $scope.latitude;

        if(userObject.username)
            return search_url_lat;
        else
            return search_url;
    }
    
     $scope.openActivity =  function(id) {
        activityIdService.setProperty(id)
        window.location="#/activity/"+id;
    }       

    $scope.pageInfo = 'Choose a card';  
       $http.get(url_check()).then(function(response) {
        $scope.activities = response.data;
        console.log(response.data);
    }, function(response){
        $scope.activities = "Something went wrong";
    });
    
}]);