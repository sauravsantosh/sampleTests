Feature: Example feature
  As a user of WebdriverIO
  I should be able to use different commands
  to get informations about elements on the page

Scenario Outline: Get title of websites
     Given I go on the website "<url>"
     Then should the title of the page be "<title>"


    Examples:
    | url | title |
    | http://webdriver.io/ | WebdriverIO - Selenium 2.0 javascript bindings for nodejs |
    | https://mochajs.org/ | Mocha - the fun, simple, flexible JavaScript test framework |
    | http://chaijs.com/ | Chai |
