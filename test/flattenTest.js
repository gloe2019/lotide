const assert = require('chai').assert
const flatten = require('../flatten')


describe("flatten", () => {
    it("should return [1,2,3,4,5] for [1,[2,3,4],5]", () => {
        assert.deepEqual(flatten([1,[2,3,4],5]), [1,2,3,4,5])
    });
    it("should return ['keys', 'notebook', 'phone', 'earphones', 'chargers', 'bag] for ['keys', 'notebook', ['phone', 'earphones', 'chargers'], bag]", () => {
        assert.deepEqual(flatten(['keys', 'notebook', ['phone', 'earphones', 'chargers'], 'bag']), ['keys', 'notebook', 'phone', 'earphones', 'chargers', 'bag'])
    })
})
