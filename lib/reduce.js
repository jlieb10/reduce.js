'use strict';

module.exports = (function() {
  var reduce = function(array, start, combine){
    var total = start;
    array.forEach(function(item) {
      total = combine(item, total);
    })
    return total;
  };

  return reduce;
})();
