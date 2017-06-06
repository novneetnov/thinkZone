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

	var createInstallmentForm =  function() {
		$ionicModal.fromTemplateUrl('module/payment/installment-form.html', {
			scope: $scope
		}).then(function(modal) {
			$scope.installmentForm = modal;
		});
  };

	createInstallmentForm();

	$scope.addFeesModal = function(student) {
		$scope.installmentForm.show();
		currentStudent = student;
	};

	$scope.closeInstallmentForm = function() {
		$scope.installmentForm.hide();
	};

	$scope.submitInstallmentForm = function(installment) {
		var today = new Date();
		var date = today.getDate().toString().length < 2 ? '0' + today.getDate() : today.getDate();
		var month = (today.getMonth()+1).toString().length < 2 ? '0' + (today.getMonth()+1) : (today.getMonth()+1);
		installment.paymentDate = date+'-'+month+'-'+today.getFullYear()
		installment.amountPaid = installment.amountPaid + "";
		var newStudentInstalment = {"student": currentStudent, "installment": installment}
		PaymentFactory.updateStudentFees(newStudentInstalment);
		$scope.installmentForm.remove();
		createInstallmentForm();
	};

	// Create the Installment Details Modal
	$ionicModal.fromTemplateUrl('module/payment/installments-details.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.installmentsDetails = modal;
	});

	$scope.showInstallmentsDetails = function(student, installmentsArray) {
		console.log(installmentsArray);
		$scope.student = student;
		$scope.installmentsArray = installmentsArray;
		$scope.installmentsDetails.show();
	}

	$scope.closeInstallmentsDetails = function() {
		$scope.installmentsDetails.hide();
	};

}])		
;
