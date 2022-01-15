const { add, mult } = require('../mymath.js');
const assert = require('assert');

describe('The mult operation', function () {
    it('should be able to multiply numbers', function () {
        assert.equal(20, mult(5, 4));
    });

    it('should output NaN if it is called with arguments of type string', function () {
        assert.equal(Number.NaN, mult('a', 'b'));
    })
})

console.log(add(5, 4));