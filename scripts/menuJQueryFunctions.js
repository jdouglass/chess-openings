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

$("#kings-knight-opening-main-line").click(function() {
    $("#kings-knight-main-show").toggleClass("show");
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

// RUY LOPEZ
$("#ruy-lopez").click(function() {
    $("#ruy-lopez-show").toggleClass("show");
});

// ITALIAN GAME
$("#italian-game").click(function() {
    $("#italian-game-show").toggleClass("show");
});

// ITALIAN GAME
$("#three-knights-game").click(function() {
    $("#three-knights-game-show").toggleClass("show");
});

// PETROV DEFENCE
$("#petrov-defence").click(function() {
    $("#petrov-defence-show").toggleClass("show");
});

// PHILIDOR DEFENCE
$("#philidor-defence").click(function() {
    $("#philidor-defence-show").toggleClass("show");
});
$("#vienna-game").click(function() {
    $("#vienna-game-show").toggleClass("show");
});
$("#vienna-falkbeer").click(function() {
    $("#vienna-falkbeer-show").toggleClass("show");
});
$("#bishops-opening").click(function() {
    $("#bishops-opening-show").toggleClass("show");
});
$("#kings-gambit").click(function() {
    $("#kings-gambit-show").toggleClass("show");
});
$("#kings-gambit-accepted").click(function() {
    $("#kings-gambit-accepted-show").toggleClass("show");
});
$("#kings-gambit-declined").click(function() {
    $("#kings-gambit-declined-show").toggleClass("show");
});
$("#french-defence").click(function() {
    $("#french-defence-show").toggleClass("show");
});
$("#french-main-line").click(function() {
    $("#french-main-line-show").toggleClass("show");
});
$("#french-Nc3").click(function() {
    $("#french-Nc3-show").toggleClass("show");
});
$("#french-tarrasch").click(function() {
    $("#french-tarrasch-show").toggleClass("show");
});
$("#french-advance").click(function() {
    $("#french-advance-show").toggleClass("show");
});
$("#caro-kann-defence").click(function() {
    $("#caro-kann-show").toggleClass("show");
});
$("#caro-kann-main-line").click(function() {
    $("#caro-main-line-show").toggleClass("show");
});
$("#pirc-defence").click(function() {
    $("#pirc-defence-show").toggleClass("show");
});
$("#alekhine-defence").click(function() {
    $("#alekhine-defence-show").toggleClass("show");
});
$("#scandinavian-defence").click(function() {
    $("#scandinavian-show").toggleClass("show");
});
$("#nimzowitsch-defence").click(function() {
    $("#nimzowitsch-show").toggleClass("show");
});
$("#owens-defence").click(function() {
    $("#owens-show").toggleClass("show");
});

$("#queen-pawn-opening").click(function() {
    $("#queen-pawn-show").toggleClass("show");
});
$("#closed-game").click(function() {
    $("#closed-game-show").toggleClass("show");
});
$("#queens-gambit").click(function() {
    $("#queens-gambit-show").toggleClass("show");
});
$("#queens-gambit-accepted").click(function() {
    $("#q-gambit-accepted-show").toggleClass("show");
});
$("#queens-gambit-declined").click(function() {
    $("#q-gambit-declined-show").toggleClass("show");
});
$("#slav-defence").click(function() {
    $("#slav-defence-show").toggleClass("show");
});
$("#semi-slav-defence").click(function() {
    $("#semi-slav-defence-show").toggleClass("show");
});
$("#chigorin-defence").click(function() {
    $("#chigorin-show").toggleClass("show");
});
$("#blackmar-diemer-gambit").click(function() {
    $("#blackmar-diemer-show").toggleClass("show");
});
$("#indian-game").click(function() {
    $("#indian-game-show").toggleClass("show");
});
$("#nimzo-indian-defence").click(function() {
    $("#nimzo-indian-show").toggleClass("show");
});
$("#nimzo-rubinstein").click(function() {
    $("#nimzo-rubinstein-show").toggleClass("show");
});
$("#nimzo-classical").click(function() {
    $("#nimzo-classical-show").toggleClass("show");
});
$("#queens-indian-defence").click(function() {
    $("#queens-indian-show").toggleClass("show");
});
$("#grunfeld-defence").click(function() {
    $("#grunfeld-show").toggleClass("show");
});
$("#kings-indian-defence").click(function() {
    $("#kings-indian-show").toggleClass("show");
});
$("#benoni-defence").click(function() {
    $("#benoni-show").toggleClass("show");
});
$("#benko-gambit").click(function() {
    $("#benko-show").toggleClass("show");
});
$("#dutch-defence").click(function() {
    $("#dutch-show").toggleClass("show");
});
$("#q-pawn-modern-defence").click(function() {
    $("#q-pawn-modern-defence-show").toggleClass("show");
});
$("#englund-gambit").click(function() {
    $("#englund-show").toggleClass("show");
});
$("#english-opening").click(function() {
    $("#english-opening-show").toggleClass("show");
});


