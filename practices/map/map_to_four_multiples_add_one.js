'use strict';

function plus1(element){
  return element+1;
}

function times4(element){
  return element*4;
}

function mappingElement(element){
  return plus1(times4(element));
}

var map_to_four_multiples_add_one = function(collection){

  const map = collection.map(element => mappingElement(element));

  return map;
};

module.exports = map_to_four_multiples_add_one;
