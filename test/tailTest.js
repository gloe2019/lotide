const assert = require('chai').assert
const tail = require('../tail')

describe("tail", () => {
    it("returns [2, 3] for [1, 2, 3]", () => {
      assert.deepEqual(tail([1, 2, 3]), [2, 3]);
    });
    it("returns ['Lighthouse', 'Labs', 'Bootcamp'] for ['The', 'Lighthouse', 'Labs', 'Bootcamp']", () => {
        assert.deepEqual(tail(['The', 'Lighthouse', 'Labs', 'Bootcamp']), ['Lighthouse', 'Labs', 'Bootcamp'])
    })
    it("returns [] for a single-item array ['Lonely']", () => {
        assert.deepEqual(tail(['Lonely']), [])
    })
    
  });
