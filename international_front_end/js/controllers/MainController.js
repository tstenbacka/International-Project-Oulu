app.controller('MainController', ['$scope', function($scope) {
    $scope.signInTxt = 'Sign In';
    $scope.newActivityTxt = 'New Activity';
    $scope.searchTxt = "I Want To ...";
    $scope.loggedIn = document.cookie;

    $scope.loggedIn = function () {
        if(document.cookie.length > 0)
            return true;
        else
            return false;
    }

    $scope.getDudesName = function () {
        if(document.cookie.length > 0) {
            var userObject = JSON.parse(document.cookie);
           // $scope.searchTxt = userObject.username;
            return userObject.username;
        }

        else {
            return 'Sign In';
        }
    }
}]);
