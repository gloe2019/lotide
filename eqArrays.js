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
  if (arr1.length !== arr2.length) { //first check if arrays are same length
    return false;
  } else {
    //console.log(`${arr1} is the same length as ${arr2}`);
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

assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(eqArrays(['1','2','3'], ['1','2', 3]), false);
assertEqual(eqArrays(['alpha','tango','foxtrot'], ['alpha','echo', 'foxtrot']), false);
assertEqual(eqArrays(['alpha','tango','foxtrot'], ['alpha','tango', 'foxtrot']), true);
