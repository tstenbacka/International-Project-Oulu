app.controller('CardController', ['$scope','$http','sharedProperties','$timeout',function($scope, $http, sharedProperties,$timeout) {
    
    $scope.searchword = sharedProperties.getProperty();
 
    function url_check (){   
        var search_url = "http://192.81.223.10:8080/Oulu_Backend/webapi/activities/byKey/" + $scope.searchword;
        var basic_url = "http://192.81.223.10:8080/Oulu_Backend/webapi/activities";
        
        if ($scope.searchword === ''){
            return basic_url;
        }
        else {
            return search_url;
    }
    };
    
    $scope.pageInfo = 'Choose a card';  
    $http.get(url_check()).then(function(response) {
        $scope.activities = response.data;
        console.log(response.data);
    }, function(response){
        $scope.activities = "Something went wrong";
    });
}]);
