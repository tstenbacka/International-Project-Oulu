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
        
        console.log(data);
        //console.log(JSON.stringify(data));
        
        $http.defaults.headers.post = 'kaas';
    
        /* post to server*/
        if (angular.isObject(data)) {
            console.log("DATA IS AN OBJECT");
            $http.post("http://192.81.223.10:8080/Oulu_Backend/webapi/activities", data);
            
        } else {
            console.log("DATA IS NOT AN OBJECT");
        }
        
        $location.path('/').replace();
    }
}]);