var myCount = (function(){
    var count = 0;
    var incrementCount = function(){
        count++;
    };
    var getCount = function(){
        return count;
    };

    return { getCount : getCount,
            incrementCount : incrementCount
    };
})();

myCount.incrementCount();
myCount.incrementCount();
myCount.incrementCount();
myCount.incrementCount();
myCount.getCount();



// another version //
var myCount = (function(){
    var count = 0;

    function incrementCount(){
        count++;
    }

    function getCount(){
        return count;
    }

    return { incrementCount : incrementCount,
        getCount : getCount
    }

})()

myCount.incrementCount();
myCount.incrementCount();
myCount.incrementCount();
myCount.incrementCount();
myCount.getCount();
