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
	$scope.check = false;

	$scope.forwardStart = function (){
		if ($scope.name != null && $scope.age != null && $scope.password != null){
			$scope.check = true;
		}
		else {
			$scope.check = false;
		}
	}; 	
	
}]);
