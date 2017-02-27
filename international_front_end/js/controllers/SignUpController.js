app.controller('SignUpController', ['$scope', function($scope) {
    $scope.msg = 'sign up';
	$scope.nameHolder = 'Name';
	$scope.ageHolder = 'Age';
	$scope.passwordHolder = 'Password';
	$scope.postalCodeHoler = 'PostalCode';
	$scope.emailHolder = 'example@example.com';

	$scope.name;
	$scope.age;
	$scope.password;
	$scope.postalCode;
	$scope.email;
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
        
    };

}]);
