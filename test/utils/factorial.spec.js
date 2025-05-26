/**
 * Author: Professor Krasso
 * Date: 13 September 2024
 * File: factorial.spec.js
 * Description: This script tests the factorial function.
 */
'use strict';

const { factorial } = require('../../src/utils/factorial'); // Import the factorial function from the factorial.js file

// The describe() function is a test suite that contains one or more tests
describe('factorial.js', () => {

  // The it() function is a test spec that contains one or more expectations
  it('should calculate factorial of 5', () => {
    const result = factorial(5); // Call the factorial function with the value of 5
    expect(result).toBe(120); // The expected result is 120
  });

  // The it() function is a test spec that contains one or more expectations
  it('should calculate the factorial of 0', () => {
    const result = factorial(0); // Call the factorial function with the value of 0
    expect(result).toBe(1); // The expected result is 1
  });

  // The it() function is a test spec that contains one or more expectations
  it('should throw an error when calculating the factorial of a negative number', () => {
    // Call the factorial function with the value of -1 and expect it to throw an error
    expect(() => factorial(-1)).toThrow('Factorial of negative number is not defined');
  });
});