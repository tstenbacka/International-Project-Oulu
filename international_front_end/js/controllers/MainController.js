app.controller('MainController', ['$scope', function($scope) {
    //$scope.signInTxt = 'Sign In';
    $scope.newActivityTxt = 'New Activity';
    $scope.searchTxt = "I Want To ...";
    $scope.login = true;
    $scope.profile = false;

    $scope.loggedIn = function () {
        if(document.cookie.length > 0) {
            $scope.profile = true;
            $scope.login = false;
            return true;
        }
        else {
            return false;
        }
    }

    $scope.getDudesName = function () {
        if(document.cookie.length > 0) {
            var userObject = JSON.parse(document.cookie);
            return userObject.username;
        }

        else {
            return 'Sign In';
        }
    }
}]);
