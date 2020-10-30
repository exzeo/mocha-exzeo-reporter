'use-strict';

var Spec = require('mocha').reporters.Spec;
var JUnit = require('mocha-junit-reporter');
const { v4: uuidv4 } = require('uuid');

function MochaReporter(runner, options) {
  new Spec(runner, options);
  new JUnit(runner, {
    reporterOptions: { 
      mochaFile: `junit/${uuidv4()}.xml` 
    }
  });
}

module.exports = MochaReporter;
