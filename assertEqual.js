// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `☠ 🚫 Assertion Failed: ${arguments[0]} !== ${arguments[1]}`;
  } else {
    return `😎😎 Assertion Passed: ${arguments[0]} === ${arguments[1]}`;
  }
};

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));