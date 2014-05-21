'use strict';

describe('reduce', function() {

  var reduce;
  beforeEach(function() {
    reduce = require('../lib/reduce');
  });

  it('can sum numbers', function() {
    expect(reduce([1,2,3], function(e) { e + e})).toEqual(6);
  });

  it('can some other numbers', function() {
    expect(reduce([2,2,3,6], function(e) { e + e})).toEqual(13);
  });

  it('can multiply numbers', function() {
    expect(reduce([2,2,3], function(e) { e * e})).toEqual(12);
  });
});
