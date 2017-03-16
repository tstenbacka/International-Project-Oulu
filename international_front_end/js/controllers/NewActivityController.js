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
    
    $scope.user = {
        username: "TestUser",
        password: "test",
        surname: "Tester",
        lastname: "Testington",
        email: "tester.testington@test.com",
        dayOfBirth: "" + new Date(0),
        profilePicture: "",
        description: "I am a hard coded test",
        homeX: 0,
        homeY: 0,
        searchDistance: 10
    };
    
    $scope.activityInformation = {
        creator: $scope.user,
        dateTime: "" + new Date(0),
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
        {name : 'Running'},
        {name : 'Music'},
        {name : 'Fencing'},
        {name : 'Swimming'},
        {name : 'Cycling'},
        {name : 'Soccer'}
    ];

    $scope.submitActivityForm = function () {
        /* while compiling form , angular creates this object*/
        var data = $scope.activityInformation;
        var url = "http://192.81.223.10:8080/Oulu_Backend/webapi/activities"
        
        $http.defaults.headers.post = 'Bearer kaas';
        
        console.log(data);
        
        /* post to server*/
        $http.post(url, data);
        
        $location.path('/').replace();
    }
}]);