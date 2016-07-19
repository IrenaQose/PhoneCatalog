angular.module('mainApp',['ui.bootstrap','ui.router','controllers'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home/home.html',
      controller: 'HomeCtrl'
    })
    .state('phones', {
      url:'/phones',
      templateUrl:'templates/phones/phones.html',
      controller: 'PhoneCtrl'
    })
    .state('phone', {
      url: '/phone/:phoneId',
      templateUrl: 'templates/phoneDetails/phone-details.html',
      controller: 'PhoneDetailsCtrl'
    })
    $urlRouterProvider.otherwise('/home');
})
