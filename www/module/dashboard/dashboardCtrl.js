angular.module('thinkZone.controllers')

.controller('teacherDashboardCtrl', function($scope,$state) {
  $scope.clickStudentDetails = function(){
    $state.go('studentDetails');
  };
  $scope.clickEducationProgram = function(){
    $state.go('educationProgram');
  };
  $scope.clickPaymentDetails = function(){
    $state.go('paymentDetails');
  };
})