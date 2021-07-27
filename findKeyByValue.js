//findKeyByValue should scan the object and return the first key with the given value...
//i'm looping through an object, so i'll use the for of loop
const findKeyByValue = function(obj, value) {
  for (const item in obj) {
    //console.log(item); //this returns the keys
    if (value === obj[item]) {
      return item;
    }
  }

};


module.exports = findKeyByValue