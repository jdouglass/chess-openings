// NOTE: this example uses the chess.js library:
// https://github.com/jhlywa/chess.js
//
//
// NOTE TO SELF: thinking about adding in arrows when i have the project finished
// to allow users to see the piece continuation after the main theoretical moves
// are completed or to draw an arrow when the user does the incorrect move
//
// https://github.com/mcba1n/chessboard-arrows


var board = null
var $board = $('#board')
const game = new Chess()
var squareClass = 'square-55d63'
var squareToHighlight = null
var colorToHighlight = null
var $status = $('#status')
var $fen = $('#fen')
var $pgn = $('#pgn')
var variation = []
var totalMoves = 0

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
        // promotion: 'q' // NOTE: always promote to a queen for example simplicity
    })

    // highlight squares where the piece moved to and from
    if (move.color === "w") {
        $board.find("." + squareClass).removeClass("highlight-white")
        $board.find(".square-" + move.from).addClass("highlight-white")
        squareToHighlight = move.to
        colorToHighlight = "white"
    } else {
        $board.find("." + squareClass).removeClass("highlight-black")
        $board.find(".square-" + move.from).addClass("highlight-black")
        squareToHighlight = move.to
        colorToHighlight = "black"
    }

    // illegal move
    if (move === null) return 'snapback'

    // check to see if the player's attempt is the correct move for the current variation
    let attempt = game.history()

    // increment user's move count by 1
    console.log(totalMoves += 1)

    if (variation.length !== 0) {
        if (attempt[attempt.length-1] === variation[attempt.length-1]) {
            game.move(variation[attempt.length])

            // display results
            if (attempt.length === variation.length) {
                let accuracy = totalMoves / Math.round(variation.length / 2)

                // if there were mistakes from the user
                // calcuate the adjusted accuracy
                if (accuracy > 1) {
                    accuracy = 100 - ((accuracy - 1) * 100)
                    accuracy = accuracy.toFixed(2)
                } else {
                    accuracy *= 100
                }
                // console.log(accuracy)
            }
        } else {
            game.undo()
        }
    }
    updateStatus()
}

// update the board position after the piece snap
// for castling, en passant, pawn promotion
function onSnapEnd () {
    board.position(game.fen())
    $board.find(".square-" + squareToHighlight).addClass("highlight-" + colorToHighlight)
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
    variation = []
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

// scotch game lines
const scotchClassical_Be3 = ["e4", "e5", "Nf3", "Nc6", "d4", "exd4", "Nxd4", "Bc5", "Be3", "Qf6", "c3", "Nge7", "Bc4", "Ne5", "Be2", "Qg6", "O-O", "d6"]
const potterVariation = ["e4", "e5", "Nf3", "Nc6", "d4", "exd4", "Nxd4", "Bc5", "Nb3", "Bb6", "Nc3", "Qf6", "Qe2", "Nge7", "Be3", "O-O", "O-O-O", "d6"]
const scotchIntermezzo = ["e4", "e5", "Nf3", "Nc6", "d4", "exd4", "Nxd4", "Bc5", "Nxc6", "Qf6", "Qd2", "dxc6", "Nc3"]
const steinitzVariation = ["e4", "e5", "Nf3", "Nc6", "d4", "exd4", "Nxd4", "Nxd4", "Qxd4", "d6", "Nc3", "Nf6", "f3", "Be7", "Be3", "O-O", "O-O-O"]

// sicilian defence lines
const sicilianNajdorf = []

// openings menu scripts
// NOTE TO SELF: need to fix the arrow rotation
$("#kings-pawn-opening").click(function() {
    $("#kings-pawn-show").toggleClass("show");
    $("#kings-pawn-arrow").toggleClass("rotate");
});

$("#open-game").click(function() {
    $("#open-game-show").toggleClass("show");
});

$("#kings-knight-opening").click(function() {
    $("#kings-knight-show").toggleClass("show");
});

$("#scotch-game").click(function() {
    $("#scotch-show").toggleClass("show");
});

$("#scotch-classical").click(function() {
    $("#scotch-classical-show").toggleClass("show");
});

$("#scotch-classical-Be3").click(function() {
    startGame()
    variation = scotchClassical_Be3
});

$("#scotch-classical-intermezzo").click(function() {
    startGame()
    variation = scotchIntermezzo
});

$("#scotch-classical-potter").click(function() {
    startGame()
    variation = potterVariation
});

$("#steinitz-variation").click(function() {
    startGame()
    variation = steinitzVariation
});

$("#sicilian-defence").click(function() {
    $("#sicilian-show").toggleClass("show");
});
