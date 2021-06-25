const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `☠ 🚫 Assertion Failed: ${arguments[0]} !== ${arguments[1]}`;
  }
  return `😎😎 Assertion Passed: ${arguments[0]} === ${arguments[1]}`;

};

const findKey = function(object, callback) {
  for (const key of Object.keys(object)) {
    const subObject = object[key];
    if (callback(subObject)) {
      return key;
    }

  }
  return undefined;
};

let obj = {
  "Blue Hill": {
    stars: 1
  },
  "Akaleri": {
    stars: 3
  },
  "noma": {
    stars: 2
  },
  "elBulli": {
    stars: 3
  },
  "Ora": {
    stars: 2
  },
  "Akelarre": {
    stars: 3
  }
};
let foundKey = findKey(obj, x => x.stars === 2);


console.log(assertEqual(foundKey, "noma")); // => "noma"