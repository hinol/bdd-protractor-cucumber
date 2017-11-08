// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

var path = require('path');

exports.config = {
  specs: [
    './e2e/features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./e2e/features/**/*.steps.ts'],
    format: ['json:' + path.resolve(__dirname + '/e2e/reports/protractor-cucumber-report.json')],
    tags: ['~@ignore']
  },
  baseUrl: 'http://localhost:4200/',
  SELENIUM_PROMISE_MANAGER: false,
  directConnect: true,
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  allScriptsTimeout: 500000,
  getPageTimeout: 60000
};
