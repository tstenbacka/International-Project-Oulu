app.controller('SignUpController', ['$scope','$http','$location' ,'$window', function($scope,$http ,$location, $window) {
    
    $scope.loadDatePicker = function () {
        $('#datepicker').datepicker({
            changeMonth: true,
            yearRange: "-80:+0",
            changeYear: true
        });
    }
                          
	$scope.SignUpHolders = {
        usernameHolder: 'Username',
		surnameHolder: 'First name',
		lastnameHolder: 'Last name',
		ageHolder:'date of birth',
		passwordHolder:'Password',
        password2Holder: 'Retype',
		postalCodeHoler:'Postal code',
        contryHolder:'country',
		emailHolder:'example@example.com'
	};
    
	$scope.signInformation = {
		username:"",
		password:"",
		firstname:"",
        lastname:"",
        email:"",
		dayOfBirth: "1997-07-02T00:00:00Z",
        profilePicture:"",
        homeLat: "",
        homeLong: "",
        searchDistance:""
	};


	$scope.checkStart  = true;
	$scope.checkPostal = false;
    $scope.checkEmail = false;
    $scope.checkDone = false;
    $scope.pass2 = "";
    $scope.signupError;
    

	$scope.forwardStart = function (){
        
        // All inputs
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var datePicker = document.getElementById("datepicker").value;
        
        
        var password1 =  document.getElementById("password").value;
        var password2 =  document.getElementById("password2").value;        
        
        if(firstName != "" && lastName != "" && datePicker != "" && password1 == password2){
        $scope.checkStart = false;
        $scope.checkPostal = true;

        }
        else{
            window.alert("Please fill in all the boxes and check your password");
        }
 
	};

	$scope.forwardPostal = function (){
        
        // All inputs
        var postcode = document.getElementById("postcode").value;
        var country = document.getElementById("country").value;
        
        if(postcode != "" && country != "") {
            $scope.checkPostal = false;
            $scope.checkEmail = true;
            
            GetLocation();   
        } else {
            window.alert("Please fill in all the boxes");
        }
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
        
        // All inputs
        var email = document.getElementById("email").value;
        var usename = document.getElementById("username").value;
        
        if(email != "" && usename != "") {
            $scope.checkDone = true;
            $scope.checkEmail = false;
        } else {
            window.alert("Please fill in all the boxes");
        }
        
        

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
            var postalcode =  document.getElementById("postcode").value;
            var contry = document.getElementById("country").value;
            var address = postalcode + " " + contry;
            address.toString();  
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



     
          
                
        