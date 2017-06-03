angular.module('thinkZone.controllers')

.controller('AttendanceCtrl', function($scope,$state,CommonFactory,CourseFactory) {
  var classCategory,teacherData,classRoomData,currentAttendanceData,pastAttendanceData;
  teacherData = CommonFactory.storedUserData();
  console.log(teacherData);
  classCategory = CourseFactory.getClassType();
  classCategory = 'pre';
  if(classCategory==="pre"){
    classRoomData = teacherData.preSchool;
  }
  else{
    classRoomData = teacherData.afterSchool;
  }
  currentAttendanceData = classRoomData.currentPhase.attendance;
  pastAttendanceData  = classRoomData.pastPhase.attendance;
  console.log(currentAttendanceData);
})