/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber  once with type "SUM"', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnceWithExactly(calculateNumberSpy, 'SUM', 100, 20);
    sinon.assert.calledOnceWithExactly(consoleSpy, 'The total is: 120');

    // Restore the spies to their original state
    calculateNumberSpy.restore();
    consoleSpy.restore();
  });
});
