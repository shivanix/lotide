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


const takeUntil = function(array, callback) {

  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) {
      return array.slice(0, index);
    }
  }

};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log("Results 1:", results1);

console.log(assertArraysEqual(data1, results1));


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log("Results 2:", results2);

console.log(assertArraysEqual(data2, results2));