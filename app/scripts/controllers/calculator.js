'use strict';

/**
 * @ngdoc function
 * @name calculatorApp.controller:CalculatorCtrl
 * @description
 * # CalculatorCtrl
 * Controller of the calculatorApp
 */
angular.module('calculatorApp')
  .controller('CalculatorCtrl', function ($scope) {
  	var tempInput = [];
    $scope.number = function (input) {
    	tempInput.push(input);
    	
    	$scope.inputText =  parseInt(tempInput.join(''));
    	

    };

  });
