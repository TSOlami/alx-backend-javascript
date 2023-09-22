/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('check if a rounds down', () => {
    assert.strictEqual(calculateNumber(1.2, 3), 4);
  });
  it('check if a rounds up', () => {
    assert.strictEqual(calculateNumber(0.8, 3), 4);
  });
  it('check if b rounds down', () => {
    assert.strictEqual(calculateNumber(1, 3.3), 4);
  });
  it('check if b rounds up', () => {
    assert.strictEqual(calculateNumber(1, 2.5), 4);
  });
});
