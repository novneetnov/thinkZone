angular.module('thinkZone.controllers')

.controller('PaymentsCtrl', 
	[ '$scope', 'PaymentFactory', '$ionicModal', 
	function($scope, PaymentFactory, $ionicModal) {

	$scope.studentCategory = '';
	$scope.selected = false;

	$scope.showSchoolPayments = function(category) {
		$scope.studentCategory = category;
		$scope.selected = true;
		$scope.paymentDetails = PaymentFactory.getNewTeacherData().paymentDetails;
		if(category === 'pre'){
			$scope.categoryPaymentDetails = $scope.paymentDetails.preSchool;
		}
		else if(category === 'after') {
			$scope.categoryPaymentDetails = $scope.paymentDetails.afterSchool;
		}
	}

	$scope.studentList = PaymentFactory.getNewTeacherData().studentList;
	//PaymentFactory.getStudents()
	//.then(
		//function(response) {
			//$scope.students = response.data;
		//},
		//function(response) {
			//$scope.message = "Error: " + response.status + " " + response.statusText;
		//}
	//);

	var currentStudent = {};
	$scope.addFeesModal = function(student) {
		$scope.installmentform.show();
		currentStudent = student;
	};

	$ionicModal.fromTemplateUrl('module/payment/installment.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.installmentform = modal;
	});	

	$scope.closeInstallment = function() {
		$scope.installmentform.hide();
	};

	$scope.submitInstallment = function(installment) {
		var newStudentInstalment = {"student": currentStudent, "installment": installment}
		PaymentFactory.updateStudentFees(newStudentInstalment);
		$scope.closeInstallment();
	};

	$scope.showInstallments = function(installmentsArray) {
		console.log(installmentsArray);
	}

}])		
;
