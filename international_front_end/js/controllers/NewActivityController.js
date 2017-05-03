app.controller('NewActivityController', ['$scope', '$location', '$http', '$window', function ($scope, $location, $http, $window) {
    $scope.viewTitle = 'Create Activity';
    
    $scope.loadDatePicker = function () {

        $('#datepicker1').datepicker({
            
            dateFormat: 'yy-mm-dd',
            onSelect: function (dateText, inst) {
                var dateAsString = dateText; //the first parameter of this function
                var dateAsObject = $(this).datepicker('getDate'); //the getDate method

                $scope.dateTimeHolder.date = '' + dateAsString;
                console.log("" + $scope.dateTimeHolder.date)
            }
        });
    }

    $scope.loadTimePicker = function () {   }
    
    $('#timepicker').timepicker({
        scrollDefault: 'now',
        timeFormat: 'H:i',            
    });

    $('#timepicker').on('changeTime', function () {
        // Load user timezone offset
        var offset = new Date().getTimezoneOffset()/60;
        
        console.log(offset);
        
        // Get the picked datetime
        var time = $(this).val();
        var timesplit = time.split(":");
        
        // Parse hours into an int form and add/remove GMT offset        
        var finalHour = parseInt(timesplit[0]) + offset;
        
        // Check that the datetime is not under or above 0 and 24
        if (finalHour < 0){
            
            finalHour = 24 + finalHour;
        } else if (finalHour > 24) {
            
            finalHour = finalHour - 24;
        }
        
        $scope.timeHolder = "" + finalHour + ":" + timesplit[1];
        $scope.dateTimeHolder.time = "" + time;

        console.log("Time chosen: " + $scope.dateTimeHolder.time);
        console.log("Time sent to back: " + $scope.timeHolder);
    });

    $scope.dateTimeHolder = {
        date: '',
        time: ''
    };
    
    $scope.timeHolder = '';

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
        hintLocation: 'Activity location',
        hintCountry: 'Country',


        hintTitlePlaceholder: 'Running in the 90s',
        hintDescriptionPlaceholder: 'Let’s get active this year! Join us every monday jogging throught Ainolan park to the end of Oulu river. Beginners welcome :)',
        hintLocationPlaceholder: 'Address or location',
        hintCountryPlaceholder: 'Country'

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
        dateTime: '',
        description: '',
        distanceToPerson: 0,
        duration: 0,
        frequency: '',
        locationX: '',
        locationY: '',
        name: '',
        participants: [],
        skilllevel: '',
        subcategory: '',
        tags: [],
        userAmount: 0,

    };

    $scope.skillLevels = [
        'Beginner',
        'Intermediate',
        'Advanced'
    ];

    $scope.frequencies = [
        'Only once',
        'Daily',
        'Weekly',
        'Monthly'
    ];
/*
    $scope.categories = [
        {
            id: 1,
            name: 'soccer',
            ratings: [],
            type: "Models.Subcategory"
        },
        {
            id: 2,
            name: 'cricket',
            ratings: [],
            type: "Models.Subcategory"
        },
        {
            id: 3,
            name: 'basketball',
            ratings: [],
            type: "Models.Subcategory"
        },
        {
            id: 4,
            name: 'Lan party',
            ratings: [],
            type: "Models.Subcategory"
        },
        {
            id: 5,
            name: 'Online gaming',
            ratings: [],
            type: "Models.Subcategory"
        },
        {
            id: 6,
            name: 'concert',
            ratings: [],
            type: "Models.Subcategory"
        }
    ];
*/
    
 
	$scope.categories = [
        {
            name: 'Sports',
            items: [
                {
                    id: 1,
                    name: 'Aerobics',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 2,
                    name: 'American football',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 3,
                    name: 'Badminton',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 4,
                    name: 'Baseball',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 5,
                    name: 'Basketball',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 6,
                    name: 'Circuit training',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 7,
                    name: 'Climbing',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 8,
                    name: 'Cricket',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 9,
                    name: 'Cycling',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 10,
                    name: 'Dancing',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 11,
                    name: 'Fencing',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 12,
                    name: 'Floorball',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 13,
                    name: 'Golfing',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 14,
                    name: 'Handball',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 15,
                    name: 'Hiking',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 16,
                    name: 'Hockey',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 17,
                    name: 'Ice Skating',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 18,
                    name: 'Kayaking',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 19,
                    name: 'Kite Surfing',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 20,
                    name: 'Martial Arts',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 21,
                    name: 'Pilates',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 22,
                    name: 'Polo',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 23,
                    name: 'Riding',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 24,
                    name: 'Roller skating',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 25,
                    name: 'Running',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 26,
                    name: 'Scuba diving',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 27,
                    name: 'Skateboarding',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 28,
                    name: 'Skiing',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 29,
                    name: 'Snowboarding',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 30,
                    name: 'Squash',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 31,
                    name: 'Surfing',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 32,
                    name: 'Swimming',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 33,
                    name: 'Table tennis',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 34,
                    name: 'Tennis',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 35,
                    name: 'Volleyball',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 36,
                    name: 'Windsurfing',
                    ratings: [],
                    type: "Models.Subcategory"
                    }
                ]
            },
        {
            name: 'Health & Wellbeing',
            items: [
                {
                    id: 1,
                    name: 'Yoga',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 2,
                    name: 'Massage',
                    ratings: [],
                    type: "Models.Subcategory"
                    }
                ]

            },
        {
            name: 'Entertainment',
            items: [
                {
                    id: 1,
                    name: 'Movie',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 2,
                    name: 'Theater',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 3,
                    name: 'Concert',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 4,
                    name: 'E-sport',
                    ratings: [],
                    type: "Models.Subcategory"
                    }
                ]

            },
        {
            name: 'Gaming',
            items: [
                {
                    id: 1,
                    name: 'Board Games',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 2,
                    name: 'Video Games',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 3,
                    name: 'Card Games',
                    ratings: [],
                    type: "Models.Subcategory"
                    }
                ]

            },
        {
            name: 'Music',
            items: [
                {
                    id: 1,
                    name: 'Guitar',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 2,
                    name: 'Piano',
                    ratings: [],
                    type: "Models.Subcategory"
                    },
                {
                    id: 3,
                    name: 'Violin',
                    ratings: [],
                    type: "Models.Subcategory"
                    }
                    ,
                {
                    id: 4,
                    name: 'Singing',
                    ratings: [],
                    type: "Models.Subcategory"
                    }
                    ,
                {
                    id: 5,
                    name: 'Drums',
                    ratings: [],
                    type: "Models.Subcategory"
                    }
                    ,
                {
                    id: 6,
                    name: 'Trumpet',
                    ratings: [],
                    type: "Models.Subcategory"
                    }
                ]

            },
        {
            name: 'Traveling',
            items: [
                {
                    id: 1,
                    name: 'Sightseeing',
                    ratings: [],
                    type: "Models.Subcategory"
                    }
                ]
            },
        {
            name: 'Other',
            items: [
                {
                    id: 1,
                    name: 'Other',
                    ratings: [],
                    type: "Models.Subcategory"
                    }
                ]
            }
        ];




    $scope.submitActivityForm = function () {
        /* while compiling form , angular creates this object*/

        var geocoder = new google.maps.Geocoder();
        var actLocation = document.getElementById("ActivityLocation").value;
        var contry = document.getElementById("actcountry").value;
        var address = actLocation + " " + contry;


        // DATETIME PARSING
        var DT = '' + $scope.dateTimeHolder.date + 'T' + $scope.timeHolder + ':00Z';
        DT = DT.replace(/\s+/g, '');

        $scope.activityInformation.dateTime = DT;

        console.log('' + $scope.activityInformation.dateTime);

        geocoder.geocode({
            'address': address
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var lati = results[0].geometry.location.lat();
                var longi = results[0].geometry.location.lng();
                $scope.activityInformation.locationX = lati;
                $scope.activityInformation.locationY = longi;
                //alert("Latitude: " + lati + "\nLongitude: " + longi );


                var data = $scope.activityInformation;
                var url = "http://192.81.223.10:8080/Oulu_Backend/webapi/activities"
                console.log(JSON.stringify(data));
                var userObject = JSON.parse(document.cookie);
                // var y = 'Bearer ' + userObject.token;
                //console.log(y);
                $http.defaults.headers.post.Authorization = 'Bearer ' + userObject.token;

                $http.post(url, data)
                    .then(
                        function (response) {
                            // success callback
                            console.log("SUCCESS");
                            //console.log(response);

                        },
                        function (response) {
                            // failure callback
                            console.log("FAILURE");
                            //console.log(response);
                        }
                    );

                $location.path('/').replace();
            } else {
                alert("Request failed.");
            }
        });
        /* var data = $scope.activityInformation;    
         var url = "http://192.81.223.10:8080/Oulu_Backend/webapi/activities"
         console.log(JSON.stringify(data));
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

         $location.path('/').replace();*/
    }
}]);
