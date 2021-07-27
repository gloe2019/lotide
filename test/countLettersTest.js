const assert = require('chai').assert
const countLetters = require('../countLetters')

describe("countLetters", () => {
    it('should return object with letter counts for the provided string', () => {
        const sentence = 'this is the last time!'
        const expectedOutput = { t: 4, h: 2, i: 3, s: 3, e: 2, l: 1, a: 1, m: 1, '!': 1 }
        assert.deepEqual(countLetters(sentence), expectedOutput)
    })
})
