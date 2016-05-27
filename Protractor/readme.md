
### Prerequisites

Protractor is a Node.js program. To run, you will need to have Node.js installed.

By default, Protractor uses the Jasmine test framework for its testing interface. 

This tutorial will set up a test using a local standalone Selenium Server to control browsers. You will need to have the Java Development Kit (JDK) installed to run the standalone Selenium Server. Check this by running java -version from the command line.
Setup

### Setup

Use npm to install Protractor globally with:

```javascript
npm install -g protractor
```

This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working.

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

```javascript
webdriver-manager update
```

Now start up a server with:

```javascript
webdriver-manager start
```

This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. Leave this server running throughout the tutorial. You can see information about the status of the server at http://localhost:4444/wd/hub.

OR
```javascript
java -jar selenium-server-standalone-2.xx.x.jar
```


