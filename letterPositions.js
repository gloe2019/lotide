const letterPositions = function(sentence) {
  const results = {};
  let cleanedStr = sentence.split(' ').join('');
  //update results
  let positionarr = [];

  for (let i = 0; i < cleanedStr.length; i++) { //
    //console.log(cleanedStr[i]);
    for (let j = 0; j < cleanedStr.length; j++) {
      if (cleanedStr[j] === cleanedStr[i]) {
        positionarr.push(j);
      }
    }
    if (!results[cleanedStr[i]]) { //if the letter does not exist as a key in the results object, add it in and make the property the positionarr array.
      results[cleanedStr[i]] = positionarr;
    }
    positionarr = [];
      
  }
  return results;
};


module.exports = letterPositions


