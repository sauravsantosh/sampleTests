Feature: Example feature
  As a user of WebdriverIO
  I should be able to use different commands
  to get informations about elements on the page

Scenario: Get title of website
    Given I go on the website "https://github.com/"
    Then  should the title of the page be "How people build software · GitHub"
