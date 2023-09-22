/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const { expect } = chai;

describe('calculateNumber', () => {
  it('should correctly add two numbers when type is SUM', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
    expect(result).to.equal(6);
  });

  it('should correctly subtract two numbers when type is SUBTRACT', () => {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(result).to.equal(-4);
  });

  it('should correctly divide two numbers when type is DIVIDE', () => {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    expect(result).to.equal(0.2);
  });

  it('should return "Error" when dividing by zero', () => {
    const result = calculateNumber('DIVIDE', 1.4, 0);
    expect(result).to.equal('Error');
  });
});
