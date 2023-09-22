/* eslint-disable jest/valid-expect */
const { describe, it } = require('mocha');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with a successful response when success is true', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Assert that the response is correct
        const expectedData = { data: 'Successful response from the API' };
        expect(response).to.deep.equal(expectedData);

        // Call done to signal that the test is complete
        done();
      })
      .catch((error) => {
        // If there's an error, fail the test and provide an error message
        done(error);
      });
  }));

  it('should reject with an error when success is false', () => new Promise((done) => {
    getPaymentTokenFromAPI(false)
      .then(() => {
        // If the promise resolves when it should reject, fail the test
        done(new Error('Expected promise to reject, but it resolved.'));
      })
      .catch((error) => {
        // Assert that the error message is as expected
        const expectedErrorMessage = 'API request failed';
        expect(error.message).to.equal(expectedErrorMessage);

        // Call done to signal that the test is complete
        done();
      });
  }));
});
