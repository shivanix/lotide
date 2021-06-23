const without = function(source, items) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    let idx = items.indexOf(source[i]);
    if (idx < 0) {
      output.push(source[i]);
    }
  }
  return output;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const assertArraysEqual = function(array1, array2) {

  if (array1.length !== array2.length) {
    console.log(`🚫☠ ${array1} is NOT equal to ${array2}`);
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🚫☠ ${array1} is NOT equal to ${array2}`);
    }
  }

  console.log(`✔✔ ${array1} is Equal to ${array2}`);
};

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
