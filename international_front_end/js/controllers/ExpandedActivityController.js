
app.controller('ExpandedActivityController', ['$scope','$http','$routeParams','activityIdService', function($scope, $http, $routeParams,activityIdService) {
    
    $scope.activityId = activityIdService.getProperty();

    var activityId;
    var userId;

    var address = "";
    var geocoder = new google.maps.Geocoder();
    
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
          
            var jsonString = JSON.stringify($scope.activity);    
            var jsonValue = JSON.parse(jsonString);  
            var X = jsonValue["locationX"];
            var Y = jsonValue["locationY"];
            geocodeLatLng(geocoder,X, Y); 

            
            
     
            
            

            // Parse userID out of cookie
            var userObject = JSON.parse(document.cookie);

            $scope.user = {
                id: userObject.id
            };
            
            
            

            // Save activityID and userID for later use
            activityId = $scope.activityId;
            userId = $scope.user.id;
            
            console.log("Rivi 60 :D" + address);     

            console.log("Outside function address = " + $scope.addressScope);
            //console.log(Y);

        }, function (response) {
            console.log("Couldn't fetch data for expanded activity.");
        });

    }

    function geocodeLatLng(geocoder,X, Y) {
                var input = Y + ',' + X;
                console.log(input);
                var latlngStr = input.split(',', 2);
                var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
                geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                    if (status !== google.maps.GeocoderStatus.OK) {
                        document.getElementById("addressShow").innerHTML = "Activity location is not defined";
                    }
                    // This is checking to see if the Geoeode Status is OK before proceeding
                    if (status == google.maps.GeocoderStatus.OK) {
                        
                        console.log(results);
                        address = (results[0].formatted_address);
                        console.log("geocodeLatLng address = " + address);
                        document.getElementById("addressShow").innerHTML = address;

                    }
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
