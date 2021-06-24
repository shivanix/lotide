const assertArraysEqual = function(array1, array2) {

  if (!eqArrays(array1, array2)) {
    console.log(`🚫☠ ${array1} is NOT equal to ${array2}`);
    return;
  }
  console.log(`✔✔ ${array1} is Equal to ${array2}`);
};

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
//console.log(results1);

const results2 = map(words, word => word[0] === "t");
//console.log(results2);

const results3 = map(words, word => {
  if (word[0] === 't') {
    return word.toUpperCase();
  }
  return word;
});
//console.log(results3)


let expected1 = ["g", "c", "t", "m", "t"];
assertArraysEqual(results1, expected1);

let expected2 = [false, false, true, false, true];
assertArraysEqual(results2, expected2);

let expected3 = ["ground", "control", "TO", "major", "TOM"];
assertArraysEqual(results3, expected3);