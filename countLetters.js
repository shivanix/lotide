const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `☠ 🚫 Assertion Failed: ${arguments[0]} !== ${arguments[1]}`;
  }
  return `😎😎 Assertion Passed: ${arguments[0]} === ${arguments[1]}`;

};

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));

const countLetters = function(sentence) {
  let output = {};
  for (let char of sentence) {
    if (char === " ") {
      continue;
    }
    if (char in output) {
      output[char]++;
      continue;
    }
    output[char] = 1;
  }
  return output;
};

console.log(countLetters("lighthouse in the house"));