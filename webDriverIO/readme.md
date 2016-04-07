## Set environment

- `export ENV="http://webdriver.io"`
- `export SAUCE_USERNAME="enter sauceLab username"`
- `export SAUCE_ACCESS_KEY="enter sauceLab key"`

### Local setup

 - `npm install`
 - `java -jar selenium-server-standalone-2.xx.x.jar`
 
#### Run locally

 - `wdio wdio.local.js`

### [SauceLabs setup](https://wiki.saucelabs.com/display/DOCS/Setting+Up+Sauce+Connect)

 - `same as local for packages`
 - `start sauceconnect bin/sc -u YOUR_USERNAME -k YOUR_ACCESS_KEY`
 
#### Run in cloud (saucelabs)

 - `wdio wdio.saucelabs.js`
