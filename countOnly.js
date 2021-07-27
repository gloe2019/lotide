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

module.exports = countOnly