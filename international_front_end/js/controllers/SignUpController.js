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
	$scope.check1  = true;
	$scope.check2 = false;
    $scope.checkEmail = false;
    $scope.checkDone = false;

	$scope.forwardStart = function (){
		$scope.check1 = false;
        $scope.check2 = true;
	};

	$scope.forwardPostal = function (){	
        $scope.check2 = false;
        $scope.checkEmail = true;

	};
	$scope.backwardsPostal = function (){
        $scope.check1 = true;
        $scope.check2 = false;
	};
    
    $scope.backwardEmail = function (){
        $scope.check2 = true;
        $scope.checkEmail = false;
	};
    
    $scope.forwardEmail = function (){	
        $scope.checkDone = true;
        $scope.checkEmail = false;

	};
    $scope.letsRoll = function (){
        
    };

}]);
