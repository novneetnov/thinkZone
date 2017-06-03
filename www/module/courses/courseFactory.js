angular.module('thinkZone.services')

.factory('CourseFactory', function($http,apiURL) {
 
  var classType = "";

  return {
    setClassType: function(classCat){
      classType = classCat;
    },
    getClassType: function(){
      return classType;
    }
  }
})