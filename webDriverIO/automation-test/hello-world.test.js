// Required Libraries
var webdriverio = require('webdriverio');

// a test suite

describe('Validate WebdriverIO page title', function() {

// test scenario

    it('should show correct page title', function() {
        return browser
             // getTitle and validate against the text entered         
            .getTitle().should.eventually.be.equal('WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
    });
});
