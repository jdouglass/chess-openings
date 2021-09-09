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

// SCOTCH GAME
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

// SICILIAN DEFENCE
$("#sicilian-defence").click(function() {
    $("#sicilian-defence-show").toggleClass("show");
});

$("#open-sicilian").click(function() {
    $("#open-sicilian-show").toggleClass("show");
});
$("#najdorf-variation").click(function() {
    $("#najdorf-variation-show").toggleClass("show");
});

$("#sicilian-najdorf-classical").click(function() {
    startGame()
    variation = sicilianNajdorfClassicalMainLine
    console.log(variation)
});

$("#sicilian-najdorf-english").click(function() {
    startGame()
    variation = sicilianNajdorfEnglishAttack
});

$("#sicilian-najdorf-lipnitzky").click(function() {
    startGame()
    variation = sicilianNajdorfLipnitzkyAttack
});
$("#sicilian-najdorf-opocensky").click(function() {
    startGame()
    variation = sicilianNajdorfOpocensky
});
$("#sicilian-najdorf-amsterdam").click(function() {
    startGame()
    variation = sicilianNajdorfAmsterdam
});
$("#sicilian-najdorf-adams").click(function() {
    startGame()
    variation = sicilianNajdorfAdams
});
$("#sicilian-najdorf-argentine").click(function() {
    startGame()
    variation = sicilianNajdorfArgentine
});


$("#queen-pawn-opening").click(function() {
    $("#queen-pawn-show").toggleClass("show");
});
