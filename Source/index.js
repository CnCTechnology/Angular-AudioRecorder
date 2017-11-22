var app = angular.module('audioRecorderApp', ['ui.router','audioRecorder']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

   

    var homeState = {
        name: 'home',
        url: '/',
        templateUrl: '../views/home.html',
        controller: 'HomeCtrl'
    }    
    $stateProvider.state(homeState);
 

});