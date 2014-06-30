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

  it('ถ้ากด + แล้ว operator จะเป็น +', function () {
    scope.setOperator('+');
    expect(scope.operator).toBe('+');
  }); 

  it('ถ้ากด - แล้ว operator จะเป็น -', function () {
    scope.setOperator('-');
    expect(scope.operator).toBe('-');
  }); 

  it('ถ้ากด * แล้ว operator จะเป็น *', function () {
    scope.setOperator('*');
    expect(scope.operator).toBe('*');
  }); 

  it('ถ้ากด / แล้ว operator จะเป็น /', function () {
    scope.setOperator('/');
    expect(scope.operator).toBe('/');
  }); 

  it('ถ้ากด +,- แล้ว operator จะเป็น -', function () {
    scope.setOperator('+');
    scope.setOperator('-');
    expect(scope.operator).toBe('-');
  }); 
  it('ถ้ากด +,-,* แล้ว operator จะเป็น *', function () {
    scope.setOperator('+');
    scope.setOperator('-');
    expect(scope.operator).toBe('-');
  }); 
  it('ถ้ากด +,-,* แล้ว operator จะเป็น *', function () {
    scope.setOperator('+');
    scope.setOperator('-');
    scope.setOperator('*');
    expect(scope.operator).toBe('*');
  }); 

  it('ถ้าหดเครื่องหมาย + ก่อนโดยไม่มีตัวเลข จะได้ค่า errorOperation = true', function () {
    scope.setOperator('+');
    expect(scope.errorOperation).toBe(true);
  });

  it('กด 123 แล้วตามด้วยเครื่องหมาย + จะได้ inputTextArray[0] = 123', function () {

    scope.number(1);
    scope.number(2);
    scope.number(3);
    scope.setOperator('+');
    expect(scope.inputTextArray[0]).toBe(123);
  });

  it('เมื่อมีการเปลี่ยนจาก operation เป็นตัวเลข จะเก็บ operation ไว้ใน operationArray ', function () {

    scope.number(1);
    scope.number(2);
    scope.number(3);
    scope.setOperator('+');
    scope.number(1);
    expect(scope.operatorArray[0]).toBe('+');
  });

  it('กดปุ่ม enter เรียก function calulate ถ้ายังมีชุดตัวเลขสุดท้ายให้เอาไปใส่ใน  inputTextArray ท้ายสุด', function () {

    scope.number(1);
    scope.number(2);
    scope.number(3);
    scope.setOperator('+');
    scope.number(1);
    scope.calculate();
    expect(scope.inputTextArray[1]).toBe(1);
  });



  it('ถ้ากด 123 และ +, -, *, + และ 456 และ + จะได้ค่า inputText[123, 456] และ operator = + ', function () {
    // scope.number(1);
    // scope.number(2);
    // scope.number(3);


    // scope.setOperator('-');
    // scope.setOperator('*');
    // scope.setOperator('+');
    // expect(scope.operator).toBe('+');

    // expect(scope.inputTextArray[0]).toBe(123);

    // scope.number(4);
    // scope.number(5);
    // scope.number(6);

    // scope.setOperator('+');
    // expect(scope.inputTextArray[1]).toBe(456);
  });











});
