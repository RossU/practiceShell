'use strict';

/**
 * @ngdoc function
 * @name testprojApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testprojApp
 */
angular.module('testprojApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
