module.exports = {
  'Demo WebdriverIO Test' : function (browser) {
    browser
      .url('http://webdriver.io')
      .waitForElementPresent('body', 1000);
  },

  'part two' : function(browser) {
    browser
      .click('.container p a.button.getstarted')
      .pause(3000)

      .assert.title("WebdriverIO - Developer Guide")
      .end();
  }
};
