app.controller('MainController', ['$scope','sharedProperties','$route', '$location', function($scope, sharedProperties, $route, $location ) {
    //$scope.signInTxt = 'Sign In';
    $scope.newActivityTxt = 'New Activity';
    $scope.searchTxt = "I Want To ...";
    $scope.login = true;
    $scope.profile = false;
    
    $scope.objectValue = '';
    sharedProperties.setProperty($scope.objectValue);
    
    
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
            try {
            var userObject = JSON.parse(document.cookie);
            }
            catch (err) {
                return 'Sign In';
            }
            return userObject.username;
        }

        else {
            return 'Sign In';
        }
    }

    $scope.search = function () {
        if ($scope.objectValue === ''){
            $location.path('/').replace();
            $route.reload();
        }
        else {
            try { 
                var y = JSON.parse(document.cookie);
            }
            catch (err) {
                var y = {
                    search : ''
                };
            }
            y.search = $scope.objectValue;
            document.cookie = JSON.stringify(y);
            $location.path('/search').replace();
            $route.reload();
            
            
        }
    }
    
}]);
