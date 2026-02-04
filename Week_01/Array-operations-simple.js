// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

const temperatures = [32, 35, 28, 40, 38, 30, 42];

const higherTemperatures = temperatures.filter(function (temp) {
  if (temp > 35) {
    return true;
  } else {
    return false;
  }
});

const fahrenheitTemperatures = temperatures.map(function (temp) {
  let result = (temp * 9) / 5 + 32;
  return result;
});

let sum = 0;
const averageTemperature = temperatures.reduce(function (total, temp) {
  sum = total + temp;
  return sum;
}, 0) / temperatures.length;

const temperatureAbove40 = temperatures.find(function (temp) {
  return temp > 40;
});

const indexOf28 = temperatures.findIndex(function (temp) {
  return temp === 28;
});
