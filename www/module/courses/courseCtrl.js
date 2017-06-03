angular.module('thinkZone.controllers')

.controller('managerDashboardCtrl', function($scope) {})

.controller('EducationProgramCtrl', function($scope,$state,CommonData){
  $scope.clickPreSchool = function(){
    CommonData.updateCommonData('preSchool','schoolType');
    $state.go('preSchool');
  };
  $scope.clickAfterSchool = function(){
    CommonData.updateCommonData('afterSchool','schoolType');
    $state.go('afterSchool');
  };
})

.controller('PreSchoolCtrl', function($scope,$state,CommonData){
  $scope.months = CommonData.getMonths();
  $scope.weeks = CommonData.getWeeks();
  $scope.selectedMonth = {};
  $scope.selectedWeek = {};
  $scope.disableOkButton = true;
  $scope.enableSelectClass = function(){
    var monthKeyList = Object.keys($scope.selectedMonth);
    var weekKeyList = Object.keys($scope.selectedWeek);
    if(monthKeyList.length!==0 && weekKeyList.length!==0)
      $scope.disableOkButton = false;
  }
  $scope.highlightSelectedMonth = function(clickedMonth){
    $scope.selectedMonth = clickedMonth;
    $scope.enableSelectClass();
  };
  $scope.highlightSelectedWeek = function(clickedWeek){
    $scope.selectedWeek = clickedWeek;
    $scope.enableSelectClass();
  };
  $scope.prepareClass = function(){
    var selectedObject ={'selectedMonth':$scope.selectedMonth,'selectedWeek':$scope.selectedWeek};
    CommonData.setClass(selectedObject);
    $state.go('classRoom');
  }
})

.controller('AfterSchoolCtrl', function($scope,$state){
  /*$scope.selections = {};
  $scope.stateVisibility = {"hideAfterSP":false};
  $scope.courses = [{"courseID":1,"courseName":"English"},
                  {"courseID":2,"courseName":"Maths"},
                  {"courseID":3,"courseName":"Odia"}];
  $scope.onCourseChange = function(courseObject){
    $scope.stateVisibility.hideAfterSP = true;
    $state.go('afterSP.course',{courseID:courseObject.courseID});
  };*/
})

.controller('ClassRoomCtrl', function($scope, $state,CommonData){
  console.log(CommonData.getClass());
  $scope.clickAttendance = function(){
    $state.go('attendance');
  };
  $scope.clickActivities = function(){
    $state.go('activities');
  };
  $scope.clickAssessment = function(){
    $state.go('assessment');
  };
})

.controller('AttendanceCtrl', function($scope,$stateParams,$ionicPopup,Students){
  /*$scope.selections = $stateParams.breadCrumbData;
  var currentDate = new Date();
  $scope.attendanceErrorMessage = '',
  $scope.studentList = [],
  $scope.attendancePostData = {'courseID': $scope.selections.selectedCourse.courseID,
                                'monthID':$scope.selections.selectedMonth.monthID,
                                'weekID':$scope.selections.selectedWeek.weekID,
                                'dayNumber': currentDate.getDay(),
                                'presentStudents': [],
                                'absentStudents': []
  };
  Students.getStudents().then(function(result){
    $scope.studentList = result.data;
  });
  // An alert dialog
  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Attendance Submit Data Alert',
      template: $scope.attendanceErrorMessage
    });

    alertPopup.then(function(res) {

    });
  };
  $scope.submitAttendanceData = function(){
    var keepGoing = true;
    angular.forEach($scope.studentList,function(value){
      if(keepGoing===true){
        if(value.attendance === undefined){
          $scope.attendancePostData.presentStudents = [];
          $scope.attendancePostData.absentStudents = [];
          $scope.attendanceErrorMessage = 'Please update attendance for ' + value.studentName;
          keepGoing = false;
          $scope.showAlert();
        }
        else if(value.attendance==='P'){
          $scope.attendancePostData.presentStudents.push(value.studentID);
          $scope.attendanceErrorMessage = '';
        }
        else if(value.attendance==='A'){
          $scope.attendancePostData.absentStudents.push(value.studentID);
          $scope.attendanceErrorMessage = '';
        }
        else{
          
        }
      }
    });
    console.log($scope.attendancePostData);
  };*/
})

.controller('ActivitiesCtrl', function($scope, CommonData,ClassRoomService){
  $scope.classRoomData = [];
  $scope.commonApplicationData = CommonData.getCommonData();
  if($scope.commonApplicationData.schoolType==='preSchool'){
    $scope.classRoomData = ClassRoomService.getClassRoomData();
  }
})

.controller('AssessmentCtrl', function($scope){})