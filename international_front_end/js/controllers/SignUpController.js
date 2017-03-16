app.controller('SignUpController', ['$scope','$http','$location' ,'$window', function($scope,$http ,$location, $window) {
                          
    



	$scope.SignUpHolders = {
        usernameHolder: 'Username',
		surnameHolder: 'Surname',
		lastnameHolder: 'Lastname',
		ageHolder:'Age',
		passwordHolder:'Password',
		postalCodeHoler:'Postal code',
		emailHolder:'example@example.com'
	};
	
	$scope.signInformation = {
		username:'',
		password:'',
		surname:'',
        lastname:'',
        email:'',
		dayOfBirth: new Date(Date),
        profilePicture:'',
        homeX:'',
        homeY:'',
        searchDistance:''
	};

	$scope.checkStart  = true;
	$scope.checkPostal = false;
    $scope.checkEmail = false;
    $scope.checkDone = false;

	$scope.forwardStart = function (){
		$scope.checkStart = false;
        $scope.checkPostal = true;
	};

	$scope.forwardPostal = function (){	
        $scope.checkPostal = false;
        $scope.checkEmail = true;
	};
	$scope.backwardsPostal = function (){
        $scope.checkStart = true;
        $scope.checkPostal = false;
	};
    
    $scope.backwardEmail = function (){
        $scope.checkPostal = true;
        $scope.checkEmail = false;
	};
    
    $scope.forwardEmail = function (){	
        $scope.checkDone = true;
        $scope.checkEmail = false;

	};
    $scope.letsRoll = function (){
        /* while compiling form , angular created this object*/
        var data = $scope.signInformation
        /* post to server*/
        console.log(data);
        $http.post("http://192.81.223.10:8080/Oulu_Backend/webapi/users", data);
         $location.path('/').replace();
    };

}]);
