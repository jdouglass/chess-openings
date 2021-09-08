// openings menu scripts
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
    $("#sicilian-defence-show").toggleClass("show");
});

$("#open-sicilian").click(function() {
    $("#open-sicilian-show").toggleClass("show");
});

$("#queen-pawn-opening").click(function() {
    $("#queen-pawn-show").toggleClass("show");
});
