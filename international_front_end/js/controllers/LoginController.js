app.controller('LoginController', ['$scope', '$location', function($scope, $location) {
    $scope.msg = 'login';
    $scope.userNamePlaceholder = 'username';
    $scope.passWordPlaceholder = 'password';
    $scope.userNameHelpText = 'Username is required';
    $scope.passWordHelpText = 'Password is required';
    $scope.userName;
    $scope.passWord;
    $scope.logged = false;
    $scope.loginError;

    $scope.login = function () {
        if ($scope.userName === $scope.passWord) {
            //$location.path('/');
            $scope.logged = true;
            $location.path('/').replace();
        }

        else {
            $scope.logged = false;
            $scope.loginError = 'Failed to Authenticate';
        }
    };
}]);
