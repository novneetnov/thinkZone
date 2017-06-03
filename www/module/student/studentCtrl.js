angular.module('thinkZone.controllers')

.controller('StudentDetailCtrl', function($scope,$state,CommonFactory) {
  $scope.clickStudentDetails = function(){
    $state.go('studentDetails');
  };
  $scope.clickEducationProgram = function(){
    $state.go('educationProgram');
  };
  $scope.clickPaymentDetails = function(){
    $state.go('paymentDetails');
  };
  console.log(CommonFactory.storedUserData());
})