'use strict';

function times3(element){
  return element * 3;
}

function choose_multiples_of_three(collection) {

  const hasEven = element => times3(element) == 0;
  const result = collection.filter(hasEven);

  return result;
}

module.exports = choose_multiples_of_three;
