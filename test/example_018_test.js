const assert = require('assert');
const mymap = require('../src/example_018');

describe('example_018', function() {
  describe('example_018 #001', function() {
    it('#001', function() {
      assert.equal(mymap['abc123'], 'hello');
    });
  });
});
