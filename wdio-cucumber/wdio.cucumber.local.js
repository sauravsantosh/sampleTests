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
