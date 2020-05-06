const assert = require('chai').assert;
const primeGap = require('../01-prime-numbers/gap-in-primes');

describe('Gap in Primes', function () {
	it('La función debe devolver: [101, 103]', function () {
		assert.equal(primeGap(2, 100, 110).toString(), [101, 103]);
	});
	it('La función debe devolver: [103, 107]', function () {
		assert.equal(primeGap(4, 100, 110).toString(), [103, 107]);
	});
	it('La función debe devolver: null', function () {
		assert.equal(primeGap(6, 100, 110), null);
	});
});
