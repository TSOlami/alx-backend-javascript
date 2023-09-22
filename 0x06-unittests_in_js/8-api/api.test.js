/* eslint-disable jest/valid-expect */
const request = require('request');
const { expect } = require('chai');

describe('index page', () => {
  it('should return the correct status code', () => new Promise((done) => {
    request('http://localhost:7865', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('should return the correct result', () => new Promise((done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});

describe('other', () => {
  it('should return a 404 status code for unknown routes', () => new Promise((done) => {
    request('http://localhost:7865/unknown', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));
});
