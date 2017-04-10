app.controller('ExpandedActivityController', ['$scope','$http','$routeParams', function($scope, $http, $routeParams) {
    $scope.test = "Test";
    $http.get('http://192.81.223.10:8080/Oulu_Backend/webapi/activities/').then(function(response) {
        $scope.activity = response.data[$routeParams.id];
        console.log($routeParams.id);
    }, function(response){
        console.log("Couldn't fetch data");
    });
    
    var userObject = JSON.parse(document.cookie);

    $scope.userId = {
        id: userObject.id,
    };
  
    var data = $scope.userId;
    var url = "http://192.81.223.10:8080/Oulu_Backend/webapi/activities"
    console.log(JSON.stringify(data));
    //var userObject = JSON.parse(document.cookie);
    // var y = 'Bearer ' + userObject.token;
    //console.log(y);
    $http.defaults.headers.post.Authorization = 'Bearer ' + userObject.token;

    $http.post(url, data)
        .then(
            function (response) {
                // success callback
                console.log("SUCCESS");
                //console.log(response);

            },
            function (response) {
                // failure callback
                console.log("FAILURE");
                //console.log(response);
            }
        );
}]);