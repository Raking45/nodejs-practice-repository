/**
 * Author: Professor Krasso
 * Date: 13 September 2024
 * File: factorial.js
 * Description: This script calculates the factorial of a number
 */
'use strict';

// The factorial function calculates the factorial of a number
function factorial(n) {

  // If the number is less than 0, throw an error
  if (n < 0) {
    throw new Error('Factorial of negative number is not defined');
  }

  // If the number is 0, return 1. This is used as the base case for the recursive function
  if (n === 0) {
    return 1;
  }

  // Recursively call the factorial function until n is 0 and return the result
  return n * factorial(n - 1);
}

module.exports = { factorial }; // Export the factorial function for use in other scripts