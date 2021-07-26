const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')

//Test Cases
console.log(assertArraysEqual((middle([])), []));
console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
