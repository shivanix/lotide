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

  if (!eqArrays(array1, array2)) {
    console.log(`🚫☠ ${array1} is NOT equal to ${array2}`);
    return;
  }

  console.log(`✔✔ ${array1} is Equal to ${array2}`);
};

module.exports = assertArraysEqual;
