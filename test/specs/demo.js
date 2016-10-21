const assert = require('assert');

describe('demo 1', function() {

	beforeEach(function() {
		browser.pause(5000);
	});

	it('check website h1 text', function() {
		browser.url('http://keystonejs.com/');
		assert.equal(browser.getText('h1'),
			'Node.js CMS & Web Application Platform');
	});

	it('click get started button', function() {
		browser.click('.btn-primary');
		assert.equal(browser.getText('h1'), 'Get Started');
	});

});
