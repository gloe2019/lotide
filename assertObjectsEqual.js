const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { //first check if arrays are same length
    return false;
  } else {
    let counter = 0;
    for (let i = 0; i < arr1.length; i++) { // loop through each item
      //let counter = 0;
      if (arr1[i] === arr2[i]) { // if values are same, add to accumulator (counter)
        counter += 1;
      }
    } //console.log(counter); --> verification test
    if (counter === arr1.length) {
      return true;
    } else {
      return false;
    }
  }
};

const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (const key of obj1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      continue;
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
  //return `${object1} === ${object2}`;
  
};


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