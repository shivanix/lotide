const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle');

//Test code
console.log(assertArraysEqual(middle([1, 2, 4]),[2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]),[2,3]));
console.log(assertArraysEqual(middle([1, 2]),[]));
