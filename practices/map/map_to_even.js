'use strict';

function plus1(element){
  return element+1;
}

function times4(element){
  return element*4;
}

function mappingElement(element){
  return element => plus1(times4(element));
}

function map_to_even(collection){

  const map = collection.map(mappingElement(element));

  return map;
}
module.exports = map_to_even;
