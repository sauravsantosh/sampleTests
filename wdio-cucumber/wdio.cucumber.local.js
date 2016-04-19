exports.config = {

    /**
     * server configurations
     */
    host: 'localhost',
    port: 4444,

    /**
     * specify test files
     */
    specs: [
        './cucumber-tests/features/*.feature'
    ],
    exclude: [

    ],
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1, wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 5; all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests. (v4 features)
    //
    //
    maxInstances: 1,
    /**
     * capabilities
     */
    capabilities: [{
        browserName: 'firefox'
    }],

    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: 'shots',
    waitforTimeout: 10000,
    framework: 'cucumber',

    reporters: ['dot'],
    reporterOptions: {
        outputDir: './'
    },

    cucumberOpts: {
        require: ['./cucumber-tests/step-definitions.js']
    }
};
