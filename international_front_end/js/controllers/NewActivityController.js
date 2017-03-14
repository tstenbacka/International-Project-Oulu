app.controller('NewActivityController', ['$scope', '$location', '$http', function ($scope, $location, $http) {
    $scope.viewTitle = 'Create a new activity';

    $scope.activityHints = {
        hintCategory: 'Category:',
        hintTitle: 'Title:',
        hintDateTime: 'Date/Time:',
        hintFrequency: 'Frequency:',
        hintPostalCode: 'ZipCode:',
        hintDescription: 'Description:',
        hintParticipantAmount: 'Participants:',
        hintSkillLevel: 'Skill level:'
    };

    $scope.activityInformation = {
        activityCategory: '',
        activityTitle: '',
        activityDateTime: new Date(Date),
        activityLocation: '',
        activityPostalCode: '',
        activityDescription: '',
        activityParticipantAmount: 0,
        activitySkillLevel: ''
    };

    $scope.activityInformation = {
        creator: '',
        dateTime: new Date(Date),
        description: '',
        duration: 0,
        frequency: '',
        name: '',
        skilllevel: 0,
        subcategory: 0,
        tags: ['', '', ''],
        userAmount: 0,
    };

    $scope.skillLevels = [
        {
            id: 'beginner',
            name: 'Beginner'
        },
        {
            id: 'intermediate',
            name: 'Intermediate'
        },
        {
            id: 'advanced',
            name: 'Advanced'
        }
    ];

    $scope.frequencies = [
        {
            id: 'daily',
            name: 'Daily'
        },
        {
            id: 'weekly',
            name: 'Weekly'
        },
        {
            id: 'monthly',
            name: 'Monthly'
        }
    ];

    $scope.categories = [
        {
            id: 'running',
            name: 'Running'
        },
        {
            id: 'music',
            name: 'Music'
        },
        {
            id: 'fencing',
            name: 'Fencing'
        },
        {
            id: 'swimming',
            name: 'Swimming'
        },
        {
            id: 'cycling',
            name: 'Cycling'
        }
    ];

    $scope.submitActivityForm = function () {
        /* while compiling form , angular creates this object*/
        var data = $scope.activityInformation;
        /* post to server*/
        console.log(data);

        //$http.post("http://192.81.223.10:8080/Oulu_Backend/webapi/activities", data);

        $location.path('/').replace();
    }

}]);