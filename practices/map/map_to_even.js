'use strict';
function map_to_even(collection){

  let iteration;

  for (iteration = 0; iteration < collection.length; iteration++){
    collection[iteration] *= 2;
  }

  return collection;
}
module.exports = map_to_even;
