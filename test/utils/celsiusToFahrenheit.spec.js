/**
 * Author: Robert King
 * Date: May 28, 2025
 * File: celsiusToFahrenheit.spec.js
 * Description: This script tests the celsiusToFahrenheit function.
 */
'use strict';

// Import the celsiusToFahrenheit function from the celsiusToFahrenheit.js file
const { celsiusToFahrenheit } = require('../../src/utils/celsiusToFahrenheit');

// The describe() function is a test suite that contains one or more tests
describe('celsiusToFahrenheit.js', () => {

  // Test 1: Convert 0 Degrees Celsius to 32 Degrees Fahrenheit
  it(`should convert 0\u00B0C to 32\u00B0F`, () => {
    const result = celsiusToFahrenheit(0);
    expect(result).toBe(32);
  });

  // Test 2: Convert 100 Degrees Celsius to 212 Degrees Fahrenheit
  it(`should convert 100\u00B0C to 212\u00B0F`, () => {
    const result = celsiusToFahrenheit(100);
    expect(result).toBe(212);
  });

  // Test 3: Convert -40 Degrees Celsius to -40 Degrees Fahrenheit
  it(`should convert -40\u00B0C to -40\u00B0F`, () => {
    const result = celsiusToFahrenheit(-40);
    expect(result).toBe(-40);
  });

  // Test 4: Throw an Error if Input is NAN
  it(`should throw an error if input is not a number`, () => {
    expect(() => celsiusToFahrenheit('not-a-number')).toThrow('Input must be a number')
  });
});