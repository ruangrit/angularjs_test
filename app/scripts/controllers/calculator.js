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
  	$scope.test = 'xxxx';
  	var tempInput = [];
  	$scope.number_btn = [];
  	for (var i = 0; i <= 9; i++) {
  		$scope.number_btn.push(i);
  	
  	};

  	
  	$scope.inputTextArray = [];
  	$scope.displayText = '';
    $scope.number = function (input) {
    	$scope.displayText += input;
    	tempInput.push(input);
    	$scope.inputText =  parseInt(tempInput.join(''));	
    };

    $scope.setOperator = function (operator) {
    	$scope.operator = operator;
    	$scope.displayText += operator;
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

    	if($scope.operator == '+') {
    		$scope.displayText = (parseInt($scope.inputTextArray[0]) + parseInt($scope.inputTextArray[1]));
    	}
    	if($scope.operator == '-') {
    		$scope.displayText = (parseInt($scope.inputTextArray[0]) - parseInt($scope.inputTextArray[1]));
    	}
    	if($scope.operator == '*') {
    		$scope.displayText = (parseInt($scope.inputTextArray[0]) * parseInt($scope.inputTextArray[1]));
    	}
    	if($scope.operator == '/') {
    		$scope.displayText = (parseInt($scope.inputTextArray[0]) / parseInt($scope.inputTextArray[1]));
    	}
    };

  });
