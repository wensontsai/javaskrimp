$(document).ready(function() {
  var board = {};
  var bombsArray = [];

  function generateRandomCoord(num){
      x = Math.floor((Math.random() * num));
      y = Math.floor((Math.random() * num));
      return x+ "," +y;
  }

  function createGrid(num){
    var bombsArray = generateBombArray(num);

    for(var i=0; i<num; i++){
      for(var j=0; j<num; j++){
        var coord = i+ "," +j;

        if(coord === bombsArray[0]){
          board[coord] = {
            x: j,
            y: i,
            bomb:'yes'
          };
          bombsArray.shift();
        } else {
           board[coord] = {
            x: j,
            y: i,
            bomb: 'no'
           };
        }
      }
    }


    // return board;
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



  // I N I T
  createGrid(4);

  console.log(board);


});

