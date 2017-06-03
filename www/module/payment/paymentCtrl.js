angular.module('thinkZone.controllers')

.controller('PaymentsCtrl', 
	[ '$scope', 'paymentFactory', '$ionicPopup', 
	function($scope, paymentFactory, $ionicPopup) {

	$scope.studentCategory = '';
	$scope.selected = false;

	$scope.showPreSchoolPayments = function() {
		$scope.studentCategory = 'pre';
		$scope.selected = true;
	}

	$scope.showAfterSchoolPayments = function() {
		$scope.studentCategory = 'after';
		$scope.selected = true;
	}

	//$scope.students = paymentFactory.getStudents();
	paymentFactory.getStudents()
	.then(
		function(response) {
			$scope.students = response.data;
		},
		function(response) {
			$scope.message = "Error: " + response.status + " " + response.statusText;
		}
	);

	$scope.data = {};
	$scope.addFees = function(student) {
		// popup show here 
		var addFeesPopup = $ionicPopup.show({
			scope: $scope,
			title: 'Add Fees for ' + student.name,
			template: '<input type="number" ng-model="data.fees" min="0" active></input>',
			buttons: [
				{ text: 'Cancel' },
				{
					text: 'Add Fees',
					type: 'button-positive',
					onTap: function(e) {
						if (!$scope.data.fees) {
            //don't allow the user to close unless he enters a valid fees
            	e.preventDefault();
						} else {
							return $scope.data.fees;
						}
					}
				}
			]
		});

		addFeesPopup.then(function(res) {
			if(res) {
				console.log($scope.data.fees);
				paymentFactory.updateFeesPaid(student, res);
			} else {
				console.log('You are not sure');
			}		
		});
	}
}])
;
