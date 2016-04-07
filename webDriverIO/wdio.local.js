exports.config = {
  /**
     * specify test files
     */
    specs: [
         './automation-test/hello-world.test.js'
        ],

    exclude: [ ' '

    ],

    /**
     * capabilities
     */
    capabilities: [{
        browserName: 'chrome'
    }],

    /**
     * test configurations
     */
    host: 'localhost',
    port: 4444,
    logLevel: 'debug',

    coloredLogs: true,
    baseUrl: 'http://webdriver.io',
    waitforTimeout: 25000,
    framework: 'mocha',

    reporter: 'spec',
    reporterOptions: {
        outputDir: './'
    },
    mochaOpts: {
        ui: 'bdd',
        timeout: 25000
    },

    onPrepare: function() {
    },

    before: function() {
      var chai = require('chai');
      var chaiAsPromised = require('chai-as-promised');

      chai.use(chaiAsPromised);
      expect = chai.expect;
      chai.Should();
    },

    after: function(failures, pid) {
    },

    onComplete: function() {
    }
};
