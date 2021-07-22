const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
/* First attempt: function does not work for objects that are same length but have different keys/values - imperfect match
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // check if both objects have the same number of keys.
    let objLength = Object.keys(object1).length;
    let samekey = [];
    //check if the value of each key in object is same as the value for that same key in the other object
    for (let i = 0; i < objLength; i++) {
      for (let j = 0; j < objLength; j++) {
        if (Object.keys(object1)[j] === Object.keys(object2)[i]) {
          samekey.push(Object.keys(object1)[j]);
        }
      }
    }
    console.log(samekey);
    return true;
  } else {
    return false;
  }
};
*/

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key of Object.keys(object1)) {
      console.log(key);
      if (object1[key] === object2[key]) {
        continue;
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
