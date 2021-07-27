const assert = require('chai').assert
const letterPositions = require('../letterPositions')

describe("letterPositions", () => {
    it("should display indices of letters when provided 'lighthouse labs' as input", () => {
        const sentence = 'lighthouse labs'
        expectedOutput = {
            l: [ 0, 10 ],
            i: [ 1 ],
            g: [ 2 ],
            h: [ 3, 5 ],
            t: [ 4 ],
            o: [ 6 ],
            u: [ 7 ],
            s: [ 8, 13 ],
            e: [ 9 ],
            a: [ 11 ],
            b: [ 12 ]
          }
        assert.deepEqual(letterPositions(sentence), expectedOutput)
    })
    it('should return empty object when nothing is passed in', () => {
        assert.deepEqual(letterPositions(), {})
    })
})
