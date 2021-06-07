function printMoveOptions() {
  for (let row = 0; row < 3; row++) {
    console.log("1 | 2 | 3");
    if (row < 2) {
      console.log("_________");
    }
  }
}

function printCurrentBoard(BOARD) {
  for (let row = 0; row < 3; row++) {
    console.log(`${BOARD[row][0]} | ${BOARD[row][1]} | ${BOARD[row][2]}`);
    if (row < 2) {
      console.log("_________");
    }
  }
}

function prompt(string) {
  console.log(`=> ${string}`);
}

function checkIfValidMove(move, BOARD) {
  if (!(Number(move) <= 9 && Number(move >= 1))) {
    prompt("Not a valid selection.");
    return false;
  } else if (BOARD.flatten()[Number(move)]) {
    prompt("Selected Space is occupied.")
    return false;
  } else {
    return true;
  }
}