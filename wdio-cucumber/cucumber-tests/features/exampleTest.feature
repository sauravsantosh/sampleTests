Feature: Example feature
  As a user of WebdriverIO
  I should be able to use different commands
  to get informations about elements on the page

Scenario: Get title of website
    Given I go on the website "https://github.com/"
    Then  should the title of the page be "How people build software · GitHub"

Scenario: Get title of webdriverio website
   Given I go on the website "http://webdriver.io/"
   Then should the title of the page be "WebdriverIO - Selenium 2.0 javascript bindings for nodejs"

   Scenario: Foo Bar
     Given I go on the website "http://webdriver.io"
     When  I click on link "[href*='/guide.html']"
     Then  should the title of the page be "WebdriverIO - Developer Guide"
