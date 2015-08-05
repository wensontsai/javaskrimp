var quicksort = function(arr) {
  if(arr.length <= 1) return arr;

  var pivot = Math.floor((arr.length -1)/2);
  var val = arr[pivot], less = [], more = [];

  arr.splice(pivot, 1);
  arr.forEach(function(e,i,a){
    e < val ? less.push(e) : more.push(e);
  });

  return (quicksort(less)).concat([val], quicksort(more));
};


var array = [4,2,5,8,10,65,3];
quicksort(array);
