const assertArraysEqual = function(array1, array2) {

  if (array1.length !== array2.length) {
    return `🚫☠ ${array1} is NOT equal to ${array2}`;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return `🚫☠ ${array1} is NOT equal to ${array2}`;
    }
  }

  return `✔✔ ${array1} is Equal to ${array2}`;
};
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false)
console.log(assertArraysEqual([1, 2], [3, 2, 1])); // => false)

