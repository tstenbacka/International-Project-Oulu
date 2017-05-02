app.controller('MainController', ['$scope','sharedProperties','$route', '$location', '$cookies', function($scope, sharedProperties, $route, $location, $cookies ) {
    //$scope.signInTxt = 'Sign In';
    $scope.newActivityTxt = 'New Activity';
    $scope.searchTxt = "I Want To ...";
    $scope.login = true;
    $scope.profile = false;
    
    $scope.objectValue = '';
    sharedProperties.setProperty($scope.objectValue);
    $scope.user = $cookies.get('user');
    
    
    $scope.loggedIn = function () {
        if($scope.user.length > 0) {
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
        if($scope.user.length > 0) {
            var userObject = JSON.parse(user);
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
            $cookies.put('search', $scope.objectValue);
       /* var y = JSON.parse(document.cookie);
        y.search = $scope.objectValue;
        document.cookie = JSON.stringify(y);*/
        $location.path('/search').replace();
        $route.reload();
            
            
        }
    }
    
}]);
