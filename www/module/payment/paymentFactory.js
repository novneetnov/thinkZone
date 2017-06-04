angular.module('thinkZone.services')
.factory('PaymentFactory', [ '$http' ,'apiURL', function($http, apiURL) {
	var payFac = {}
	
  //holds teacher credentials after successful login 
  var loginData = {};
  //holds logged in teacher's current data, which includes student details, education program and payment details
  var currentTeacherData = {};
  //holds logged in teacher's new data, which includes all teacher data which is created when app is offline
  var newTeacherData = {};

	payFac.setCurrentTeacherData = function(){
		loginData.userId = "5914b9171698ab2407085416";
		currentTeacherData.preSchool = {};
		currentTeacherData.afterSchool = {};
		currentTeacherData.paymentDetails = {"preSchool":[],"afterSchool":[]};
		// classCategory --> Early Childhood & Primary; //
		// level --> level of each student
		currentTeacherData.studentList = [
			{"studentId":"1","studentName":"Student One","fatherName":"Father One","motherName":"Mother One",
				  "centerName":"Center One","studentAddress":"Address One","classCategory":"pre","level":"1"},
			{"studentId":"2","studentName":"Student Two","fatherName":"Father Two","motherName":"Mother Two",
					"centerName":"Center Two","studentAddress":"Address Two","classCategory":"after","level":"2"},
			{"studentId":"3","studentName":"Student Three","fatherName":"Father Three","motherName":"Mother Three",
					"centerName":"Center Three","studentAddress":"Address Three","classCategory":"pre","level":"3"},
			{"studentId":"4","studentName":"Student Four","fatherName":"Father Four","motherName":"Mother Four",
					"centerName":"Center Four","studentAddress":"Address Four","classCategory":"after","level":"4"},
			{"studentId":"5","studentName":"Student Five","fatherName":"Father Five","motherName":"Mother Five",
					"centerName":"Center Five","studentAddress":"Address Five","classCategory":"pre","level":"5"},
			{"studentId":"6","studentName":"Student Six","fatherName":"Father Six","motherName":"Mother Six",
					"centerName":"Center Six","studentAddress":"Address Six","classCategory":"after","level":"6"},
			{"studentId":"7","studentName":"Student Seven","fatherName":"Father Seven","motherName":"Mother Seven",
					"centerName":"Center Seven","studentAddress":"Address Seven","classCategory":"pre","level":"7"},
			{"studentId":"8","studentName":"Student Eight","fatherName":"Father Eight","motherName":"Mother Eight",
					"centerName":"Center Eight","studentAddress":"Address Eight","classCategory":"after","level":"8"},
			{"studentId":"9","studentName":"Student Nine","fatherName":"Father Nine","motherName":"Mother Nine",
					"centerName":"Center Nine","studentAddress":"Address Nine","classCategory":"pre","level":"9"},
			{"studentId":"10","studentName":"Student Ten","fatherName":"Father Ten","motherName":"Mother Ten",
					"centerName":"Center Ten","studentAddress":"Address Ten","classCategory":"after","level":"10"}
		];
		currentTeacherData.preSchool.currentPhase = {"activities":"","attendance":"","assessment":"","startDate":"","endDate":""};
		currentTeacherData.preSchool.pastPhase = [{"activities":"","attendance":"","assessment":"","startDate":"","endDate":""}];
		currentTeacherData.preSchool.futurePhase = [{"activities":"","attendance":"","assessment":"","startDate":"","endDate":""}];
		currentTeacherData.afterSchool.currentPhase = {"activities":"","attendance":"","assessment":"","startDate":"","endDate":""};
		currentTeacherData.afterSchool.pastPhase = [{"activities":"","attendance":"","assessment":"","startDate":"","endDate":""}];
		currentTeacherData.afterSchool.futurePhase = [{"activities":"","attendance":"","assessment":"","startDate":"","endDate":""}];
		//attendance
		//currentPhase has all activities, so all activities for this phase. data structure is array
		//index 0 is day 1 for this phase. each index will have attendance for all students in this phase
		currentTeacherData.preSchool.currentPhase.attendance = {studentDetails:[],"holidayDetails":[]};
		currentTeacherData.preSchool.currentPhase.attendance.studentDetails = [{"studentId":"","studentName":"","isPresent":true}];
		currentTeacherData.preSchool.currentPhase.attendance.holidayDetails = [{"isHoliday":false,"comments":""}];
		currentTeacherData.preSchool.pastPhase.attendance = {studentDetails:[],"holidayDetails":[]};
		currentTeacherData.preSchool.pastPhase.attendance.studentDetails = [{"studentId":"","studentName":"","isPresent":true}];
		currentTeacherData.preSchool.pastPhase.attendance.holidayDetails = [{"isHoliday":false,"comments":""}];
		//payment details
		//this will be categorised into pre and after school
		currentTeacherData.paymentDetails.preSchool = [
			{
				"studentId":"1","studentName":"Student One","level":"1",
				"feeInstalments":[
					{"amountPaid":"100","paymentDate":"01-01-2017","comments":"First Installment"},
					{"amountPaid":"150","paymentDate":"15-02-2017","comments":"Second Installment"},
					{"amountPaid":"75","paymentDate":"23-03-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"325"
			},
			{
				"studentId":"3","studentName":"Student Three","level":"3",
				"feeInstalments":[
					{"amountPaid":"50","paymentDate":"01-04-2017","comments":"First Installment"},
					{"amountPaid":"50","paymentDate":"15-05-2017","comments":"Second Installment"},
					{"amountPaid":"100","paymentDate":"02-06-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"200"
			},
			{
				"studentId":"5","studentName":"Student Five","level":"5",
				"feeInstalments":[
					{"amountPaid":"50","paymentDate":"01-04-2017","comments":"First Installment"},
					{"amountPaid":"50","paymentDate":"15-05-2017","comments":"Second Installment"},
					{"amountPaid":"100","paymentDate":"02-06-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"200"
			},
			{
				"studentId":"7","studentName":"Student Seven","level":"7",
				"feeInstalments":[
					{"amountPaid":"50","paymentDate":"01-04-2017","comments":"First Installment"},
					{"amountPaid":"50","paymentDate":"15-05-2017","comments":"Second Installment"},
					{"amountPaid":"100","paymentDate":"02-06-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"200"
			},
			{
				"studentId":"9","studentName":"Student Nine","level":"9",
				"feeInstalments":[
					{"amountPaid":"50","paymentDate":"01-04-2017","comments":"First Installment"},
					{"amountPaid":"50","paymentDate":"15-05-2017","comments":"Second Installment"},
					{"amountPaid":"100","paymentDate":"02-06-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"200"
			}
		];
		currentTeacherData.paymentDetails.afterSchool = [
			{
				"studentId":"2","studentName":"Student Two","level":"2",
				"feeInstalments":[
					{"amountPaid":"50","paymentDate":"01-04-2017","comments":"First Installment"},
					{"amountPaid":"50","paymentDate":"15-05-2017","comments":"Second Installment"},
					{"amountPaid":"100","paymentDate":"02-06-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"200"
			},
			{
				"studentId":"4","studentName":"Student Four","level":"4",
				"feeInstalments":[
					{"amountPaid":"50","paymentDate":"01-04-2017","comments":"First Installment"},
					{"amountPaid":"50","paymentDate":"15-05-2017","comments":"Second Installment"},
					{"amountPaid":"100","paymentDate":"02-06-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"200"
			},
			{
				"studentId":"6","studentName":"Student Six","level":"6",
				"feeInstalments":[
					{"amountPaid":"50","paymentDate":"01-04-2017","comments":"First Installment"},
					{"amountPaid":"50","paymentDate":"15-05-2017","comments":"Second Installment"},
					{"amountPaid":"100","paymentDate":"02-06-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"200"
			},
			{
				"studentId":"8","studentName":"Student Eight","level":"8",
				"feeInstalments":[
					{"amountPaid":"50","paymentDate":"01-04-2017","comments":"First Installment"},
					{"amountPaid":"50","paymentDate":"15-05-2017","comments":"Second Installment"},
					{"amountPaid":"100","paymentDate":"02-06-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"200"
			},
			{
				"studentId":"10","studentName":"Student Ten","level":"10",
				"feeInstalments":[
					{"amountPaid":"50","paymentDate":"01-04-2017","comments":"First Installment"},
					{"amountPaid":"50","paymentDate":"15-05-2017","comments":"Second Installment"},
					{"amountPaid":"100","paymentDate":"02-06-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"200"
			}
		];
		currentTeacherData.paymentDetails.totalFees = {"preSchool":"total fees for preSchool","afterSchool":"total fees for afterSchool"};
	}


	payFac.storedUserData = function(){
		this.setCurrentTeacherData();
		return currentTeacherData;
	}


	payFac.setNewTeacherData = function(){
		//this function will be used to set new data in offline mode. create a JSON for new data so that it can be synced later with our servers when app is online

		newTeacherData.preSchool = {};
		newTeacherData.afterSchool = {};
		newTeacherData.paymentDetails = {"preSchool":[],"afterSchool":[]};
		// classCategory --> Early Childhood & Primary; //
		// level --> level of each student
		newTeacherData.studentList = [
			{"studentId":"1","studentName":"Student One","fatherName":"Father One","motherName":"Mother One",
				  "centerName":"Center One","studentAddress":"Address One","classCategory":"pre","level":"1"},
			{"studentId":"2","studentName":"Student Two","fatherName":"Father Two","motherName":"Mother Two",
					"centerName":"Center Two","studentAddress":"Address Two","classCategory":"after","level":"2"},
			{"studentId":"3","studentName":"Student Three","fatherName":"Father Three","motherName":"Mother Three",
					"centerName":"Center Three","studentAddress":"Address Three","classCategory":"pre","level":"3"},
			{"studentId":"4","studentName":"Student Four","fatherName":"Father Four","motherName":"Mother Four",
					"centerName":"Center Four","studentAddress":"Address Four","classCategory":"after","level":"4"},
			{"studentId":"5","studentName":"Student Five","fatherName":"Father Five","motherName":"Mother Five",
					"centerName":"Center Five","studentAddress":"Address Five","classCategory":"pre","level":"5"},
			{"studentId":"6","studentName":"Student Six","fatherName":"Father Six","motherName":"Mother Six",
					"centerName":"Center Six","studentAddress":"Address Six","classCategory":"after","level":"6"},
			{"studentId":"7","studentName":"Student Seven","fatherName":"Father Seven","motherName":"Mother Seven",
					"centerName":"Center Seven","studentAddress":"Address Seven","classCategory":"pre","level":"7"},
			{"studentId":"8","studentName":"Student Eight","fatherName":"Father Eight","motherName":"Mother Eight",
					"centerName":"Center Eight","studentAddress":"Address Eight","classCategory":"after","level":"8"},
			{"studentId":"9","studentName":"Student Nine","fatherName":"Father Nine","motherName":"Mother Nine",
					"centerName":"Center Nine","studentAddress":"Address Nine","classCategory":"pre","level":"9"},
			{"studentId":"10","studentName":"Student Ten","fatherName":"Father Ten","motherName":"Mother Ten",
					"centerName":"Center Ten","studentAddress":"Address Ten","classCategory":"after","level":"10"}
		];
		newTeacherData.preSchool.currentPhase = {"activities":"","attendance":"","assessment":"","startDate":"","endDate":""};
		newTeacherData.preSchool.pastPhase = [{"activities":"","attendance":"","assessment":"","startDate":"","endDate":""}];
		newTeacherData.preSchool.futurePhase = [{"activities":"","attendance":"","assessment":"","startDate":"","endDate":""}];
		newTeacherData.afterSchool.currentPhase = {"activities":"","attendance":"","assessment":"","startDate":"","endDate":""};
		newTeacherData.afterSchool.pastPhase = [{"activities":"","attendance":"","assessment":"","startDate":"","endDate":""}];
		newTeacherData.afterSchool.futurePhase = [{"activities":"","attendance":"","assessment":"","startDate":"","endDate":""}];
		//attendance
		//currentPhase has all activities, so all activities for this phase. data structure is array
		//index 0 is day 1 for this phase. each index will have attendance for all students in this phase
		newTeacherData.preSchool.currentPhase.attendance = {studentDetails:[],"holidayDetails":[]};
		newTeacherData.preSchool.currentPhase.attendance.studentDetails = [{"studentId":"","studentName":"","isPresent":true}];
		newTeacherData.preSchool.currentPhase.attendance.holidayDetails = [{"isHoliday":false,"comments":""}];
		newTeacherData.preSchool.pastPhase.attendance = {studentDetails:[],"holidayDetails":[]};
		newTeacherData.preSchool.pastPhase.attendance.studentDetails = [{"studentId":"","studentName":"","isPresent":true}];
		newTeacherData.preSchool.pastPhase.attendance.holidayDetails = [{"isHoliday":false,"comments":""}];
		//payment details
		//this will be categorised into pre and after school
		newTeacherData.paymentDetails.preSchool = [
			{
				"studentId":"1","studentName":"Student One","level":"1",
				"feeInstalments":[
					{"amountPaid":"100","paymentDate":"01-01-2017","comments":"First Installment"},
					{"amountPaid":"150","paymentDate":"15-02-2017","comments":"Second Installment"},
					{"amountPaid":"75","paymentDate":"23-03-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"325"
			},
			{
				"studentId":"3","studentName":"Student Three","level":"3",
				"feeInstalments":[
					{"amountPaid":"50","paymentDate":"01-04-2017","comments":"First Installment"},
					{"amountPaid":"50","paymentDate":"15-05-2017","comments":"Second Installment"},
					{"amountPaid":"100","paymentDate":"02-06-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"200"
			},
			{
				"studentId":"5","studentName":"Student Five","level":"5",
				"feeInstalments":[
					{"amountPaid":"50","paymentDate":"01-04-2017","comments":"First Installment"},
					{"amountPaid":"50","paymentDate":"15-05-2017","comments":"Second Installment"},
					{"amountPaid":"100","paymentDate":"02-06-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"200"
			},
			{
				"studentId":"7","studentName":"Student Seven","level":"7",
				"feeInstalments":[
					{"amountPaid":"50","paymentDate":"01-04-2017","comments":"First Installment"},
					{"amountPaid":"50","paymentDate":"15-05-2017","comments":"Second Installment"},
					{"amountPaid":"100","paymentDate":"02-06-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"200"
			},
			{
				"studentId":"9","studentName":"Student Nine","level":"9",
				"feeInstalments":[
					{"amountPaid":"50","paymentDate":"01-04-2017","comments":"First Installment"},
					{"amountPaid":"50","paymentDate":"15-05-2017","comments":"Second Installment"},
					{"amountPaid":"100","paymentDate":"02-06-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"200"
			}
		];
		newTeacherData.paymentDetails.afterSchool = [
			{
				"studentId":"2","studentName":"Student Two","level":"2",
				"feeInstalments":[
					{"amountPaid":"50","paymentDate":"01-04-2017","comments":"First Installment"},
					{"amountPaid":"50","paymentDate":"15-05-2017","comments":"Second Installment"},
					{"amountPaid":"100","paymentDate":"02-06-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"200"
			},
			{
				"studentId":"4","studentName":"Student Four","level":"4",
				"feeInstalments":[
					{"amountPaid":"50","paymentDate":"01-04-2017","comments":"First Installment"},
					{"amountPaid":"50","paymentDate":"15-05-2017","comments":"Second Installment"},
					{"amountPaid":"100","paymentDate":"02-06-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"200"
			},
			{
				"studentId":"6","studentName":"Student Six","level":"6",
				"feeInstalments":[
					{"amountPaid":"50","paymentDate":"01-04-2017","comments":"First Installment"},
					{"amountPaid":"50","paymentDate":"15-05-2017","comments":"Second Installment"},
					{"amountPaid":"100","paymentDate":"02-06-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"200"
			},
			{
				"studentId":"8","studentName":"Student Eight","level":"8",
				"feeInstalments":[
					{"amountPaid":"50","paymentDate":"01-04-2017","comments":"First Installment"},
					{"amountPaid":"50","paymentDate":"15-05-2017","comments":"Second Installment"},
					{"amountPaid":"100","paymentDate":"02-06-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"200"
			},
			{
				"studentId":"10","studentName":"Student Ten","level":"10",
				"feeInstalments":[
					{"amountPaid":"50","paymentDate":"01-04-2017","comments":"First Installment"},
					{"amountPaid":"50","paymentDate":"15-05-2017","comments":"Second Installment"},
					{"amountPaid":"100","paymentDate":"02-06-2017","comments":"Third Installment"},
				],
				"totalFeesPaid":"200"
			}
		];
	},

	payFac.updateStudentFees = function(newStudentInstalment){
		//this function will be used to actually update data which is initialized in setNewTeacherData()
		// for e.g this particular function is used to update student fees for a particular student:
		//Find the ID for this particular student in currentTeacherData.paymentDetails depending on class category and
		// push this particular installment in feeInstallments array
		// Also, add this instalment instance to currentTeacherData object so that it will reflect in this student's total amount paid
		// newStudentInstalment: {student:{},installment:{"amountPaid":"",paymentDate:"",comments:""}}
	}

	payFac.getCurrentTeacherData = function() {
		return storedUserData();
		//return $http.get(apiURL+"students/");
	}

	payFac.getNewTeacherData = function() {
		if(Object.keys(newTeacherData).length === 0)
			payFac.setNewTeacherData();
		return newTeacherData;
		//return $http.get(apiURL+"students/");
	}

	payFac.updateFeesPaid = function(student, fees) {
		student.feesPaid = (parseInt(student.feesPaid) + fees).toString();
		return $http.put(apiURL+"students/"+student.id, student)
	}
	return payFac;
}])
;
