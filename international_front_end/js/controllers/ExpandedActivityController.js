
app.controller('ExpandedActivityController', ['$scope','$http','$routeParams','activityIdService', function($scope, $http, $routeParams,activityIdService) {
    
    $scope.activityId = activityIdService.getProperty();

    var activityId;
    var userId;
    $scope.loggedIn = function () {
        if(document.cookie.length > 0) {
            try {
                var userObject = JSON.parse(document.cookie);
            }
            catch (err) {
                return false;                
            }
            if(userObject.username) {
                return true;
            }
            else {
                return false;               
            }
        }
        else {
            return false;
        }
    }

    $scope.loadCardInfo = function () {
        $http.get('http://192.81.223.10:8080/Oulu_Backend/webapi/activities/' + $scope.activityId ).then(function(response) {
            $scope.activity = response.data;


            // Parse userID out of cookie
            var userObject = JSON.parse(document.cookie);

            $scope.user = {
                id: userObject.id
            };


            // Save activityID and userID for later use
            activityId = $scope.activityId;
            userId = $scope.user.id;

        }, function (response) {
            console.log("Couldn't fetch data for expanded activity.");
        });

    }

    $scope.joinActivityPressed = function () {

        console.log("You pressed the join activity button.")

        console.log(activityId);
        console.log(userId);

        // Create the URL that's send to database
        var urlBeginning = 'http://192.81.223.10:8080/Oulu_Backend/webapi/activities/';
        var urlEnd = '/participants/join/';

        var url = urlBeginning.concat(activityId, urlEnd, userId);

        // Get user cookie
        var userObject = JSON.parse(document.cookie);


        // Send to database

        $http.defaults.headers.post.Authorization = 'Bearer ' + userObject.token;
        $http.post(url).then(
            function (response) {
                // success callback
                console.log("You just joined the activity, horray!");
            },
            function (response) {
                // failure callback
                console.log("Couldn't connect to database");
            }
        );
    }
}]);
