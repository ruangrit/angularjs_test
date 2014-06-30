'use strict';

describe('Controller: CalculatorCtrl', function () {

  // load the controller's module
  beforeEach(module('calculatorApp'));

  var CalculatorCtrl,
    scope;


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalculatorCtrl = $controller('CalculatorCtrl', {
      $scope: scope
    });
  }));

  it('ถ้ากด 1 แล้วเรียก function number ค่า inputText ต้องได้ 1', function () {
    scope.number(1);
    expect(scope.inputText).toBe(1);

  });

  it('ถ้ากด 2 แล้วเรียก function number ค่า inputText ต้องได้ 2', function () {
    scope.number(2);
    expect(scope.inputText).toBe(2);

  });

  it('ถ้ากด 1 แล้ว 2 แล้วเรียก function number ค่า inputText ต้องได้ 12', function () {
    scope.number(1);
    scope.number(2);
    expect(scope.inputText).toBe(12);

  });

   it('ถ้ากด 1 แล้ว 2 แล้ว 3เรียก function number ค่า inputText ต้องได้ 12', function () {
    scope.number(1);
    scope.number(2);
    scope.number(3);

    expect(scope.inputText).toBe(123);

  });



});
