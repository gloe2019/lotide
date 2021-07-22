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
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key of Object.keys(object1)) {
      console.log(key);
      if (object1[key] === object2[key]) {
        if (Array.isArray(object1[key])) {

          if (eqArrays(object1[key], object2[key]) === true) {
            continue;
          }
        }
      } else {
        return false;
      }
    } return true;
  } else {
    return false;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
const abd = { a: "1", b: "2", d: "4" };
assertEqual(eqObjects(abd, abc), false); // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
