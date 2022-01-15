const { add } = require('../mymath.js');
const assert = require('assert');

describe('The add operation', function () {
    it('should be able to add numbers', function () {
        assert.equal(9, add(5, 4));
    });

    it('should be able to concatenate strings', function () {
        assert.equal('ab', add('a', 'b'));
    })
})

console.log(add(5, 4));