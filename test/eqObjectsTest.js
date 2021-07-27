const { expect } = require('chai')
const chai = require('chai')
const eqObjects = require('../eqObjects')
const assert = chai.assert


describe('eqObjects', () => {
    it('should return true when passed in objects with same keys/value pair, written in opposite order', () => {
        const ab = {a: '1', b: '2'}
        const ba = {b: '2', a: '1'}
        assert.deepEqual(eqObjects(ab, ba), true)
    })
    it('should return false when input objects are not a perfect match', () => {
        const abc = {a: '1', b: '2', c: '3'}
        const abd = {a: '1', b: '2', d: '4'}
        assert.deepEqual(eqObjects(abc, abd), false)
    })
    it('should return true for objects with nested array that are perfect matches', () => {
        const cd = {c: '1', d: ['2', 3]}
        const dc = {d: ['2',3], c: '1'}
        expect(eqObjects(cd, dc)).to.eql(true)        
    })
})
