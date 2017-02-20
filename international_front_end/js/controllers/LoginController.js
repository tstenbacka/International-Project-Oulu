app.controller('LoginController', ['$scope', '$location', function($scope, $location) {
    $scope.msg = 'login';
    $scope.userNamePlaceholder = 'username';
    $scope.passWordPlaceholder = 'password';
    $scope.userName;
    $scope.passWord;
    $scope.logged = false;

    $scope.login = function () {
        if ($scope.userName === $scope.passWord) {
            //$location.path('/');
            $scope.logged = true;
        }

        else {
            $scope.logged = false;
        }
    };
}]);
