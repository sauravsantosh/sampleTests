Feature: Example feature
  As a user of WebdriverIO
  I should be able to use different commands
  to get informations about elements on the page

Scenario: Get title of website
    Given I go on the website "https://github.com/"
    Then  should the title of the page be "How people build software · GitHub"
    
Scenario: Get title of website
    Given I go on the website "https://google.co.uk/"
    Then  should the title of the page be "Google"

Scenario: Search and get results
   Given I go on the website "https://google.co.uk/"
   And I click on searchbox "#lst-ib" and enter search keyword "webdriverio"
   When I click on link "a[href='http://webdriver.io/']"
   Then should the title of the page be "WebdriverIO - Selenium 2.0 javascript bindings for nodejs"    
