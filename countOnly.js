const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//allItems: array of strings to look through
//itemstoCount: object specifying what to count
// countOnly must return an object that represents the stats of strings found in the input array
const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    //console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item]++;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  'Karl',
  "Salima",
  "Fang",
  "Joe",
  'Karl'
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
  Karl: true
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Karl"], 3);
assertEqual(result1["Agouhanna"], undefined);


module.exports = countOnly