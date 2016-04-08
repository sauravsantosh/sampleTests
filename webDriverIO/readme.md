## Installation and Environment SetUp:

- `Download and Install GitBash, Nodejs, Chrome and NPM (Set PATH in environment variables)`
- `Download and Install Java JDK 1.7+ (Set PATH in environment variables)`
- `Download and Install Chrome and Internet Explorer driver (Set PATH in environment variables)`
- `Download Selenium Server 2.4x `

Example of Environment Variables set-up :

- `CHROME_BIN = C:\Program Files (x86)\Google\Chrome\Application`
- `CHROME_DRIVER = C:\Dev\workspace\`
- `DEVTOOLS_PATH = %NPM_PREFIX%;%NODE_HOME%;%M2_HOME%`
- `JAVA_HOME = C:\Program Files\Java\jdk1.8.0_65`
- `NODE_HOME = C:\Dev\devtools\bin\nodejs`
- `NPM_PREFIX = C:\Dev\devtools\bin\npm`
- `PATH = C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\Program Files\Java\jdk1.8.0_65;C:\Dev\devtools\bin\nodejs;C:\Dev\devtools\bin\npm;C:\Users\S_Santosh\AppData\Roaming\npm;%CHROME_BIN%;%CHROME_DRIVER%`

## NPM Install Framework and Libraries:

- `Please verify npm config : npm config list`
- `To set a new value : npm config set registry <new_value>`

- `Open gitBash and run : npm install -g webdriverio (for global), npm install webdriverio (for local)`
- `npm install -g mocha (for global), npm install mocha (for local)` 
- `npm install -g chai (for global), npm install chai (for local)` 
- `npm install -g chai-as-promised (for global), npm install chai-as-promised (for local)` 

## Set environment:

- `export ENV="http://webdriver.io"`
- `export SAUCE_USERNAME="enter sauceLab username"`
- `export SAUCE_ACCESS_KEY="enter sauceLab key"`

### Local setup:

 - `npm install`
 - `java -jar selenium-server-standalone-2.xx.x.jar`
 
#### Run locally:

 - `wdio wdio.local.js`

### [SauceLabs setup](https://wiki.saucelabs.com/display/DOCS/Setting+Up+Sauce+Connect):

 - `same as local for packages`
 - `start sauceconnect bin/sc -u YOUR_USERNAME -k YOUR_ACCESS_KEY`
 
#### Run in cloud (saucelabs)

 - `wdio wdio.saucelabs.js`
