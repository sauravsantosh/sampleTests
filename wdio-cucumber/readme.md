## Install Cucumber

- `npm install cucumber` for local
- `npm install cucumber -g ` for global

## Install wdio cucumber framework

- `npm install wdio-cucumber-framework` for local
- `npm install wdio-cucumber-framework -g ` for global

## Run Tests

- `wdio wdio.cucumber.local.js`


# Cucumber.js
   
*Cucumber*, the [popular Behaviour-Driven Development tool](https://cucumber.io), brought to your JavaScript stack.

Cucumber is a tool for running automated tests written in plain language. Because they're
written in plain language, they can be read by anyone on your team. Because they can be
read by anyone, you can use them to help improve communication, collaboration and trust on
your team.

Cucumber.js is the JavaScript implementation or Cucumber and it runs on both Node.js and *modern* web browsers. 

# WDIO Cucumber - [wdio-cucumber-framework](https://github.com/webdriverio/wdio-cucumber-framework)

A WebdriverIO plugin. Adapter for CucumberJS testing framework.

```bash
npm install wdio-cucumber-framework --save-dev
```

## Prerequisites

* [Node.js](https://nodejs.org) or [io.js](https://iojs.org)
* [NPM](https://www.npmjs.com)

Cucumber.js is tested on:

* Node.js 5, 4, 0.12, 0.10, and io.js (see [CI builds](https://travis-ci.org/cucumber/cucumber-js))
* Google Chrome
* Firefox
* Safari

### Features

Features are written with the [Gherkin syntax](https://github.com/cucumber/cucumber/wiki/Gherkin)

``` gherkin
# features/my_feature.feature

Feature: Example feature
  As a user of Cucumber.js
  I want to have documentation on Cucumber
  So that I can concentrate on building awesome applications

  Scenario: Reading documentation
    Given I am on the Cucumber.js GitHub repository
    When I go to the README file
    Then I should see "Usage" as the page title
```

Read more

[Given-When-Then](https://github.com/cucumber/cucumber/wiki/Given-When-Then) - Explanation with examples

#### Step definitions

Step definitions are the glue between features written in Gherkin and the actual system under test. They are written in JavaScript.

Step definitions are contained within one or more wrapper functions.

Those wrappers are run before executing the feature suite. `this` is an object holding important properties like the `Given()`, `When()` and `Then()` functions. Another notable property is `World`; it contains a default `World` constructor that can be either extended or replaced. 

Please refer an example file [here](https://github.com/sauravsantosh/sampleTests/blob/master/wdio-cucumber/cucumber-tests/step-definitions.js)


