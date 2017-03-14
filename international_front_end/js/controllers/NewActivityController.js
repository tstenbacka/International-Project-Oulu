app.controller('NewActivityController', ['$scope', '$location', '$http', function ($scope, $location, $http) {
    $scope.viewTitle = 'Create a new activity';

    $scope.activityHints = {
        hintCategory: 'Category:',
        hintTitle: 'Title:',
        hintDateTime: 'Date/Time:',
        hintFrequency: 'Frequency:',
        hintPostalCode: 'ZipCode:',
        hintDescription: 'Description:',
        hintDuration: 'Duration of activity:',
        hintParticipantAmount: 'Participants:',
        hintSkillLevel: 'Skill level:'
    };
    /*
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
    */
    $scope.activityInformation = {
        creator: '',
        dateTime: new Date(Date),
        description: '',
        duration: 0,
        frequency: '',
        name: '',
        skilllevel: '',
        subcategory: '',
        tags: ['these', 'are', 'tags'],
        userAmount: 0,
    };

    $scope.skillLevels = [
        'Beginner',
        'Intermediate',
        'Advanced'
    ];

    $scope.frequencies = [
        'Daily',
        'Weekly',
        'Monthly'
    ];

    $scope.categories = [
        'Running',
        'Music',
        'Fencing',
        'Swimming',
        'Cycling'
    ];

    $scope.submitActivityForm = function () {
        /* while compiling form , angular creates this object*/
        var data = $scope.activityInformation;
        /* post to server*/
        console.log(data);
        $http.post("http://192.81.223.10:8080/Oulu_Backend/webapi/activities", data);
        $location.path('/').replace();
    }
}]);