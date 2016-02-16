// creates board
const board = {};
const lastMark;
const moveCount;

function initializeBoard(){
	moveCount = 0;

	for(var i=0; i<3; i++){
		for(var j=0; j<3; j++){
			let coord = i +','+ j;
			board[coord] = {
				move: ''
			};
		}
	}
	console.log('new board has been created!');
}

// alternate between marks X & O
	// runs the makeMove function
function makeMove(coord, mark){
	let mark = currentMark;
	if(lastMark !== currentMark){
		board[coord] = mark;
		if(moveCount >=5 && moveCount < 9){
			scoreMove(coord);
		}	
		lastMark = currentMark;
	} else {
		console.log('last mark was ' +lastMark+ ".  other turn now!");
	}
}

function scoreMove(){
	// anytime different mark or '', STOP
	// crawl outwards fromo middle.  go up.  if it is same.  go 2 y coords down.
	// crawl right, if it is same, go 2 x coords left.
	// crawl diag up/right, if it is same, go 2 x coords diag down/left
	// crawl diag up/left, if it is same, go 2 x coords diag down/right

}

// MAIN()
function startNewGame(){

}

