'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    //$routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    //$routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.when('/splash', {templateUrl: 'partials/splash.html', controller: 'MyCtrl2'});
    $routeProvider.when('/matches', {templateUrl: 'partials/matches.html', controller: 'PhoneListCtrl'});
    $routeProvider.otherwise({redirectTo: '/splash'});
  }]);
