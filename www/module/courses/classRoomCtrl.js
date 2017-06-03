angular.module('thinkZone.controllers')

.controller('ClassRoomCtrl', function($scope,$state) {
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