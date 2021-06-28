const assert = require('chai').assert;
const tail = require('../middle')


describe("#middle", () => {
  it("returns [2] for [1, 2, 4]", () => {
    assert.deepEqual(tail([1, 2, 4]), [2]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(tail([1, 2]), []);
  });
  })