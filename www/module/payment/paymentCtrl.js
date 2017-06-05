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

	$ionicModal.fromTemplateUrl('module/payment/installment-form.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.installmentform = modal;
	});	

	var createModal =  function() {
		$ionicModal.fromTemplateUrl('module/payment/installment-form.html', {
			scope: $scope
		}).then(function(modal) {
			$scope.installmentform = modal;
		});
  };

	var currentStudent = {};
	$scope.addFeesModal = function(student) {
		$scope.installmentform.show();
		currentStudent = student;
	};

	$scope.closeInstallment = function() {
		$scope.installmentform.hide();
	};

	$scope.submitInstallment = function(installment) {
		var today = new Date();
		var date = today.getDate().toString().length < 2 ? '0' + today.getDate() : today.getDate();
		var month = (today.getMonth()+1).toString().length < 2 ? '0' + (today.getMonth()+1) : (today.getMonth()+1);
		installment.date = date+'-'+month+'-'+today.getFullYear()
		installment.amount = installment.amount + "";
		var newStudentInstalment = {"student": currentStudent, "installment": installment}
		PaymentFactory.updateStudentFees(newStudentInstalment);
		$scope.installmentform.remove();
		createModal();
	};

	$scope.showInstallments = function(installmentsArray) {
		console.log(installmentsArray);
	}

}])		
;
