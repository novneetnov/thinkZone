angular.module('thinkZone.services')

.factory('CommonFactory', function($http,apiURL) {
  //holds teacher credentials after successful login 
  var loginData = {};
  //holds logged in teacher's current data, which includes student details, education program and payment details
  var currentTeacherData = {};
  // holds logged in teacher's new data, which includes all teacher data which is created when app is offline
  var newTeacherData = {};
 
  return {
    setCurrentTeacherData: function(){
      loginData.userId = "5914b9171698ab2407085416";
      currentTeacherData.preSchool = {};
      currentTeacherData.afterSchool = {};
      currentTeacherData.paymentDetails = {"preSchool":[],"afterSchool":[]};
      // classCategory --> Early Childhood & Primary; //
      // level --> level of each student
      currentTeacherData.studentList = [{"studentId":"","studentName":"","fatherName":"","motherName":"","centerName":"","studentAddress":"","classCategory":"","level":""}];
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
      currentTeacherData.paymentDetails.preSchool = [{"studentId":"","studentName":"","level":"","feeInstalments":[{"amountPaid":"","paymentDate":"","comments":""}],"totalFeesPaid":""}];
      currentTeacherData.paymentDetails.afterSchool = [{"studentId":"","studentName":"","level":"","feeInstalments":[{"amountPaid":"","paymentDate":"","comments":""}],"totalFeesPaid":""}];
      currentTeacherData.paymentDetails.totalFees = {"preSchool":"total fees for preSchool","afterSchool":"total fees for afterSchool"};
    },
    storedUserData: function(){
      this.setCurrentTeacherData();
      return currentTeacherData;
    },
    setNewTeacherData: function(){
      //this function will be used to set new data in offline mode. create a JSON for new data so that it can be synced later with our servers when app is online
      currentTeacherData.preSchool = {};
      currentTeacherData.afterSchool = {};
      currentTeacherData.paymentDetails = {"preSchool":[],"afterSchool":[]};
      // classCategory --> Early Childhood & Primary; //
      // level --> level of each student
      currentTeacherData.studentList = [{"studentId":"","studentName":"","fatherName":"","motherName":"","centerName":"","studentAddress":"","classCategory":"","level":""}];
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
      currentTeacherData.paymentDetails.preSchool = [{"studentId":"","studentName":"","level":"","feeInstalments":[{"amountPaid":"","paymentDate":"","comments":""}],"totalFeesPaid":""}];
      currentTeacherData.paymentDetails.afterSchool = [{"studentId":"","studentName":"","level":"","feeInstalments":[{"amountPaid":"","paymentDate":"","comments":""}],"totalFeesPaid":""}];
    },
    updateStudentFees: function(newStudentInstalment){
      //this function will be used to actually update data which is initialized in setNewTeacherData()
      // for e.g this particular function is used to update student fees for a particular student:
      //Find the ID for this particular student in currentTeacherData.paymentDetails depending on class category and
      // push this particular installment in feeInstallments array
      // Also, add this instalment instance to currentTeacherData object so that it will reflect in this student's total amount paid
    }
  }
})