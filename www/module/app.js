// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'thinkZone' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'thinkZone.services' is found in services.js
// 'thinkZone.controllers' is found in controllers.js
// mongob public access api key 340b7a6e-2205-434d-aa1a-5a108bec67e9
angular.module('thinkZone', ['ui.router','ionic', 'thinkZone.controllers', 'thinkZone.services'])

//.constant('apiURL' , 'http://whispering-ravine-36452.herokuapp.com/api/')
.constant('apiURL' , 'http://localhost:3000/')
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.login', {
    url: '/login',
    views: {
      'login': {
        templateUrl: 'module/login/login.html',
        controller: 'LoginCtrl'
      }
    }
  })

  .state('teacherDashboard', {
    url: '/teacherDashboard',
    templateUrl: 'module/dashboard/teacherDashboard.html',
    controller: 'teacherDashboardCtrl'
  })

  .state('managerDashboard', {
    url: '/managerDashboard',
    templateUrl: 'templates/managerDashboard.html',
    controller: 'managerDashboardCtrl'
  })

  .state('studentDetails', {
    url: '/studentDetails',
    templateUrl: 'module/student/student-details.html',
    controller: 'StudentDetailCtrl'
  })

  .state('educationProgram', {
    url: '/educationProgram',
    templateUrl: 'module/courses/education-program.html',
    controller: 'EducationProgramCtrl'
  })

  .state('paymentDetails', {
    url: '/paymentDetails',
    templateUrl: 'module/payment/payment-details.html',
    controller: 'PaymentsCtrl'
  })

  .state('classRoom', {
    url: '/classRoom',
    templateUrl: 'module/courses/class-room.html',
    controller: 'ClassRoomCtrl'
  })

  .state('attendance', {
    url: '/attendance',
    templateUrl: 'module/courses/attendance.html',
    controller: 'AttendanceCtrl'
  })

  .state('activities', {
    url: '/activities',
    templateUrl: 'module/courses/activities.html',
    controller: 'ActivitiesCtrl'
  })

  .state('assessment', {
    url: '/assessment',
    templateUrl: 'module/courses/assessment.html',
    controller: 'AssessmentCtrl'
  })

  /*.state('test', {
    url: '/test',
    params : { breadCrumbData: null },
    templateUrl: 'module/test.html',
    controller: 'TestCtrl'
  })

  .state('miscellaneous', {
    url: '/miscellaneous',
    params : { breadCrumbData: null },
    templateUrl: 'module/miscellaneous.html',
    controller: 'MiscellaneousCtrl'
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'module/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'module/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'module/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })*/;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/login');

});
