// conf.js
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./automation-tests/spec.js'],

  capabilities: {
    browserName: 'chrome'
  },

  // multiCapabilities: [{
  //   browserName: 'firefox'
  // }, {
  //   browserName: 'chrome'
  // }],
  jasmineNodeOpts: {
  showColors: true, // Use colors in the command line report.
},
onPrepare: function () {
  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displayStacktrace: true
    },
    summary: {
      displayDuration: false
    }
  }));
  }
}
