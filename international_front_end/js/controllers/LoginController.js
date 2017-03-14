app.controller('LoginController', ['$scope', '$location', function($scope, $location) {
    $scope.notHidden = true;
    $scope.loginMsg = 'login';
    $scope.newUserMsg = 'New User';
    $scope.userNamePlaceholder = 'username';
    $scope.passWordPlaceholder = 'password';
    $scope.userNameHelpText = 'Username is required';
    $scope.passWordHelpText = 'Password is required';
    $scope.newUserButtonMsg = 'Create a new account';
    $scope.forgotPassWordMsg = 'Forgot password?';
    $scope.userName;
    $scope.passWord;
    $scope.logged = false;
    $scope.loginError;

    $scope.login = function () {
        if ($scope.userName === $scope.passWord) {
            $scope.logged = true;
            $location.path('/').replace();
        }

        else {
            $scope.logged = false;
            $scope.loginError = 'Failed to Authenticate';
        }
    };

    $scope.signUp = function () {
        $scope.notHidden = false;
        $location.path('/signup').replace();      
    };
}]);
