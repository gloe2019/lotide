const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
/* AssertEqual Test Cases
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual(1, 4);
*/

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    //first check if arrays are same length
    return false;
  } else {
    //console.log(`${arr1} is the same length as ${arr2}`);
    let counter = 0;
    for (let i = 0; i < arr1.length; i++) {
      // loop through each item
      //let counter = 0;
      if (arr1[i] === arr2[i]) {
        // if values are same, add to accumulator (counter)
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

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result === true) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual([101, 23, 35, 49], [101, 23, 35, 49]); //shoud pass
assertArraysEqual(["alpha", "tango", "foxtrot"], ["alpha", "echo", "foxtrot"]); //should fail
assertArraysEqual(["alpha", "tango", "foxtrot"], ["alpha", "tango", "foxtrot"]); //should pass
assertArraysEqual([1, 2, 3], [1, 2, "3"]); //should fail