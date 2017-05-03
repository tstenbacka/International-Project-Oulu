app.controller('ExpandedActivityController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    var activityId;
    var userId;

    $scope.loadCardInfo = function () {
        $http.get('http://192.81.223.10:8080/Oulu_Backend/webapi/activities/').then(function (response) {
            $scope.activity = response.data[$routeParams.id];
            $scope.activityId = $routeParams.id;
                  
            var jsonString = JSON.stringify($scope.activity);    
            var jsonValue = JSON.parse(jsonString);  
            var X = jsonValue["locationX"];
            var Y = jsonValue["locationY"];
            var address;
            
            
    
            
            
            
            
            

            // Parse userID out of cookie
            var userObject = JSON.parse(document.cookie);

            $scope.user = {
                id: userObject.id
            };
            
            
            

            // Save activityID and userID for later use
            activityId = $scope.activityId;
            userId = $scope.user.id;
            
                        
            function geocodeLatLng(geocoder) {
                var input = Y + ',' + X;
                console.log(input);
                var latlngStr = input.split(',', 2);
                var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                    if (status !== google.maps.GeocoderStatus.OK) {
                        alert("Activity location is not defined");
                    }
                    // This is checking to see if the Geoeode Status is OK before proceeding
                    if (status == google.maps.GeocoderStatus.OK) {
                        console.log(results);
                        address = (results[0].formatted_address);
                        //console.log(address);
                        
                    }
                });
            }

                
            geocodeLatLng();            
            

            
            console.log(address);
            //console.log(Y);

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
