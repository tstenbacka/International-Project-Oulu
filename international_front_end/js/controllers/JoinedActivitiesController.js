app.controller('JoinedActivitiesController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    
    $scope.test = 'Hello World';

    
    $scope.loadJoinedActivities = function() {
        
        console.log("Loading joined activities");
        
        // Load user data from cookie
        var userObject = JSON.parse(document.cookie);
        
        $scope.user = {
                id: userObject.id,
                token: userObject.token
            };
        
        // Save userID
        userId = $scope.user.id;
        token = $scope.user.token
        
        console.log(userId);
        console.log(token);
        
        // Create url that is sended to database
        var urlBeg = "http://192.81.223.10:8080/Oulu_Backend/webapi/users/joinedactivities/";
        var url = urlBeg.concat(userId);
        
        console.log(url);
        console.log(userObject);
        
        console.log(userId);
        console.log(token);
        
        // Send to database
        $http.defaults.headers.common.Authorization = 'Bearer ' + userObject.token;
        $http.get(url).then(
            function (response) {
                // success callback
                console.log("Connection to database is working");
                
                var dataJSON = JSON.stringify(response);
                console.log(JSON.stringify(response));
                
                /*
                // Parse JSON data
                
                var activityController = JSON.parse(data)
                
                $scope.activity = {
                    name = $scope.activityController.name
                }
                
                console.log($scope.activity.name);
                */
                
            },
            function (response) {
                // failure callback
                console.log("Couldn't connect to database");
            }
        );
     
    }

    
    
}]);