'use strict';

/**
 * @ngdoc function
 * @name cpdApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cpdApp
 */
angular.module('cpdApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
