// currying is a transformation process - we transform a function
// a design pattern for applying stored arguments (stored through scope) during partial application (applying set of arguments to a function)

function curry(fn){
  var slice = Array.prototype.slice;
  var stored_args = slice.call(arguments, 1);
  return function(){
    var new_args = slice.call(arguments);
    var args = stored_args.concat(new_args);
    return fn.apply(null, args);
  }
}

function add(x, y){
  return x + y;
}

var newAdd = curry(add, 5);
newAdd(3);

curry(add, 6)(9);