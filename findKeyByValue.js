const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

//Test Case #1: Best TV Shows By Genre
const bestTVShowsByGenre = {'sci_fi': 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'};
assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');

//Test Case #2:
const favSongsByArtist = {coldplay: 'In My Place', keane: 'This is the last time', coin: 'Boyfriend', travis: 'Waving at the Window' };
assertEqual(findKeyByValue(favSongsByArtist, 'Boyfriend'), 'coin');

module.exports = findKeyByValue