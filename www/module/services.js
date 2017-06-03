angular.module('thinkZone.services', [])

.factory('IonicLoaderFactory', function($ionicLoading) {
 
  var postAttendanceData = [];
 
  return {
    showLoader: function(){
      return $ionicLoading.show({
        template: '<ion-spinner icon="spiral"></ion-spinner>',
        noBackdrop: true,
        duration: 30000
      });
    },
    hideLoader: function(){
      return $ionicLoading.hide();
    }
  }
})

.factory('Students', function($http,apiURL) {
 
  var studentList = [];
 
  return {
    getStudents: function(){
      // Actual fetch call data
      /*return $http.get(apiURL + "studentList").then(function(response){
          studentList = response;
          return studentList;
      });*/
      //hardcoded student list
      studentList = [{"studentName":"Anu","classNumber":"1","batchTiming":"9am"},
                      {"studentName":"Anup","classNumber":"2","batchTiming":"2pm"},
                      {"studentName":"Bijay","classNumber":"3","batchTiming":"11am"},
                    ];
      return studentList;
 
    },
    addStudent: function(newStudent){
      // Actual POST call for API integration 
      /*return $http.post(apiURL + "studentList",newStudent).then(function(response){
          studentList = response;
          return studentList;
      });*/
      // push to hardcoded list
      studentList.push(newStudent);
    }
  }
})

.factory('ClassRoomService', function($http,apiURL) {
 
  var classRoomData = {};
 
  return {
    getClassRoomData: function(){
      // Actual fetch call data
      /*return $http.get(apiURL + "records").then(function(response){
          classRoomData = response;
          return classRoomData;
      });*/
      //hardcoded classroom data
      classRoomData = [{"level":"level 1","content":"This is the content for level 1.","links":[{"linkName":"Link 1","linkUrl":"www.google.com"}]},
                      {"level":"level 2","content":"This is the content for level 2.","links":[{"linkName":"Link 1","linkUrl":"www.stackoverfllow.com"}]},
                      {"level":"level 3","content":"This is the content for level 3.","links":[{"linkName":"Link 1","linkUrl":"www.github.com"}]}
                    ];
      return classRoomData;
 
    }
  }
})

.factory('UpdateAttendance', function($http,apiURL) {
 
  var postAttendanceData = [];
 
  return {
    getStudents: function(){
 
      return $http.get(apiURL + "studentList").then(function(response){
          studentList = response;
          return studentList;
      });
 
    }
  }
})

.service('StoreService',function(){

  var serverDataToSync = {};

  this.save = function(saveData,type){
    this.serverDataToSync['type'] = saveData;
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
