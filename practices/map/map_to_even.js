'use strict';

function times2(element){
  return element * 2;
}

function map_to_even(collection){
  const map = collection.map(element => times2(element));
  return map;
}
module.exports = map_to_even;
