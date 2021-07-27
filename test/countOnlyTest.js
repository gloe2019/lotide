const assert = require('chai').assert
const countOnly = require('../countOnly')

describe("countOnly", () => {
    it('should return counts of true items in provided object', () => {
        const names = ['Karl', 'Salima', 'Fang', 'Kavith', 'Agouhanna', 'Fang', 'Jason', 'Karl', 'Joe', 'Salima', 'Karl']
        const itemsToCount = {Jason: true, 'Karl': true, 'Fang': false, 'Agouhanna': false, 'Salima': true}
        const expected = {Jason: 1, Salima: 2, Karl: 3}
        assert.deepEqual(countOnly(names, itemsToCount), expected)
    })
    it('should return empty object if no true items are provided in itemsToCount', () => {
        const candy = ['M&Ms', 'Twizzlers', 'Jolly Ranchers', 'Tootsie Roll']
        const itemsToCount = {'M&Ms': false, 'Jolly Ranchers': false, 'Tootsie Roll': false, 'Twizzlers': false}
        const expected = {}
        assert.deepEqual(countOnly(candy, itemsToCount), expected)
    })
})
  
  module.exports = countOnly