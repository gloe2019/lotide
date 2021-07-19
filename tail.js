const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* Assert Equal Test Cases
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual(1, 4);
assertEqual('Sweet', 'Bitter');
assertEqual('Sweet', 'Sweet');
*/

// Tail function
const tail = function(arr) {
  let tailArr = [];
  tailArr = arr.slice(1);
  return tailArr;
};
// Testing tail with an array of numbers:
const testArr = [0,1,2,3,4,5];
let result = tail(testArr);
assertEqual(testArr.length, 6); // the original array shouldhave a length of 6
assertEqual(result.length, 5); //the modified array should have a length of 5
// Testing tail with an array of words:
const words = ['The', 'Lighthouse', 'Labs', 'Bootcamp'];
result = tail(words);
assertEqual(result[0], 'Lighthouse');
assertEqual(result.length, 3);
//Testing tail with an array with 1 element:
const singleArr = ['Lonely'];
result = tail(singleArr);
assertEqual(singleArr.length, 0);
assertEqual(result.length, 0);
assertEqual(result[0], undefined);
