/* eslint-disable jest/no-hooks */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment'); // Update the file path if necessary
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10); // Stub the function to return 10
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore(); // Restore the stub after each test
    consoleSpy.restore(); // Restore the spy after each test
  });

  it('should call Utils.calculateNumber with type "SUM", a = 100, and b = 20', () => {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnceWithExactly(calculateNumberStub, 'SUM', 100, 20);
  });

  it('should log the correct message "The total is: 10"', () => {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnceWithExactly(consoleSpy, 'The total is: 10');
  });
});
