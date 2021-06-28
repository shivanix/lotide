const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `☠ 🚫 Assertion Failed: ${arguments[0]} !== ${arguments[1]}`;
  }
  return `😎😎 Assertion Passed: ${arguments[0]} === ${arguments[1]}`;

};


module.exports = assertEqual;