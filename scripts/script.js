// NOTE: this code uses the chess.js library:
// https://github.com/jhlywa/chess.js
//
//
// NOTE TO SELF: thinking about adding in arrows when i have the project finished
// to allow users to see the piece continuation after the main theoretical moves
// are completed or to draw an arrow when the user does the incorrect move
//
// https://github.com/mcba1n/chessboard-arrows

let board = null
let $board = $('#board')
const game = new Chess()
let squareClass = 'square-55d63'
let squareToHighlight = null
let colorToHighlight = null
let $status = $('#status')
let $fen = $('#fen')
let $pgn = $('#pgn')
let variation = []
let attempt = []
let totalMoves = 0


// updates three variables which are the colour's turn, FEN, and PGN
// after each move is made and prints to the HTML tags
function updateStatus () {
    let status = ''
    let moveColor = 'White'

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

function removeHighlights (color) {
    $board.find('.' + squareClass).removeClass('highlight-' + color)
}

function onDragStart (source, piece, position, orientation) {
    // do not pick up pieces if the game is over
    if (game.game_over()) return false

    if (variation.length === 0) {
        if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
            (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
            return false
        }
    } else {
        // only pick up pieces for White
        if (piece.search(/^b/) !== -1) return false
    }
}

function onDrop (source, target) {
    // see if the move is legal
    let move = game.move({
        from: source,
        to: target,

        // not necessary to have this i think
        // promotion: 'q' // NOTE: always promote to a queen for example simplicity
    })

    // illegal move
    if (move === null) return 'snapback'

    attempt = game.history()

    if (variation.length !== 0) {
        if (attempt[attempt.length-1] !== variation[attempt.length-1]) {
            game.undo()
        } else {
            // highlight white's move
            removeHighlights('white')
            removeHighlights('hint')
            $board.find('.square-' + source).addClass('highlight-white')
            $board.find('.square-' + target).addClass('highlight-white')

            // make random move for black
            window.setTimeout(makeBlackMove, 250)
        }
    } else {
        if (move.color === 'w') {
            removeHighlights("white")
            $board.find('.square-' + move.from).addClass('highlight-white')
            squareToHighlight = move.to
            colorToHighlight = 'white'
        }
        if (move.color === "b") {
            removeHighlights("black")
            $board.find('.square-' + move.from).addClass('highlight-black')
            squareToHighlight = move.to
            colorToHighlight = 'black'
        }
    }
    updateStatus()

}

function highlightSquare() {

}

function makeBlackMove() {
    game.move(variation[attempt.length])
    let blackMove = game.history({verbose: true})
    // console.log(blackMove)
    console.log(blackMove[attempt.length])

    // highlight black's move
    removeHighlights('black')
    $board.find('.square-' + blackMove[attempt.length].from).addClass('highlight-black')
    squareToHighlight = blackMove[attempt.length].to

    // update the board to the new position
    board.position(game.fen())

    attempt = game.history()
}

function onMoveEnd() {
    $board.find('.square-' + squareToHighlight).addClass('highlight-black')
    updateStatus()
}

// update the board position after the piece snap
// for castling, en passant, pawn promotion
function onSnapEnd() {
    if (variation.length === 0) {
        $board.find('.square-' + squareToHighlight).addClass('highlight-'+ colorToHighlight)
    }
    board.position(game.fen())
}

function showHint() {
    if (variation.length !== 0 && game.turn() === "w") {
        let hintSquare = game.move(variation[attempt.length])
        hintSquare = hintSquare.from
        $board.find('.' + squareClass).removeClass('highlight-hint')
        $board.find('.square-' + hintSquare).addClass('highlight-hint')
        game.undo()
    }
}

function flipBoard() {
    // NEED TO FIX PIECE HIGHLIGHTING WHEN FLIPPING THE BOARD
    if (board.orientation() === "white") {
        board.orientation("black")
        $board.find('.square-' + squareToHighlight).addClass('highlight-'+colorToHighlight)
    } else {
        board.orientation("white")
        $board.find('.square-' + squareToHighlight).addClass('highlight-'+colorToHighlight)
    }
}

function startGame() {
    let config = {
        draggable: true,
        position: 'start',
        onDragStart: onDragStart,
        onDrop: onDrop,
        onSnapEnd: onSnapEnd,
        onMoveEnd: onMoveEnd
    }
    variation = []
    attempt = []
    board = Chessboard('board', config)
    game.reset()
    updateStatus()
    totalMoves = 0
}

// this function is called after every move is made and updates the turn status,
// FEN and PGN
updateStatus()

// when page loads, initialize the chess board to the starting position
$(document).ready(startGame)

// when the reset button is pressed it resets the game state,
// and resets the status variables
$('#resetBtn').click(startGame)

$('#hintBtn').click(showHint)

$('#flipBoardBtn').click(flipBoard)




