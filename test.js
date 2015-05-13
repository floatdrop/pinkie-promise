'use strict';
var assert = require('assert');
var pinkiePromise = require('./');
var pinkie = require('pinkie');

it('should ponyfill Promise', function () {
	if (global.Promise) {
		assert.equal(pinkiePromise, global.Promise);
	} else {
		assert.equal(pinkiePromise, pinkie);
	}
});
