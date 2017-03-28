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
    
        var userObject = JSON.parse(document.cookie);

    $scope.user = {
        dayOfBirth: userObject.dayOfBirth,
        description: 'oke',
        email: userObject.email,
        firstname: userObject.firstname,
        friends: [],
        homeLat: userObject.homeLat,
        homeLong: userObject.homeLong,
        id: userObject.id,
        lastname: userObject.lastname,
        profilePicture: userObject.profilePicture,
        searchDistance: userObject.searchDistance,
        username: userObject.username
    };
    
    $scope.activityInformation = {
        creator: $scope.user,
        dateTime: '2017-03-20T00:00:00Z',
        description: '',
        duration: 0,
        frequency: '',
        name: '',
        participants:[],
        skilllevel: '',
        subcategory: '',
        tags: [],
        userAmount: 0,
        locationX: '',
        locationY: ''
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
        {id: 1,
         name : 'soccer',
         ratings: [],
         type: "Models.Subcategory"
        },
        {id: 2,
         name : 'cricket',
         ratings: [],
         type: "Models.Subcategory"
        },
        {id: 3,
         name : 'basketball',
         ratings: [],
         type: "Models.Subcategory"
        },
        {id: 4,
         name : 'Lan party',
         ratings: [],
         type: "Models.Subcategory"
        },
        {id: 5,
         name : 'Online gaming',
         ratings: [],
         type: "Models.Subcategory"
        },
        {id: 6,
         name : 'concert',
         ratings: [],
         type: "Models.Subcategory"
        }
    ];

    $scope.submitActivityForm = function () {
        /* while compiling form , angular creates this object*/
        var data = $scope.activityInformation;
        var url = "http://192.81.223.10:8080/Oulu_Backend/webapi/activities"
        //console.log(data);
        
        var userObject = JSON.parse(document.cookie);
       // var y = 'Bearer ' + userObject.token;
        //console.log(y);
        $http.defaults.headers.post.Authorization = 'Bearer ' + userObject.token;
        
        
        
        $http.post(url, data)
        .then(
            function(response){
                // success callback
                console.log("SUCCESS");
                //console.log(response);
                
            },
            function(response){
                // failure callback
                console.log("FAILURE");
                //console.log(response);
            }
        );
        
        $location.path('/').replace();
    }
}]);