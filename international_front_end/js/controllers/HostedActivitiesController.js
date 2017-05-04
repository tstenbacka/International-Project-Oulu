app.controller('HostedActivitiesController', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams,  $location) {
    
    
    $scope.loadHostedActivities = function() {
        
        console.log("Loading hosted activities");
        
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
        
        
        var urlBeg = "http://192.81.223.10:8080/Oulu_Backend/webapi/users/createdactivities/";
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
                
                /*
                var dataJSON = JSON.stringify(response);
                
                // Parse JSON data
                var jsonData = JSON.parse(dataJSON);
                console.log(jsonData);
                
                var i, j, name, category, datetime;
                
                for (i in jsonData.data) {
                    name += " " + jsonData.data[i].name + ",";
                    datetime += " " + jsonData.data[i].dateTime + ",";
                    category += " " + jsonData.data[i].subcategory.name + ",";
                }
                
                console.log(name);
                console.log(datetime);
                console.log(category);
                */
                
                $scope.activities = response.data;
                
                
                
            },
            function (response) {
                // failure callback
                console.log("Couldn't connect to database");
            }
        );
     
    }
    
    $scope.backButtonPressed = function () {
        $scope.notHidden = false;
        $location.path('/profile').replace();
    };

    
    
}]);