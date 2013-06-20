'use strict';

/* Controllers */
function PhoneListCtrl($scope) {
  $scope.phones = [
    {"name_1": "A",
     "name_2": "B"},
    {"name_1": "C",
     "name_2": "D"},
    {"name_1": "E",
     "name_2": "F"}
  ];
}
angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);