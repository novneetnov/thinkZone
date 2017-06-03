angular.module('thinkZone.controllers', [])

.controller('LoginCtrl', function($scope, $state, CommonFactory) {
  $scope.user = {};
  $scope.unauthorizedMessage = '';
  var encrypted = CryptoJS.AES.encrypt("{'userName':'Sam','password':'sam'}", "Secret Passphrase");
  //console.log(encrypted);
  var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
  //console.log(decrypted);
  //console.log(decrypted.toString(CryptoJS.enc.Utf8));
  $scope.userLogin = function(){
    CommonFactory.setCurrentTeacherData();
    $state.go('teacherDashboard');
  }
});