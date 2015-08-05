var calc = (function(){
  var value = 0;

  var increment = function(){
    value++;
  };

  var get = function(){
    return value;
  };

  return { increment : increment,
            get : get
  }
})();

calc.increment(); // 1
calc.increment(); // 2
calc.get();  // 2


