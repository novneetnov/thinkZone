angular.module('thinkZone.controllers')

.controller('EducationProgramCtrl', function($scope,$state,CourseFactory){
  $scope.clickPreSchool = function(){
  	CourseFactory.setClassType("pre");
    $state.go('classRoom');
  };
  $scope.clickAfterSchool = function(){
  	CourseFactory.setClassType("after");
    $state.go('classRoom');
  };
})