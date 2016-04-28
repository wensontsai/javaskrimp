function findMissing(array){
    var diff = array[0] - 0;

    for (var i=0; i <array.length; i++){
        console.log("index:" +parseInt(i+diff)+ " | | "+array[i]);

        if((array[i]^(parseInt(i+diff)))===1){
            return i;
            break;
        }

        // also works
        if((array[i] !== (parseInt(i+diff)))){
            return i;
            break;
        }
    }

};


var array=[1,2,3,4,5,7,8];
findMissing(array);
