exports.config = {
  /**
     * specify test files
     */
    specs: [
         './automation-test/hello-world.test.js'
        ],

    exclude: [ ' '

    ],
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1, wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 5; all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests. (v4 features)
    //
    //
    maxInstances: 5,
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
    baseUrl: process.env.ENV,
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
