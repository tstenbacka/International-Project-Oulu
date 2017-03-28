app.controller('NewActivityController', ['$scope', '$location', '$http', function ($scope, $location, $http) {
    $scope.viewTitle = 'Create Activity';

    $scope.activityHints = {
        hintCategory: 'Category',
        hintTitle: 'Name',
        hintDateTime: 'Time',
        hintFrequency: 'Frequency',
        hintPostalCode: 'Location',
        hintDescription: 'Description',
        hintDuration: 'Duration of activity',
        hintParticipantAmount: 'Participants',
        hintSkillLevel: 'Skill level',
        
        hintTitlePlaceholder: 'Running in the 90s',
        hintDescriptionPlaceholder: 'Let’s get active this year! Join us every monday jogging throught Ainolan park to the end of Oulu river. Beginners welcome :)'
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
        dayOfBirth: '1990-02-13T00:00:00Z',
        description: 'oke',
        email: 'pietje@bell.nl',
        firstname: 'Pietje',
        friends: [],
        homeLat: 432.0,
        homeLong: 234.0,
        id: 2,
        lastname: 'Bell',
        profilePicture: 'pietje.png',
        searchDistance: 10,
        username: 'pietjuh'
    };
    
    $scope.activityInformation = {
        creator: $scope.user,
        dateTime: '2017-03-20T00:00:00Z',
        description: '',
        duration: 0,
        frequency: '',
        id: 0,
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
         name : 'Running',
         ratings: [],
         type: "Models.Subcategory"
        },
        {id: 2,
         name : 'Swimming',
         ratings: [],
         type: "Models.Subcategory"
        },
        {id: 3,
         name : 'Tennis',
         ratings: [],
         type: "Models.Subcategory"
        },
        {id: 4,
         name : 'Fencing',
         ratings: [],
         type: "Models.Subcategory"
        },
        {id: 5,
         name : 'Cycling',
         ratings: [],
         type: "Models.Subcategory"
        },
        {id: 6,
         name : 'Soccer',
         ratings: [],
         type: "Models.Subcategory"
        }
    ];

    $scope.submitActivityForm = function () {
        /* while compiling form , angular creates this object*/
        var data = $scope.activityInformation;
        var url = "http://192.81.223.10:8080/Oulu_Backend/webapi/activities"
        console.log(data);
        
        $http.defaults.headers.post = 'Bearer kaas';
        
        
        /* post to server*/
        //$http.post(url, data);
        
        
        $http.post(url, data)
        .then(
            function(response){
                // success callback
                console.log("SUCCESS");
                console.log(response);
                
            },
            function(response){
                // failure callback
                console.log("FAILURE");
                console.log(response);
            }
        );
        
        $location.path('/').replace();
    }
}]);