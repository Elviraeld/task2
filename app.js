let chessboard = document.getElementById('chessboard');

function createChessboard() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            let square = document.createElement('div');
            square.className = 'square ' + ((row + col) % 2 === 0 ? 'white' : 'black');
            chessboard.appendChild(square);
        }
    }
}

createChessboard();