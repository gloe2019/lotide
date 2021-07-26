const assertEqual = require('./assertEqual')
// Tail function
const tail = function(arr) {
  let tailArr = [];
  tailArr = arr.slice(1);
  return tailArr;
};

module.exports = tail
