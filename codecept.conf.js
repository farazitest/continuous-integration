exports.config = {
  tests: 'tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://dokan.ajaira.website/',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'continuous-integration',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
