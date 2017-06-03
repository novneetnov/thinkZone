angular.module('thinkZone.controllers')

.controller('AssessmentCtrl', function($scope,$state,CommonFactory,CourseFactory) {
  var classCategory,teacherData,classRoomData;
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
  console.log(classRoomData);
})