// NOTE: this example uses the chess.js library:
// https://github.com/jhlywa/chess.js
//
//
// NOTE TO SELF: thinking about adding in arrows when i have the project finished
// to allow users to see the piece continuation after the main theoretical moves
// are completed or to draw an arrow when the user does the incorrect move
//
// https://github.com/mcba1n/chessboard-arrows


// const { Chess } = require('./chess.js')
var board = null
const game = new Chess()
var $status = $('#status')
var $fen = $('#fen')
var $pgn = $('#pgn')

function onDragStart (source, piece, position, orientation) {
    // do not pick up pieces if the game is over
    if (game.game_over()) return false

    // only pick up pieces for the side to move
    if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
        return false
    }
}

function onDrop (source, target) {
    // see if the move is legal
    var move = game.move({
        from: source,
        to: target,

        // take off auto queen? but not necessary for opening theory
        promotion: 'q' // NOTE: always promote to a queen for example simplicity
    })

    // illegal move
    if (move === null) return 'snapback'
    let attempt = game.history()
    if (attempt.length % 2 !== 0 && attempt[attempt.length-1] === Nxd4Answer[attempt.length-1]) {
        game.move(Nxd4Answer[attempt.length])
    } else {
        game.undo()
    }
    updateStatus()
}

// update the board position after the piece snap
// for castling, en passant, pawn promotion
function onSnapEnd () {
    board.position(game.fen())
}

// updates three variables which are the colour's turn, FEN, and PGN
// after each move is made and prints to the HTML tags
function updateStatus () {
    var status = ''
    var moveColor = 'White'

    if (game.turn() === 'b') {
        moveColor = 'Black'
    }

    // checkmate?
    if (game.in_checkmate()) {
        status = 'Game over, ' + moveColor + ' is in checkmate.'
    }

    // draw?
    else if (game.in_draw()) {
        status = 'Game over, drawn position'
    } else { // game still on
        status = moveColor + ' to move'

        // check?
        if (game.in_check()) {
          status += ', ' + moveColor + ' is in check'
        }
    }

    // update html id tags
    $status.html(status)
    $fen.html(game.fen())
    $pgn.html(game.pgn())
}

function startGame() {
    let config = {
        draggable: true,
        position: 'start',
        onDragStart: onDragStart,
        onDrop: onDrop,
        onSnapEnd: onSnapEnd
    }
    board = Chessboard('board', config)
    game.reset()
    updateStatus()
}


// this function is called after every move is made and updates the turn status,
// FEN and PGN
updateStatus()

// when page loads, initialize the chess board to the starting position
$(document).ready(startGame)

// when the reset button is pressed it resets the game state,
// and resets the status variables
$('#resetBtn').click(startGame)

const Nxd4Answer = ["e4", "e5", "Nf3", "Nc6", "d4", "exd4", "Nxd4", "Nxd4", "Qxd4", "d6", "Nc3", "Nf6", "f3", "Be7", "Be3", "O-O", "O-O-O"]

