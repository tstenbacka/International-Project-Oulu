app.controller('ProfileController', ['$scope', '$location', function($scope, $location) {
    $scope.msg = 'Profile';
    
    $scope.ProfileHolders = JSON.parse(document.cookie);

    $scope.signOut = function() {
        document.cookie = "";
        $location.path('/').replace();
    }
    
}]);
