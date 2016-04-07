exports.config = {
  /**
     * specify test files
     */
    specs: [
         './hello-world.test.js'
    ],
    exclude: [
    ],

    /**
     * capabilities
     */
    capabilities: [{
      browserName: 'chrome'
    }],

    user: process.env.SAUCE_USERNAME,
    key:  process.env.SAUCE_ACCESS_KEY,
    host: 'localhost',
    port: 4445,
    logLevel: 'silent',


    coloredLogs: true,
    baseUrl: process.env.FUSION_ENV,
    waitforTimeout: 40000,
    framework: 'mocha',

    reporter: 'spec',
    reporterOptions: {
        outputDir: './'
    },

    mochaOpts: {
        ui: 'bdd',
        timeout: 25000
    },

    /**
     * hooks
     */
    onPrepare: function() {
    },

    before: function() {
      var chai = require('chai');
      var chaiAsPromised = require('chai-as-promised');

      chai.use(chaiAsPromised);
      expect = chai.expect;
      chai.Should();
    },

    onComplete: function() {
    }

};
