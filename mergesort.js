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
  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
}