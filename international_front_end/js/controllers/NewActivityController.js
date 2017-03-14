app.controller('NewActivityController', ['$scope', '$location', function ($scope, $location) {
    $scope.viewTitle = 'Create activity';

    $scope.activityHints = {
        hintCategory: 'Category:',
        hintTitle: 'Title:',
        hintDateTime: 'Date/Time:',
        hintLocation: 'Location:',
        hintPostalCode: 'ZipCode:',
        hintDescription: 'Description:',
        hintParticipantAmount: 'Participants:',
        hintSkillLevel: 'Skill level:'
    };

    $scope.activityInformation = {
        activityId: 0,
        activityCategory: '',
        activityTitle: '',
        activityDateTime: new Date(Date),
        activityLocation: '',
        activityPostalCode: '',
        activityDescription: '',
        activityParticipantAmount: 0,
        activitySkillLevel: ''
    };

    $scope.skillLevels = [
        {
            id: '00',
            title: 'Beginner'
        },
        {
            id: '01',
            title: 'Intermediate'
        },
        {
            id: '02',
            title: 'Advanced'
        }
    ];
    
    $scope.categories = [
        {
            id: '00',
            title: 'Running'
        },
        {
            id: '01',
            title: 'Music'
        },
        {
            id: '02',
            title: 'Fencing'
        },
        {
            id: '03',
            title: 'Swimming'
        },
        {
            id: '04',
            title: 'Cycling'
        }
    ];

    $scope.submitActivityForm = function () {
        /* while compiling form , angular created this object*/
        var data = $scope.activityInformation;
        /* post to server*/
        console.log(data);
        // $http.post("https://jsonplaceholder.typicode.com/posts/", data);
        $location.path('/').replace();
    }

}]);