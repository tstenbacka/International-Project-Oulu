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
    
    function GetLocation() {
        var geocoder = new google.maps.Geocoder();              
        var address =  document.getElementById("ActivityLocation").value;       
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var lati = results[0].geometry.location.lat();
                var longi = results[0].geometry.location.lng();
                //alert("Latitude: " + lati + "\nLongitude: " + longi );
                $scope.activityInformation.locationX   = lati;
                 $scope.activityInformation.locationY = longi;
                } 
            else {
                alert("Request failed.");
                }
            });
        };    
    
    
}]);