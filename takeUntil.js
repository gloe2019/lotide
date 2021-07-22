//takeUntil function will take in two parameters -> the array to wowk with, and the callback
//takeUntil must return a slice of the array with elements taken from the beginning
//the callback should be provided a single value - the item in the array
const takeUntil = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  } return results;
};

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

const data1 = [1,2,5,7,2,-1,2,4,5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1,2,5,7,2]);

const strings = ['ground', 'control', 'to', 'major', 'tom', 'commencing', 'countdown', ',', 'engines', 'on' ];
const output = takeUntil(strings, x => x === 'commencing');
assertArraysEqual(output, ['ground', 'control', 'to', 'major', 'tom']);


