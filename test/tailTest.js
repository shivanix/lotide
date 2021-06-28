const assert = require('chai').assert;
const tail = require('../tail')


describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns [3,6,7,9,3] for [1, 3, 6, 7, 9, 3]", () => {
    assert.deepEqual(tail([1,3,6,7,9,3]), [3,6,7,9,3]);
  });
  })

