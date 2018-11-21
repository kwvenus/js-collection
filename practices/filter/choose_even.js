'use strict';

function choose_even(collection) {

  const hasEven = element => element%2 == 0;
  const result = collection.filter(hasEven);

  return result;
}

module.exports = choose_even;
