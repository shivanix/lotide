// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    console.log(item);
  }

  for (let item in itemsToCount) {
    let count = 0;
    if (itemsToCount[item] === false) {
      continue;
    }

    for (let i = 0; i < allItems.length; i++) {
      if (allItems[i] === item) {
        count++;
      }
    }
    if (count > 0) {
      results[item] = count;
    }
  }

  return results;

};

const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    return `☠ 🚫 Assertion Failed: ${arguments[0]} !== ${arguments[1]}`;
  }
  return `😎😎 Assertion Passed: ${arguments[0]} === ${arguments[1]}`;

};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false
});

console.log(result1)

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));
