app.controller('ExpandedActivityController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    var activityId;
    var userId;
    
    $scope.loadCardInfo = function () {
        $http.get('http://192.81.223.10:8080/Oulu_Backend/webapi/activities/').then(function (response) {
            $scope.activity = response.data[$routeParams.id];
            $scope.activityId = $routeParams.id;


            // Parse userID out of cookie
            var userObject = JSON.parse(document.cookie);

            $scope.user = {
                id: userObject.id
            };


            // Save activityID and userID for later use
            activityId = $scope.activityId;
            userId = $scope.user.id;
            
            console.log(userId);

        }, function (response) {
            console.log("Couldn't fetch data for expanded activity.");
        });

    }

    $scope.joinActivityPressed = function () {

        console.log("You pressed the join activity button.")
        
        console.log(activityId);
        console.log(userId);
        
        var urlBeginning = 'http://192.81.223.10:8080/Oulu_Backend/webapi/activities/';
        var urlEnd = '/participants/join/';
        
        var url = urlBeginning.concat(activityId, urlEnd, userId);
        
        // $http.post('http://192.81.223.10:8080/Oulu_Backend/webapi/activities/');
        console.log(url);
    }
}]);
