var webpackCfg = require('./webpack.config');

module.exports = function(config) {
  config.set({
    logLevel: config.LOG_INFO,
    basePath: '',
    browsers: ['PhantomJS'],
    files: [
      'test/loadtests.js'
    ],
    port: 8080,
    captureTimeout: 60000,
    frameworks: ['phantomjs-shim', 'jasmine'],
    client: {
      captureConsole: true,
      mocha: {
      },
      client: {
        args: ['--grep', '<pattern>']
      }
    },
    singleRun: true,
    reporters: ['mocha', 'coverage'],
    preprocessors: {
      'test/loadtests.js': ['webpack', 'sourcemap']
    },
    webpack: webpackCfg,
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'html'},
        {type: 'text'}
      ]
    }
  });
};
