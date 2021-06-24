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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) !== Array.isArray(object2[key])) {
      return false;
    }

    if (Array.isArray(object1[key] && Array.isArray(object2[key]))) {
      return eqArrays(object1[key], object2[key]);
    }

    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;

};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (!eqObjects(actual, expected)) {
    console.log(`🚫☠ ${inspect(actual)} is NOT equal to ${inspect(expected)}`);
  }
  console.log(`✔✔ ${inspect(actual)} is Equal to ${inspect(expected)}`);
};

const ab = {
  a: "1",
  b: "2"
};
const ba = {
  b: "2",
  a: "1"
};

console.log(assertObjectsEqual(ab, ba));