'use strict';

function grouping_count(collection) {

  let group_count = {};
  let iteration;

  for(iteration = 0; iteration < collection.length; iteration++){
    if(collection[iteration] in group_count){
      group_count[collection[iteration]] += 1;
    }else{
      group_count[collection[iteration]] = 1;
    }
  }

  return group_count;

}

module.exports = grouping_count;
