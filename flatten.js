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

const flatten = function(items) {
  let flatArr = [];
  for (item of items) {
    if (Array.isArray(item) === true) {
      for (let i = 0; i < item.length; i++) {
        flatArr.push(item[i]);
      }
    } else {
      flatArr.push(item);
    }
  }
  return flatArr;
};

//Test case 1: Numbers Array
const nums = [1, 2, 3, [4, 5], 6, [7, 8, 9], 10];
console.log(flatten(nums));
assertArraysEqual(flatten(nums), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Test case 2: Array of items
const items = ["keys", "notebook", ["phone", "earphones", "chargers"], "bag"];
console.log(flatten(items));
assertArraysEqual(flatten(items), [
  "keys",
  "notebook",
  "phone",
  "earphones",
  "chargers",
  "bag",
]);


module.exports = flatten