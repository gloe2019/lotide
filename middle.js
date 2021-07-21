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

const middle = function(arr) {
  let arrayLength = arr.length;
  //console.log(arrayLength);
  let middleIndex = Math.ceil(arrayLength / 2);
  //console.log(middleIndex);
  let arrMiddle = [];
  if (arrayLength <= 2) {
    return [];
  } else if (arrayLength % 2 !== 0) {
    arrMiddle.push(arr[middleIndex - 1]);
    return arrMiddle;
  } else {
    arrMiddle.push(arr[middleIndex - 1]);
    arrMiddle.push(arr[middleIndex]);
    return arrMiddle;
  }
};

//Test Cases
//console.log(assertArraysEqual((middle([])), []));
console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
