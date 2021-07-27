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



module.exports = countLetters