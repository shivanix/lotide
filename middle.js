// TEST/ASSERTION FUNCTIONS

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

const assertArraysEqual = function(array1, array2) {

  if (array1.length !== array2.length) {
    console.log(`🚫☠ ${array1} is NOT equal to ${array2}`);
    return;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🚫☠ ${array1} is NOT equal to ${array2}`);
      break;
    }
  }

  console.log(`✔✔ ${array1} is Equal to ${array2}`);
};

assertArraysEqual([1, 2, 3], [1, 4]);

//ACTUAL FUNCTION

const middle = function(array) {
  const arrayLength = array.length;
  if (arrayLength <= 2) {
    return [];
  }
  if (arrayLength % 2 === 0) {
    return [array[(arrayLength / 2) - 1], (array[arrayLength / 2])];

  }

  return [array[Math.floor(arrayLength / 2)]];

};
console.log(middle([1, 2, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2]));
