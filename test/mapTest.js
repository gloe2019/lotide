const assert = require('chai').assert
const map = require('../map')

describe("map", () => {
    it('should return array of first letters only when given an array of words and callback word => word[0]', () => {
        const words = ["ground", "control", "to", "major", "tom"];
        callback = word => word[0];
        const expectedOutput = ['g', 'c', 't', 'm', 't']
        assert.deepEqual(map(words, callback), expectedOutput)
    })
})
