app.controller('ProfileController', ['$scope', '$location', function($scope, $location) {
    $scope.msg = 'Profile';
    
    $scope.ProfileHolders = JSON.parse(document.cookie);

    $scope.signOut = function() {
        document.cookie = "";
        $location.path('/').replace();
    }
    
    $scope.joinedActivitiesPressed = function () {
        $scope.notHidden = false;
        $location.path('/joinedActivities').replace();
    };
    
    $scope.hostedActivitiesPressed = function () {
        $scope.notHidden = false;
        $location.path('/hostedActivities').replace();
    };
    
}]);
