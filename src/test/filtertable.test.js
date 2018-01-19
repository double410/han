const assert = require('chai').assert;
const expect = require('chai').expect;
const sayHello = require('../utils/filtetable').sayHello;
const addNumbers = require('../utils/filtetable').addNumbers;

const sayHelloResult = sayHello();
const addNumbersResult = addNumbers(4, 5);

describe('Test Filtetable', () => {
  // before(function (done) {
  //     var num1 = 5;
  //     var num2 = 10;
  // });
  describe('Test say hello', () => {
    it('should return hello', () => {
      assert.equal(sayHelloResult, 'Hello world1!');
    });
    it('should return a int', () => {
      expect(1).to.be.a('number');
    });
    it('should return type string.', () => {
      expect(sayHelloResult).to.be.a('string');
    });

    it('should return string');
  });
  describe('Test add numbers', () => {
    it('should return sum', () => {
      expect(addNumbersResult).to.equal(11);
    });
    it('should return a int', () => {
      expect(addNumbersResult).to.be.a('number');
    });
    it('should return string');
  });

  // after(function (done) {
  //     // Delete the data
  // });
});
