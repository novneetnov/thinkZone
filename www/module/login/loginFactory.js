angular.module('thinkZone.services')

.factory('CommonFactory', function($http,apiURL) {
 
  var loginData = {};
  var currentTeacherData = {}; 
 
  return {
    setTeacherData: function(){
      var returnObject;
      currentTeacherData.userId = "5914b9171698ab2407085416";
      currentTeacherData.preSchool = {};
      currentTeacherData.afterSchool = {};
      // classCategory --> Early Childhood & Primary; //
      // level --> level of each student
      currentTeacherData.studentList = [{"studentId":"","studentName":"","fatherName":"","motherName":"","centerName":"","studentAddress":"","classCategory":"","level":""}];
      currentTeacherData.preSchool.currentPhase = {"activities":"","attendance":"","assessment":"","startDate":"","endDate":""};
      currentTeacherData.preSchool.pastPhase = [{"activities":"","attendance":"","assessment":"","startDate":"","endDate":""}];
      currentTeacherData.preSchool.futurePhase = [{"activities":"","attendance":"","assessment":"","startDate":"","endDate":""}];
      currentTeacherData.afterSchool.currentPhase = {"activities":"","attendance":"","assessment":"","startDate":"","endDate":""};
      currentTeacherData.afterSchool.pastPhase = [{"activities":"","attendance":"","assessment":"","startDate":"","endDate":""}];
      currentTeacherData.afterSchool.futurePhase = [{"activities":"","attendance":"","assessment":"","startDate":"","endDate":""}];
      currentTeacherData.paymentDetails = [];
      //attendance
      //currentPhase has all activities, so all activities for this phase. data structure is array
      //index 0 is day 1 for this phase. each index will have attendance for all students in this phase
      currentTeacherData.preSchool.currentPhase.attendance = {studentDetails:[],"holidayDetails":[]};
      currentTeacherData.preSchool.currentPhase.attendance.studentDetails = [{"studentId":"","studentName":"","isPresent":true}];
      currentTeacherData.preSchool.currentPhase.attendance.holidayDetails = [{"isHoliday":false,"comments":""}];
      currentTeacherData.preSchool.pastPhase.attendance = {studentDetails:[],"holidayDetails":[]};
      currentTeacherData.preSchool.pastPhase.attendance.studentDetails = [{"studentId":"","studentName":"","isPresent":true}];
      currentTeacherData.preSchool.pastPhase.attendance.holidayDetails = [{"isHoliday":false,"comments":""}];
      // 1. add users from code ----- Basic CREATE 
      /*var newUserObj = {"firstName":"Binayak","lastName":"A","userName":"binayak","password":"binayak","email":"bin.a@h.com","dob":""};
      return $http.post(apiURL + "users/",newUserObj).then(function(response){
        console.log(response);
      });*/

      // 2. create post from code ----- reference to foriegn model USERS
      /*var newPostObj = {"postTitle":"My second post","postBody":"Some random second post details","_user":"5914b9171698ab2407085416"};
      return $http.post(apiURL + "posts/",newPostObj).then(function(response){
        console.log(response);
      });*/
      
      // 3. get post for particular user id ----- Get data from foriegn model USERS
      /*var postByUserId = "5914b9171698ab2407085416";
      return $http.get(apiURL + "posts/user/"+postByUserId).then(function(response){
        console.log(response);
      });*/

      // 4. create course from code ------- Array foriegn references USERS
      /*var languageArray = ["English","Odia"];
      var usersArray = ["5914b9171698ab2407085416","5914b95c1698ab2407085417"];
      var newCourseObj = {"courseName":"Addition","category":"after","duration":"6","language":languageArray,"_user":usersArray};
      return $http.post(apiURL + "courses/",newCourseObj).then(function(response){
        console.log(response);
      });*/
    },
    storedUserData: function(){
      this.setTeacherData();
      return currentTeacherData;
    }
  }
})