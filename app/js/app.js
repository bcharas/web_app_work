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
var myApp = angular.module('myApp',['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', '$strap.directives']);

myApp.config(function($routeProvider){
    $routeProvider.when('/matches', {templateUrl: 'partials/matches.html', controller: 'MatchListCtrl'});
    $routeProvider.when('/splash', {templateUrl: 'partials/splash.html', controller: 'MyCtrl2'});
    $routeProvider.when('/modal', {templateUrl: 'partials/modal_test.html', controller: 'ModalTestCtrl'});
    //$routeProvider.when('/foo', {redirectTo: "http://google.com"});
    $routeProvider.otherwise({redirectTo: '/splash'});	
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    // //delete $httpProvider.defaults.headers.common['Origin'];
});

