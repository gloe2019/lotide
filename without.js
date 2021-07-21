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


const without = function(source, itemsToRemove) {
  let resultarr = [];

  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i]) === false) {
      resultarr.push(source[i]);
    }
  }
  console.log(resultarr);
};

// Test case #1: Words Array
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); //['hello', 'world']
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//Test case #2: Candies array
const candyHaul = [
  "kit kat",
  "skittles",
  "twizzlers",
  "candy corn",
  "reese's",
  "jolly ranchers",
  "tootsie rolls",
  "twix",
];
const shittyCandies = [
  "twizzlers",
  "candy corn",
  "jolly ranchers",
  "tootsie rolls",
];
without(candyHaul, shittyCandies);
assertArraysEqual(candyHaul, [
  "kit kat",
  "skittles",
  "twizzlers",
  "candy corn",
  "reese's",
  "jolly ranchers",
  "tootsie rolls",
  "twix",
]);

//Test Case #3: Numbers Array
const nums = [1, 2, 3, 4, 5];
const removenums = [3, 4, 5, 6, 7, 8, 9, 10];
without(nums, removenums);
