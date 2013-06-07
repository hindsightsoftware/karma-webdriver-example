// Karma configuration
// Generated on Wed Jun 05 2013 09:56:05 GMT+0100 (BST)

module.exports = function(karma) {

  var webdriverConfig = {
    url: 'ondemand.saucelabs.com',
    port: 80,
    user: 'SAUCELABS_USERNAME',
    key: 'SAUCELABS_APIKEY'
  }

  karma.defineLauncher('IE7', 'WebDriver', {
    config: webdriverConfig,
    spec: {
      browserName: 'internet explorer',
      platform: 'Windows XP',
      version: '7',
      tags: ['IE7', 'Windows XP'],
      name: 'IE7:Windows XP'
    }
  });

  karma.defineLauncher('Safari5', 'WebDriver', {
    config: webdriverConfig,
    spec: {
      browserName: 'safari',
      platform: 'OS X 10.6',
      version: '5',
      tags: ['Safari5', 'OS X 10.6'],
      name: 'Safari5:OS X 10.6'
    }
  });

  karma.configure({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'Demo.js',
      'DemoSpec.js'
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 7777,


    // cli runner port
    runnerPort: 9100,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: karma.LOG_DISABLE || karma.LOG_ERROR || karma.LOG_WARN || karma.LOG_INFO || karma.LOG_DEBUG
    logLevel: karma.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['IE7', 'Safari5'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
