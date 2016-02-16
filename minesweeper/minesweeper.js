$(document).ready(function() {
  var board = {};
  var bombsArray = [];
  var max = 0;
  var completedArray = [];
  var chosen = '';

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
          var arr = coord.split(",");
          var output = arr[0]+ "\\," +arr[1];
          $("#"+output).addClass('bomb');
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
            bomb: 'no',
            fromBomb: 0
           };
        }
      }
    }
    console.log(board);
  }
  function markBomb(coord, origCoord, startCoord, dir){
    console.log("stopped at: " +origCoord+ " -> bomb at " +coord);
  }

  function crawlBoard(coord, startCoord, direction){
      if(startCoord){
        var startCoord = startCoord;
      } else {
        var startCoord = coord;
      }

      board[coord].revealed = "yes";

      // check if it is a bomb
      if(board[coord].bomb === 'yes' && coord == startCoord){
        console.log("Kablooom hit bomb at: " +coord);
        return;
      } else {

        var coordUp = findCoordUp(coord);
        var coordDown = findCoordDown(coord);
        var coordLeft = findCoordLeft(coord);
        var coordRight = findCoordRight(coord);


        if(direction === 'left'){
          var arr = coord.split(",");
          var left_x = parseInt(arr[0]);
        }
        if(direction === 'right'){
          var arr = coord.split(",");
          var right_x = parseInt(arr[0]);
        }
        if(direction === 'up'){
          var arr = coord.split(",");
          var up_y = parseInt(arr[1]);
        }
        if(direction === 'down'){
          var arr = coord.split(",");
          var down_y = parseInt(arr[1]);
        }


        if(left_x !== 0 && (completedArray.indexOf('left') < 0) ){
          console.log(coordLeft);
          console.log(board[coordLeft]);
            if(board[coordLeft].bomb === 'yes'){
              markBomb(coordLeft, coord, startCoord, 'left');
            } else {
              crawlBoard(coordLeft, startCoord, 'left');
            }
        } else if(right_x !== max-1 && (completedArray.indexOf('right') < 0) ){
          console.log(coordRight);
          console.log(board[coordRight]);
            if(board[coordRight].bomb === 'yes'){
              markBomb(coordRight, coord, startCoord, 'right');
            } else {
              crawlBoard(coordRight, startCoord, 'right');
            }
        } else if(down_y !== max-1 && (completedArray.indexOf('down') < 0) ){
          console.log(coordDown);
          console.log(board[coordDown]);
            if(board[coordDown].bomb === 'yes'){
              markBomb(coordDown, coord, startCoord, 'down');
            } else {
              crawlBoard(coordDown, startCoord, 'down');
            }
        } else if (up_y !== 0 && (completedArray.indexOf('up') < 0)){
          console.log(board[coordUp]);
            if(board[coordUp].bomb === 'yes'){
              markBomb(coordUp, coord, startCoord, 'up');
            } else {
              crawlBoard(coordUp, startCoord, 'up');
            }
        } else {
          console.log(board);
          console.log("reached end of board!");
          return;
        }
      }
  }
  function markNeighbors(coords){

  }

  function crawlBoard(coords, chosen){
    var nextCoords = [];

    // 1.  take coordinate
    //      check to see if it's a bomb
    for (coord in coords){
      if(board[coord].bomb === 'yes' && chosen = 'yes'){
            console.log("Kablooom hit bomb at: " +coord);
            return;
      } else {
    // 2.  increment coordinates
        var coordUp = findCoordUp(coord);
        var coordDown = findCoordDown(coord);
        var coordLeft = findCoordLeft(coord);
        var coordRight = findCoordRight(coord);
        nextCoords.push(coordUp);
        nextCoords.push(coordDown);
        nextCoords.push(coordLeft);
        nextCoords.push(coordRight);
    // 3.  if coords are on board, and not yet revealed, put into nextCoords
        for(var i=0; i<nextCoords.length; i++){
          var arr = coord.split(",");
          var x = parseInt(arr[0]);
          var y = parseInt(arr[1]);
          if(x >= 0 && x < max && y >= 0 && y < max){
            if(board[nextCoords[i]].revealed !== "yes"){
              if(){

              } else {
                board[nextCoords[i]].revealed = "yes";
              }
            } else {
              return;
            }

          } else {
            return;
          }

        }


            var preliminaryCoords = [coordUp, coordDown, coordLeft, coordRight];
            for(var i=0; i<preliminaryCoords.length; i++){

            }
          }

      } else {
          if(board[coord].bomb === 'yes' && coord == startCoord){
            console.log("Kablooom hit bomb at: " +coord);
            return;
          } else {

          }
      }
      }
    // 2.  check to see if inside board
      var arr = coord.split(",");
      var x = parseInt(arr[0]);
      var y = parseInt(arr[1]);

    }




    // 5.  coordinates that are not bomb / not revealed - recurse.

  }

  function findCoordLeft(coord){
    var arr = coord.split(",");
    var x = parseInt(arr[0]);
    if(x > 0){
      var newX = parseInt(arr[0])-1;
      if(newX >=0 && newX < max){
        var output = newX+ "\\," +arr[1];
        console.log('#'+output);
        $("#"+output).addClass('revealed');
        return newX+ "," +arr[1];
      } else {
        return;
      }
    } else {
      console.log("reached end of board - LEFT");
      completedArray.push("left");
      return;
    }
  }
  function findCoordRight(coord){
    var arr = coord.split(",");
    var x = parseInt(arr[0]);
    if(x < max-1){
      var newX = parseInt(arr[0])+1;
      if(newX >=0 && newX < max){
        var output = newX+ "\\," +arr[1];
        console.log('#'+output);
        console.log($("."+output) );
        $("#"+output).addClass("revealed");
        return newX+ "," +arr[1];
      } else {
        return;
      }
    } else {
      console.log("reached end of board - RIGHT");
      completedArray.push("right");
      return;
    }
  }
  function findCoordUp(coord){
      var arr = coord.split(",");
      var y = parseInt(arr[1]);
    if(y > 0){
      var newY = parseInt(arr[1])-1;
      if(newY >=0 && newY < max){
        var output = arr[0]+ "\\," +newY;
        console.log('#'+output);
        $("#"+output).addClass('revealed');
        return arr[0]+ "," +newY;
      } else {
        return;
      }
    } else {
      console.log("reached end of board - UP");
      completedArray.push("up");
      return;
    }
  }
  function findCoordDown(coord){
      var arr = coord.split(",");
      var y = parseInt(arr[1]);
    if(y < max-1){
      var newY = parseInt(arr[1])+1;
      if(newY >=0 && newY < max){
        // console.log(arr[0]+ "," +newY);
        var output = arr[0]+ "\\," +newY;
        console.log('#'+output);
        $('#'+output).addClass('revealed');
        return arr[0]+ "," +newY;
      } else {
        return;
      }
    } else {
      console.log("reached end of board - DOWN");
      completedArray.push("down");
      return;
    }
  }

// anywhere that is 1 away from bomb, spreading outwards
// label 1
// anywhere that is 2 away from bomb, label 2

// function that generates playing field HTML according to setting



  // I N I T
  createGrid(4);
  setTimeout(function(){ crawlBoard("2,2"); }, 2000);
});



