app.controller('SignUpController', ['$scope','$http','$location' ,'$window', function($scope,$http ,$location, $window) {
                          
	$scope.SignUpHolders = {
        usernameHolder: 'Username',
		surnameHolder: 'First name',
		lastnameHolder: 'Last name',
		ageHolder:"1.5.1996",
		passwordHolder:'Password',
		postalCodeHoler:'Postal code',
		emailHolder:'example@example.com'
	};
	$scope.signInformation = {
		username:"",
		password:"",
		firsname:"",
        lastname:"",
        email:"",
		dayOfBirth: "",
        profilePicture:"",
        homeLat: "",
        homeLong: "",
        searchDistance:""
	};


	$scope.checkStart  = true;
	$scope.checkPostal = false;
    $scope.checkEmail = false;
    $scope.checkDone = false;
    $scope.pass2;

	$scope.forwardStart = function (){
		$scope.checkStart = false;
        $scope.checkPostal = true;
	};

	$scope.forwardPostal = function (){	
        $scope.checkPostal = false;
        $scope.checkEmail = true;
           /* window.navigator.geolocation.getCurrentPosition(function(pos){
            console.log(pos);
            });*/     
        GetLocation();       
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
        var data = $scope.signInformation;
        /* post to server*/
        console.log(JSON.stringify(data));
        
        
        $http.post("http://192.81.223.10:8080/Oulu_Backend/webapi/users", data);
        $location.path('/').replace();
    };
        function GetLocation() {
            var geocoder = new google.maps.Geocoder();              
            var address =  document.getElementById("postcode").value;       
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var lati = results[0].geometry.location.lat();
                    var longi = results[0].geometry.location.lng();
                    //alert("Latitude: " + lati + "\nLongitude: " + longi );
                    $scope.signInformation.homeLat = lati;
                    $scope.signInformation.homeLong = longi;
                } else {
                    alert("Request failed.");
                }
            });
        };
    
    
}]);



     
          
                
        