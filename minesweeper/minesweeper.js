$(document).ready(function() {
  var board = {};
  var bombsArray = [];
  var max = 0;

  function generateRandomCoord(num){
      x = Math.floor((Math.random() * num));
      y = Math.floor((Math.random() * num));
      return x+ "," +y;
  }
  function generateBombArray(num){
      while(bombsArray.length !== num){
        coord = generateRandomCoord(num);
        if(!(bombsArray.indexOf(coord) > -1)){
          bombsArray.push(coord);
        }
      }
    console.log(bombsArray);
    return bombsArray.sort();
  }

  function createGrid(num){
    max = num;
    console.log(max);
    var bombsArray = generateBombArray(num);

    for(var i=0; i<num; i++){
      for(var j=0; j<num; j++){
        var coord = i+ "," +j;

        if(coord === bombsArray[0]){
          board[coord] = {
            x: i,
            y: j,
            revealed: 'no',
            bomb:'yes'
          };
          bombsArray.shift();
        } else {
           board[coord] = {
            x: i,
            y: j,
            revealed: 'no',
            bomb: 'no'
           };
        }
      }
    }


    console.log(board);
  }




  function markBomb(coord, origCoord, startCoord, dir){
    var squaresAway = 0;

    if(dir === 'up'){

    }
    if(dir === 'down'){

    }
    if(dir === 'left'){

    }
    if(dir === 'right'){

    }
    console.log("stopped at: " +origCoord+ " -> bomb at " +coord);
    return;
  }

  function crawlBoard(coord, startCoord){
    if(startCoord){
      var startCoord = startCoord;
    } else {
      var startCoord = coord;
    }

    board[coord].revealed = "yes";

    console.log(board[coord]);
    // check if it is a bomb
    if(board[coord].bomb === 'yes' && coord == startCoord){
      console.log("Kablooom hit bomb at: " +coord);
      return;
    } else {
      // var coordUp = findCoordUp(coord);
      var coordDown = findCoordDown(coord);
      // var coordLeft = findCoordLeft(coord);
      // var coordRight = findCoordRight(coord);

      // if(coordUp !== null && board[coordUp].bomb === 'yes'){
      //   markBomb(coordUp, coord, startCoord, 'up');
      // } else {
      //   if(coordUp !== null){
      //     crawlBoard(coordUp, startCoord);
      //   }
      // }
      if(board[coordDown].bomb === 'yes'){
        markBomb(coordDown, coord, startCoord, 'down');
      } else {
        crawlBoard(coordDown, startCoord);
        return;
      }
      // if(coordLeft !== null && board[coordLeft].bomb === 'yes'){
      //   markBomb(coordLeft, coord, startCoord, 'left');
      // } else {
      //   if(coordLeft !== null){
      //     crawlBoard(coordLeft, startCoord);
      //   }
      // }
      // if(coordRight !== null && board[coordRight].bomb === 'yes'){
      //   markBomb(coordRight, coord, startCoord, 'right');
      // } else {
      //   if(coordRight !== null){
      //     crawlBoard(coordRight, startCoord);
      //   }
      // }
      return "you win";
    }
  }



  function findCoordUp(coord){
    var arr = coord.split(",");
    var newY = parseInt(arr[1])-1;
    if(newY >=0 && newY < max){
      return arr[0]+ "," +newY;
    } else {
      return;
    }
  }

  function findCoordDown(coord){
    var arr = coord.split(",");
    var newY = parseInt(arr[1])+1;
    if(newY >=0 && newY < max){
      console.log(arr[0]+ "," +newY);
      return arr[0]+ "," +newY;
    } else {
      return;
    }
  }

  function findCoordLeft(coord){
    var arr = coord.split(",");
    var newX = parseInt(arr[0])-1;
    if(newX >=0 && newX < max){
      return newX+ "," +arr[1];
    } else {
      return;
    }
  }

  function findCoordRight(coord){
    var arr = coord.split(",");
    var newX = parseInt(arr[0])+1;
    if(newX >=0 && newX < max){
      return newX+ "," +arr[1];
    } else {
      return;
    }
  }

  // I N I T
  createGrid(4);
  setTimeout(function(){ crawlBoard("2,2"); }, 2000);
});



