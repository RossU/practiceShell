'use strict';

/**
 * @ngdoc function
 * @name testprojApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testprojApp
 */
angular.module('testprojApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
