app.controller('ProfileController', ['$scope', '$location', function($scope, $location) {
    $scope.msg = 'Profile';
    
    $scope.ProfileHolders = JSON.parse($cookies.get('user'));

    $scope.signOut = function() {
        document.cookie = "";
        $location.path('/').replace();
    }
    
    $scope.joinedActivitiesPressed = function () {
        $scope.notHidden = false;
        $location.path('/joinedActivities').replace();      
    };
    
}]);
