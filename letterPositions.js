const letterPositions = function(sentence) {
  const results = {};


  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char === " ") {
      continue;
    }
    if (char in results) {

      results[char].push(i);

    } else {
      results[char] = [i];
    }
  }

  return results;
};

console.log(letterPositions("lighthouse in the house"));

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

assertArraysEqual(letterPositions("hello").e, [1]);

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `☠ 🚫 Assertion Failed: ${arguments[0]} !== ${arguments[1]}`;
  }
  return `😎😎 Assertion Passed: ${arguments[0]} === ${arguments[1]}`;

};

// TEST CODE

console.log(assertEqual(1, 1));