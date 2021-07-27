//Write a map function that will take in two arguments - an array to map, and a callback function
const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


module.exports = map