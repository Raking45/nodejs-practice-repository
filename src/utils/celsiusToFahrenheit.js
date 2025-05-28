/**
 * Author: Robert King
 * Date: May 28, 2025
 * File: celsiusToFahrenheit.js
 * Description: This script converts Celsius to Fahrenheit.
 */
'use strict';

function celsiusToFahrenheit(celsius) {

  // Check if the input is a number
  if(typeof celsius !== 'number') {
    throw new Error('Input must be a number');
  }

  // Convert Celsius to Fahrenheit using the formula (C * 9/5) + 32
  return (celsius * 9/5) + 32;
}

// Export function
module.exports = { celsiusToFahrenheit };