var board = {};
function generateBoard(letters, dimension){
    var lettersStack = letters.split('');
    for(var i=0; i<dimension; i++){
        for(var j=0; j<dimension; j++){
            var coordinate = i+ "," +j;
            board[coordinate] = lettersStack[0];
            lettersStack.shift();
        }
    }
    return board;
}

generateBoard("ABWECOWKTIVPPOEU", 4);
console.log(board);


///////////////////////////
var word = "ACTI6VE";
//////////////////////////



function validateWord(word, board){
    var startingLetter;
    // iterate through each row of Board
    for (var coordinate in board){
        //accessing each letter
        var letter = board[coordinate];
            if(word[0] === letter){
                console.log(letter + " found!");
                var response = recurseFind(word.slice(1), coordinate, board);
                if(response === 'valid'){
                    return "the word was checked and is VALID!";
                } else {
                    return "remainder of word: " +word+ " is INVALID ~> " +response;
                }

            } else {
                return "starting letter not found!";
            }

    }
};



validateWord(word, board);




function recurseFind(word, startingCoord, board){


    if (word.length === 0){
        return "valid";
    } else {
           var startingLetter = word[0];
            console.log("now searching for " +startingLetter)

        var coordUp = determineUp(startingCoord);
        var coordDown = determineDown(startingCoord);
        var coordLeft = determineLeft(startingCoord);
        var coordRight = determineRight(startingCoord);


        if(board[coordUp] === startingLetter){
            console.log(" found " +startingLetter+ " at coord: " +coordUp);
            return recurseFind(word.slice(1), coordUp, board);
        }
        else if(board[coordDown] === startingLetter){
            console.log(" found " +startingLetter+ " at coord: " +coordDown);
            return recurseFind(word.slice(1), coordDown, board);
        }
        else if(board[coordLeft] === startingLetter){
            console.log(" found " +startingLetter+ " at coord: " +coordLeft);
            return recurseFind(word.slice(1), coordLeft, board);
        }
        else if(board[coordRight] === startingLetter){
            console.log(" found " +startingLetter+ " at coord: " +coordRight);
            return recurseFind(word.slice(1), coordRight, board);
        } else {
            return word;
        }
    }
}

function determineUp(startingCoord){
        var coordArray = startingCoord.split(",");
        if(parseInt(coordArray[0]) >= 0){
            coordArray[0] = parseInt(coordArray[0]) - 1;
            coordUp = coordArray.join(",");
            return coordUp;
        } else {
            return startingCoord;
        }
}
function determineDown(startingCoord){
        var coordArray = startingCoord.split(",");
        if(parseInt(coordArray[0]) >= 0){
            coordArray[0] = parseInt(coordArray[0]) + 1;
            coordDown = coordArray.join(",");
            return coordDown
        } else {
            return startingCoord;
        }
}
function determineLeft(startingCoord){
        var coordArray = startingCoord.split(",");
        if(parseInt(coordArray[1]) >= 0){
            coordArray[1] = parseInt(coordArray[1]) - 1;
            coordLeft = coordArray.join(",");
            return coordLeft;
        } else {
            return startingCoord;
        }
}
function determineRight(startingCoord){
        // console.log(startingCoord);
        var coordArray = startingCoord.split(",");
        // console.log(coordArray);
        if(parseInt(coordArray[1]) >= 0){
            coordArray[1] = parseInt(coordArray[1]) + 1;
            coordRight = coordArray.join(",");
            return coordRight;
        } else {
            return startingCoord;
        }
}




