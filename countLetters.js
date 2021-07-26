const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let trimmed = sentence.split(" ").join("");
  //console.log(trimmed, trimmed.length);
  let results = {};
  for (const letter of trimmed) {
    if (results[letter]) {
      results[letter]++;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

console.log(countLetters("this is the last time!"));
console.log(countLetters("I am still not fully comfortable with this"));

module.exports = countLetters