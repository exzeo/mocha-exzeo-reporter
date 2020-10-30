'use-strict';

var Spec = require('mocha').reporters.Spec;
var JUnit = require('mocha-junit-reporter');
const { v4: uuidv4 } = require('uuid');

function MochaReporter(runner, options) {
  let junitOptions = {
    ...{
      reporterOptions: { 
        mochaFile: `junit/${uuidv4()}.xml` 
      }
    },
    ...options
  }

  new Spec(runner, options);
  new JUnit(runner, junitOptions);
}

module.exports = MochaReporter;
