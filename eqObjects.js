const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')

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
};

// 
module.exports = eqObjects