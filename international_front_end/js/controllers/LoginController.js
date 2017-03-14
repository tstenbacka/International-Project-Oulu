app.controller('LoginController', ['$scope', '$location', '$http', function($scope, $location, $http) {
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

    $scope.loginInformation = {
        username: '',
        password: ''
    };

    $scope.login = function () {
        /*
        if ($scope.userName === $scope.passWord) {
            $scope.logged = true;
            $location.path('/').replace();
        }

        else {
            $scope.logged = false;
            $scope.loginError = 'Failed to Authenticate';
        }*/

        /* while compiling form , angular created this object*/
        var data = $scope.loginInformation;
        /* post to server*/
        console.log(data);

        // we still need to get the return token
        $http.post("http://192.81.223.10:8080/Oulu_Backend/webapi/users/login", data);
        $location.path('/').replace();
    };

    $scope.signUp = function () {
        $scope.notHidden = false;
        $location.path('/signup').replace();      
    };
}]);
