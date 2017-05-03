app.controller('ProfileController', ['$scope', '$location', '$cookies', '$route', function($scope, $location, $cookies, $route) {
    $scope.msg = 'Profile';
    
    try {
    $scope.ProfileHolders = $cookies.getObject('user');
    }
    catch(err) {
       // $cookies.put('user', "");
    }

    $scope.signOut = function() {
        $cookies.remove('user');
        //document.cookie = "";
        $location.path('/').replace();
        $route.reload();
    }
    
    $scope.joinedActivitiesPressed = function () {
        $scope.notHidden = false;
        $location.path('/joinedActivities').replace();      
    };
    
}]);
