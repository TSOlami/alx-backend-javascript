/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with type "SUM", a = 100, and b = 20', () => {
    // Create a stub for Utils.calculateNumber
    const stub = sinon.stub(Utils, 'calculateNumber');

    // Configure the stub to return a specific value (e.g., 10)
    stub.withArgs('SUM', 100, 20).returns(10);

    // Create a spy for console.log
    const consoleSpy = sinon.spy(console, 'log');

    // Call the function we want to test
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub was called with the expected arguments
    assert(stub.calledOnceWithExactly('SUM', 100, 20));

    // Verify that console.log was called with the correct message
    assert(consoleSpy.calledOnceWithExactly('The total is: 10'));

    // Restore both the stub and the console.log spy
    stub.restore();
    consoleSpy.restore();
  });
});
