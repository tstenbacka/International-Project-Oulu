app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Welcome! Tervetuloa! Welkom!';
    $scope.subtitle = 'This is a wip site for OAMK and FONTYS international co-operation project.';
    $scope.errormessage = 'You´re not actually supposed to be here, sorry about that!';
}]);

app.controller('CardController', ['$scope', function($scope) {
    $scope.category = 'Running';
    $scope.title = 'Running in the 90s';
    $scope.time = 'Tuesday at 9am';
    $scope.distance = '800m';
}]);