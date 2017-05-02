app.controller('MainController', ['$scope','sharedProperties','$route', function($scope, sharedProperties, $route ) {
    //$scope.signInTxt = 'Sign In';
    $scope.newActivityTxt = 'New Activity';
    $scope.searchTxt = "I Want To ...";
    $scope.login = true;
    $scope.profile = false;
    
    $scope.objectValue = 'jere';
    sharedProperties.setProperty($scope.objectValue);
    
    
    $scope.Searched = function (){

    }

    
    
    $scope.loggedIn = function () {
        if(document.cookie.length > 0) {
            $scope.profile = true;
            $scope.login = false;
            return true;
        }
        else {
            $scope.profile = false;
            $scope.login = true;
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
