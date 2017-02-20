app.controller('CardController', ['$scope', function($scope) {

    $scope.activities = [
        {
            category : 'Running',
            title : 'Running in the 90s',
            time : 'Tuesday at 9am',
            distance : '800m'
        },

        {
            category : 'Jamming',
            title : 'Jamming in the 90s',
            time : 'Thursday at 9am',
            distance : '800m'
        }                    
    ];
    
}]);
