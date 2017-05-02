app.controller('CardController', ['$scope','$http','sharedProperties','$timeout',function($scope, $http, sharedProperties,$timeout) {
    
   
 
    $scope.searchword = sharedProperties.getProperty();
 

   
    
    $scope.pageInfo = 'Choose a card';  
    $http.get('http://192.81.223.10:8080/Oulu_Backend/webapi/activities').then(function(response) {
        $scope.activities = response.data;
        console.log(response.data);
    }, function(response){
        $scope.activities = "Something went wrong";
    });

    
   /* $scope.activities = [
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
        },  
        
        {
            category : 'Boardgame',
            title : '72 hour DnD marathon',
            time : 'Friday at 5am',
            distance : '200m'
        }, 
        
        {
            category : 'Soccer',
            title : 'Sum futbol',
            time : 'Saturday at 2pm',
            distance : '1400m'
        },
        
        {
            category : 'TV',
            title : 'Binge wathcing whole The Bold and the Beautiful',
            time : 'Sunday at 4pm',
            distance : '1400m'
        }, 
        
        {
            category : 'Yoga',
            title : 'i wantto play some hokcey',
            time : 'Monday at 1am',
            distance : '1400m'
        },
        
        {
            category : 'Concert',
            title : 'I got 3 free tickets to concert',
            time : 'Friday at 8pm',
            distance : '1400m'
        }   
    ];*/
    
    
}]);
