app.controller('LoginController', ['$scope', '$location', '$http', '$cookies', function($scope, $location, $http, $cookies) {
    $scope.notHidden = true;
    $scope.loginMsg = 'Sign In';
    $scope.newUserMsg = 'New User';
    $scope.userNamePlaceholder = 'Name or email';
    $scope.passWordPlaceholder = 'Password';
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
        /* while compiling form , angular created this object*/
        var data = $scope.loginInformation;
        /* user data to post to the server*/
       // console.log(data);

       $http({
            method: 'post',
            url: 'http://192.81.223.10:8080/Oulu_Backend/webapi/users/login',
            data: data,
            config: 'Content-Type: application/json;'
           }) .then(function(response) {
             //  document.cookie = "token:" + response.data.token + " id:" + response.data.id;
                $cookies.put('user', JSON.stringify(response.data));
              //  document.cookie = JSON.stringify(response.data);
                /* Example on how to use cookies below
                console.log(document.cookie);

                var y = JSON.parse(document.cookie);
                console.log(y.token);
                */
                //console.log(response.data.token);
                console.log($cookies.get('user'));
                $location.path('/').replace();
            }, function (response) {
            // this function handles error
            $scope.loginError = "Failed to login";

        });
    };

    $scope.signUp = function () {
        $scope.notHidden = false;
        $location.path('/signup').replace();      
    };

}]);
