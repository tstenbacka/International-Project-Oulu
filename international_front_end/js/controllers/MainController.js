app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Welcome! Tervetuloa! Welkom!';
    $scope.subtitle = 'This is a wip site for OAMK and FONTYS international co-operation project.';
    $scope.errormessage = 'You´re not actually supposed to be here, sorry about that!';
}]);

app.controller('CardController', ['$scope', function($scope) {

    $scope.runnning = {
        category : 'Running';
        title : 'Running in the 90s';
        time : 'Tuesday at 9am';
        distance : '800m';
    };
    
}]);