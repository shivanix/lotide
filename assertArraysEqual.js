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

assertArraysEqual([1,2,3], [1,4]);