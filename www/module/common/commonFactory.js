angular.module('thinkZone.services')

.factory('CommonData', function($http,apiURL) {
 
  var months = [];
  var weeks = [];
  var classData = null;
  var commonApplicationData = {"userData":{},"schoolType":"","timeFrame":{},"studentList":{},"batchTiming":{},"path":""};
 
  return {
    getMonths: function(){
      months = [{"monthId":1,"monthName":"Month 1","courseCompleted":false,"currentCourseMonth":true},
                {"monthId":2,"monthName":"Month 2","courseCompleted":false,"currentCourseMonth":false},
                {"monthId":3,"monthName":"Month 3","courseCompleted":false,"currentCourseMonth":false},
                {"monthId":4,"monthName":"Month 4","courseCompleted":false,"currentCourseMonth":false},
                {"monthId":5,"monthName":"Month 5","courseCompleted":false,"currentCourseMonth":false},
                {"monthId":6,"monthName":"Month 6","courseCompleted":false,"currentCourseMonth":false},
                {"monthId":7,"monthName":"Month 7","courseCompleted":false,"currentCourseMonth":false},
                {"monthId":8,"monthName":"Month 8","courseCompleted":false,"currentCourseMonth":false},
                {"monthId":9,"monthName":"Month 9","courseCompleted":false,"currentCourseMonth":false},
                {"monthId":10,"monthName":"Month 10","courseCompleted":false,"currentCourseMonth":false},
                {"monthId":11,"monthName":"Month 11","courseCompleted":false,"currentCourseMonth":false},
                {"monthId":12,"monthName":"Month 12","courseCompleted":false,"currentCourseMonth":false}];
      return months; 
    },
    getWeeks: function(){
      weeks = [{"weekId":1,"weekName":"Week 1","courseCompleted":false,"currentCourseWeek":true},
                {"weekId":2,"weekName":"Week 2","courseCompleted":false,"currentCourseWeek":false},
                {"weekId":3,"weekName":"Week 3","courseCompleted":false,"currentCourseWeek":false},
                {"weekId":4,"weekName":"Week 4","courseCompleted":false,"currentCourseWeek":false},
                {"weekId":5,"weekName":"Week 5","courseCompleted":false,"currentCourseWeek":false}];
      return weeks;
    },
    setClass: function(classObject){
      this.updateCommonData(classObject,'timeFrame')
      classData = classObject;
    },
    getClass: function(){
      return classData;
    },
    updateCommonData: function(newData,newDataType){
      switch(newDataType){
        case 'user':
          commonApplicationData.userData = newData;
          console.log(commonApplicationData);
          break;
        case 'path':
          commonApplicationData.path = (newData!=='')? commonApplicationData.path + "/" + newData : '';
          console.log(commonApplicationData);
          break;
        case 'timeFrame':
          commonApplicationData.timeFrame = newData;
          console.log(commonApplicationData);
          break;
        case 'schoolType':
          commonApplicationData.schoolType = newData;
          console.log(commonApplicationData);
          break;
      }
    },
    getCommonData: function(){
      return commonApplicationData;
    }
  }
})