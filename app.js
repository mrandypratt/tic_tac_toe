let functions = require('./functions.js');
let readline = require('readline-sync');

//Create Board
const BOARD = [[],[],[]];

//Greet User
prompt("Welcome to Tic Tac Toe!");

let playAgain = true;

//Create loop for Game
while (playAgain) {

  //Establish variables for gameplay
  let player = "x";
  let gameOver = false;
  let movesRemaining = true;
  let isWinner = false;
  let playAgainResponse;
  let currentMove;
  let validMove;

  //Reset Board for new game
  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      BOARD[row][column] = null;
    }
  }

  //Create loop for each Player's Move
  while (!gameOver) {

    //Display index for spaces
    printMoveOptions();

    //Show current board
    printCurrentBoard(BOARD);

    //Get user Response (Loop until Selection is valid)
    while (true) {
      prompt(`${player}'s turn. Select where you would like to move.`);
      currentMove = readline.question();
      validMove = checkIfValidMove(currentMove);
      if (validMove) { break; }
    }

    //Add move to board
    updateBoard(currentMove, player, BOARD);

    //Determine if player wins in current state
    isWinner = checkIfWinner(player, BOARD);
    //if player meets requirements for a win state: 1. prompt(`${player} player wins!`) 2. return true;
    //else return false;

    //Determine if the board is full
    movesRemaining = checkIfMovesRemaining(BOARD);
    //if any square is still null: 1. prompt("No Moves Remaining.") 2. return false
    //else return true;

    //End game if Winner or if no Remining Moves
    if (isWinner || !movesRemaining) {
      prompt('Game Over.')
      gameOver = true;
      prompt("Would you like to play again? (y/n)")
       
    }


  }
}

