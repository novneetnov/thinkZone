angular.module('thinkZone.services')
.factory('paymentFactory', [ '$http' ,'apiURL', function($http, apiURL) {
	var payFac = {}
	//var students = [
		//{
			//id: 0,
			//image: "image1.png", 
			//name: "Student 1", 
			//level: "Level 1", 
			//tuitionFees: "100", 
			//feesPaid: "0", 
			//category: "pre"},
		//{
			//id: 1,
			//image: "image2.png", 
			//name: "Student 2", 
			//level: "Level 2", 
			//tuitionFees: "200", 
			//feesPaid: "100", 
			//category: "pre"
		//},
		//{
			//id: 2,
			//image: "image3.png", 
			//name: "Student 3", 
			//level: "Level 3", 
			//tuitionFees: "300", 
			//feesPaid: "200", 
			//category: "after"
		//},
		//{
			//id: 3,
			//image: "image4.png", 
			//name: "Student 4", 
			//level: "Level 4", 
			//tuitionFees: "400", 
			//feesPaid: "300", 
			//category: "pre"
		//},
	//]
	payFac.getStudents = function() {
		//return students;
		return $http.get(apiURL+"students/");
	}

	payFac.updateFeesPaid = function(student, fees) {
		student.feesPaid = (parseInt(student.feesPaid) + fees).toString();
		return $http.put(apiURL+"students/"+student.id, student)
	}
	return payFac;
}])
;
