## Install Nightwatch

`npm install nightwatch -g` for global

## Configuration

The test runner expects a configuration file to be passed, using by default a nightwatch.json file from the current directory, if present. Let's create one in the project's root folder

## Run Test

- `nightwatch --test nightwatch-tests/tests/webdriverio.test.js` - runs single test file
- `nightwatch --testcase nightwatch-tests/tests/*.js` - runs all test files in a folder

Remember always to call the .end() method when you want to close your test, in order for the Selenium session to be properly closed.
