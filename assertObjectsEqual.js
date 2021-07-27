const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects')


const assertObjectsEqual = function(actual, expected, obj1, obj2) {
  const inspect = require('util').inspect;
  // if (result of eqObjects === true) {

  console.log(`Label: actual: ${actual}, expected: ${expected}`);
  if (inspect(actual) === inspect(expected)) {
    console.log(`✅✅✅Assertion Passed, ${inspect(obj1)} === ${inspect(obj2)}`); //need to access objects called in eqObjects fn call...
  console.log('====')
  } else {
    console.log(`🛑🛑🛑Assertion Failed, ${inspect(obj1)} !== ${inspect(obj2)}`);
  console.log('====')
  }
}; //

let obj1 = {a: '1', b: '3'};
let obj2 = {b: '3', a: '1'};
let obj3 = {a: 1, b: 3};
assertObjectsEqual(eqObjects(obj1, obj2), true, obj1, obj2); // Assertion should pass
assertObjectsEqual(eqObjects(obj1, obj3), false, obj1, obj3); //Assertion should pass
assertObjectsEqual(eqObjects(obj1, obj3), true, obj1, obj3); //Assertion should fail

module.exports = assertObjectsEqual