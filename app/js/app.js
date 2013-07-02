'use strict';
/*
// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/matches', {templateUrl: 'partials/matches.html', controller: 'PhoneListCtrl'});
    $routeProvider.when('/splash', {templateUrl: 'partials/splash.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/splash'});
  }]);
*/
//'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers'
var myApp = angular.module('myApp',['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']);

myApp.config(function($routeProvider){
    $routeProvider.when('/', {redirectTo: '/splash'});
    $routeProvider.when('/matches', {templateUrl: 'partials/new_matches.html', controller: 'MatchListCtrl'});
    $routeProvider.when('/splash', {templateUrl: 'partials/splash.html', controller: 'MyCtrl2'});
    //$routeProvider.when('/foo', {redirectTo: "http://google.com"});
    $routeProvider.otherwise({redirectTo: '/splash'});	
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    // //delete $httpProvider.defaults.headers.common['Origin'];
});

