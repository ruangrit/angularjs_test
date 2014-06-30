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
  	$scope.inputTextArray = [];
  	$scope.operatorArray = [];
    $scope.number = function (input) {
    	if (typeof($scope.operator) != 'undefined' ) {
   	    	$scope.operatorArray.push($scope.operator);

    	}
    	tempInput.push(input);
    	$scope.inputText =  parseInt(tempInput.join(''));	
    };

    $scope.setOperator = function (operator) {
    	$scope.operator = operator;
    	if (tempInput.length == 0) {
    		$scope.errorOperation = true;
    		
    	}
    	if ($scope.inputText != "") {
    		$scope.inputTextArray.push($scope.inputText);
    		$scope.inputText = "";
    		tempInput = [];
    	}
    }

    $scope.calculate = function () {
    	if ($scope.inputText != "") {
    		$scope.inputTextArray.push($scope.inputText);
    		$scope.inputText = "";
    		tempInput = [];
    	}
    };

  });
