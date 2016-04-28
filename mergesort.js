function mergeSort(array){
  //split up array until length is 1 or 0
  if(array.length < 2){
    return array;
  } else {
    var median = parseInt(array.length/2);
    var left = array.slice(0, median);
    var right = array.slice(median);

    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right){
  var result = [];
  leftIndex = 0;
  rightIndex = 0;

  // insert smaller number into result array first
  // keep comparing
  while(left.length && right.length){
    if(left[0] <= right[0]){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  // grab remaining left
  while(left.length){
    result.push(left.shift());
  }
  // grab remaining right
  while(right.length){
    result.push(right.shift());
  }

  return result;
}