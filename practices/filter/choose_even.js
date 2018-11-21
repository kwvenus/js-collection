'use strict';

function choose_even(collection) {


  let iteration;
  let result = [];

  for (iteration = 0; iteration < collection.length; iteration++){
    if (collection[iteration]%2 == 0){
      result.push(collection[iteration]);
    }
  }
  return result;
}

module.exports = choose_even;
