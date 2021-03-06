/**
 * to run these tests you need install Cucumber.js on your machine
 * take a look at https://github.com/cucumber/cucumber-js for more informations
 *
 * first, install Cucumber.js via NPM
 * $ npm install -g cucumber
 *
 * then go into the cucumber directory and start the tests with
 * $ cucumber.js
 */

var assert = require('assert'),
    tmpResult;

module.exports = function(){

    this.Given(/^I go on the website "([^"]*)"$/, function(url) {
        browser.url(url);
    });

    this.Then(/^should the element "([^"]*)" be (\d+)px wide and (\d+)px high$/, function(selector, width, height) {
        var elemSize = browser.getElementSize(selector);
        assert.equal(elemSize.width, width, 'width of element is ' + elemSize.width + ' but should be ' + width);
        assert.equal(elemSize.height, height, 'height of element is ' + elemSize.height + ' but should be ' + height);
    });

    // this.Then(/^I click on link "([^"]*)"$/, (selector) => {
    //     browser.click(selector)
    // })

    this.When(/^I click on link "([^"]*)"$/, function (selector){
        browser.waitForVisible(selector)
        browser.click(selector)
    });

    this.When(/^I click on searchbox "([^"]*)" and enter search keyword "([^"]*)"$/, function (selector, value){
        browser.click(selector)
        browser.setValue(selector, value)
        browser.keys("\ue007")
    });

    this.When(/^user enters username "([^"]*)"$/, function (selector){
        browser.pause(3000)
        browser.setValue(selector, 'username')
    });

    this.When(/^user enters password "([^"]*)"$/, function (selector){
        browser.pause(3000)
        browser.setValue(selector, 'password')
    });

    this.Then(/^should component be visible "([^"]*)"$/, function (selector){
        browser.waitForVisible(selector)
        var status = browser.isVisible(selector)
        assert.equal(status, true)
    });

    this.Then(/^should the title of the page be "([^"]*)"$/, (expectedTitle) => {
        assert.equal(browser.getTitle(), expectedTitle)
      });

};
