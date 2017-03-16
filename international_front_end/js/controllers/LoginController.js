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
        /* user data to post to the server*/
        console.log(data);

       $http({
            method: 'post',
            url: 'http://192.81.223.10:8080/Oulu_Backend/webapi/users/login',
            data: data,
            config: 'Content-Type: application/json;'
           }) .then(function(response) {
                console.log(response.data.token);
            }, function (response) {
            // this function handles error

        });
        
        $location.path('/').replace();
    };

    $scope.signUp = function () {
        $scope.notHidden = false;
        $location.path('/signup').replace();      
    };
}]);
