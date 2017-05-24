var assert = require('assert');

describe('demo 2', function() {

  beforeEach(function() {
    browser.pause(8000);
  });

  it('login failure', function() {
    browser.url('http://demo.keystonejs.com/keystone/signin');
    browser.element('[name=email]').setValue('demo@keystonejs.com');
    browser.element('[name=password]').setValue('1111');
    browser.click('button[type=submit]');
    browser.waitForExist('[data-alert-type=danger]');
    const message = browser.getText('[data-alert-type=danger]');
    assert.equal(message,
      'The email and password you entered are not valid.');
  });

  it('login successful', function() {
    browser.url('http://demo.keystonejs.com/keystone/signin');
    browser.element('[name=email]').setValue('demo@keystonejs.com');
    browser.element('[name=password]').setValue('demo');
    browser.click('button[type=submit]');
    browser.waitForExist('[href="/keystone/signout"]');
  });

  it('logout', function() {
    browser.click('[href="/keystone/signout"]');
    browser.waitForExist('[data-alert-type=info]');
  });

});
