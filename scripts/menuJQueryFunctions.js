// openings menu scripts
$("#kings-pawn-opening").click(function() {
    $("#kings-pawn-show").toggleClass("show");
    // $("#kings-pawn-arrow").toggleClass("rotate");
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
    console.log(variation)
});

$("#sicilian-najdorf-lipnitzky").click(function() {
    startGame()
    variation = sicilianNajdorfLipnitzkyAttack
    console.log(variation)
});
$("#sicilian-najdorf-opocensky").click(function() {
    startGame()
    variation = sicilianNajdorfOpocensky
    console.log(variation)
});
$("#sicilian-najdorf-amsterdam").click(function() {
    startGame()
    variation = sicilianNajdorfAmsterdam
    console.log(variation)
});
$("#sicilian-najdorf-adams").click(function() {
    startGame()
    variation = sicilianNajdorfAdams
    console.log(variation)
});
$("#sicilian-najdorf-argentine").click(function() {
    startGame()
    variation = sicilianNajdorfArgentine
    console.log(variation)
});
$("#dragon-variation").click(function() {
    $("#dragon-variation-show").toggleClass("show");
});
$("#dragon-positional").click(function() {
    startGame()
    variation = sicilianDragonPositional
    console.log(variation)
});
$("#dragon-yugoslav").click(function() {
    startGame()
    variation = sicilianDragonYugoslav
    console.log(variation)
});
$("#dragon-soltis").click(function() {
    startGame()
    variation = sicilianDragonSoltis
    console.log(variation)
});
$("#dragon-classical").click(function() {
    startGame()
    variation = sicilianDragonClassical
    console.log(variation)
});
$("#dragon-levenfish").click(function() {
    startGame()
    variation = sicilianDragonLevenfish
    console.log(variation)
});
$("#dragon-harrington-glek").click(function() {
    startGame()
    variation = sicilianDragonHarrington
    console.log(variation)
});

$("#classical-variation").click(function() {
    $("#sicilian-classical-show").toggleClass("show");
});
$("#sicilian-richter").click(function() {
    startGame()
    variation = sicilianRichter
    console.log(variation)
});
$("#sicilian-fischer-sozin").click(function() {
    startGame()
    variation = sicilianFischerSozin
    console.log(variation)
});
$("#sicilian-velimirovic").click(function() {
    startGame()
    variation = sicilianVelimirovic
    console.log(variation)
});
$("#sicilian-boleslavsky").click(function() {
    startGame()
    variation = sicilianBoleslavsky
    console.log(variation)
});


$("#scheveningen-variation").click(function() {
    $("#scheveningen-show").toggleClass("show");
});
$("#scheveningen-keres").click(function() {
    startGame()
    variation = scheveningenKeres
    console.log(variation)
});
$("#scheveningen-classical").click(function() {
    startGame()
    variation = scheveningenClassical
    console.log(variation)
});
$("#scheveningen-english").click(function() {
    startGame()
    variation = scheveningenEnglish
    console.log(variation)
});
$("#scheveningen-fischer").click(function() {
    startGame()
    variation = scheveningenFischerSozin
    console.log(variation)
});
$("#scheveningen-tal").click(function() {
    startGame()
    variation = scheveningenTal
    console.log(variation)
});




$("#accelerated-dragon").click(function() {
    $("#accelerated-dragon-show").toggleClass("show");
});
$("#accelerated-dragon-main").click(function() {
    startGame()
    variation = acceleratedMainLine
    console.log(variation)
});
$("#accelerated-dragon-passmore").click(function() {
    startGame()
    variation = acceleratedPassmore
    console.log(variation)
});
$("#accelerated-dragon-maroczy").click(function() {
    startGame()
    variation = acceleratedMaroczy
    console.log(variation)
});

$("#kalashnikov-variation").click(function() {
    startGame()
    variation = sicilianKalashnikov
    console.log(variation)
});
$("#taimanov-variation").click(function() {
    startGame()
    variation = sicilianTaimanov
    console.log(variation)
});
$("#kan-variation").click(function() {
    startGame()
    variation = sicilianKanVariation
    console.log(variation)
});
$("#sicilian-four-knights").click(function() {
    startGame()
    variation = sicilianFourKnights
    console.log(variation)
});
$("#pin-variation").click(function() {
    startGame()
    variation = sicilianPinVariation
    console.log(variation)
});

$("#closed-sicilian").click(function() {
    startGame()
    variation = sicilianClosed
    console.log(variation)
});



$("#Nf3-sicilian").click(function() {
    $("#Nf3-sicilian-show").toggleClass("show");
});
$("#sicilian-nimzowitsch").click(function() {
    startGame()
    variation = sicilianNimzowitsch
    console.log(variation)
});

$("#misc-sicilian").click(function() {
    $("#misc-sicilian-show").toggleClass("show");
});
$("#grand-prix-attack").click(function() {
    startGame()
    variation = grandPrixAttack
    console.log(variation)
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
    console.log(variation)
});

$("#scotch-classical-intermezzo").click(function() {
    startGame()
    variation = scotchIntermezzo
    console.log(variation)
});

$("#scotch-classical-potter").click(function() {
    startGame()
    variation = potterVariation
    console.log(variation)
});

$("#steinitz-variation").click(function() {
    startGame()
    variation = steinitzVariation
    console.log(variation)
});
$("#scotch-gambit").click(function() {
    startGame()
    variation = scotchGambit
    console.log(variation)
});



// RUY LOPEZ
$("#ruy-lopez").click(function() {
    $("#ruy-lopez-show").toggleClass("show");
});
$("#morphy-defence").click(function() {
    $("#morphy-defence-show").toggleClass("show");
});
$("#morphy-exchange").click(function() {
    startGame()
    variation = morphyExchange
    console.log(variation)
});
$("#morphy-norwegian").click(function() {
    startGame()
    variation = morphyNorwegian
    console.log(variation)
});
$("#morphy-arkhangelsk").click(function() {
    startGame()
    variation = morphyArkhangelsk
    console.log(variation)
});
$("#morphy-modern-steinitz").click(function() {
    startGame()
    variation = morphyModernSteinitz
    console.log(variation)
});
$("#morphy-modern-arkhangelsk").click(function() {
    startGame()
    variation = morphyModernArkhangelsk
    console.log(variation)
});
$("#morphy-open-defence").click(function() {
    startGame()
    variation = morphyOpenDefence
    console.log(variation)
});



$("#morphy-closed-defence").click(function() {
    $("#morphy-closed-show").toggleClass("show");
});
$("#morphy-delayed-exchange").click(function() {
    startGame()
    variation = morphyDelayedExchange
    console.log(variation)
});
$("#morphy-centre").click(function() {
    startGame()
    variation = morphyCentre
    console.log(variation)
});
$("#morphy-worrall-attack").click(function() {
    startGame()
    variation = morphyWorrallAttack
    console.log(variation)
});
$("#morphy-modern-line").click(function() {
    startGame()
    variation = morphyModernLine
    console.log(variation)
});
$("#morphy-closed-averbakh").click(function() {
    startGame()
    variation = morphyClosedAverbakh
    console.log(variation)
});
$("#morphy-trajkovic").click(function() {
    startGame()
    variation = morphyTrajkovic
    console.log(variation)
});
$("#morphy-closed-marshall").click(function() {
    startGame()
    variation = morphyClosedMarshall
    console.log(variation)
});




$("#morphy-main-line").click(function() {
    $("#morphy-main-line-show").toggleClass("show");
});
$("#morphy-pilnik").click(function() {
    startGame()
    variation = morphyPilnik
    console.log(variation)
});
$("#morphy-yates").click(function() {
    startGame()
    variation = morphyYates
    console.log(variation)
});
$("#morphy-chigorin").click(function() {
    startGame()
    variation = morphyChigorin
    console.log(variation)
});
$("#morphy-breyer").click(function() {
    startGame()
    variation = morphyBreyer
    console.log(variation)
});
$("#morphy-zaitsev").click(function() {
    startGame()
    variation = morphyBreyer
    console.log(variation)
});
$("#morphy-karpov").click(function() {
    startGame()
    variation = morphyKarpov
    console.log(variation)
});
$("#morphy-kholmov").click(function() {
    startGame()
    variation = morphyKholmov
    console.log(variation)
});
$("#morphy-smyslov").click(function() {
    startGame()
    variation = morphySmyslov
    console.log(variation)
});




$("#non-morphy-defence").click(function() {
    $("#non-morphy-show").toggleClass("show");
});
$("#non-morphy-birds").click(function() {
    startGame()
    variation = nonMorphyBirds
    console.log(variation)
});
$("#non-morphy-steinitz").click(function() {
    startGame()
    variation = nonMorphySteinitz
    console.log(variation)
});


$("#berlin-defence").click(function() {
    startGame()
    variation = berlinMainLine
    console.log(variation)
});


// ITALIAN GAME
$("#italian-game").click(function() {
    $("#italian-game-show").toggleClass("show");
});
$("#giuoco-piano").click(function() {
    $("#giuoco-show").toggleClass("show");
});
$("#giuoco-main-line").click(function() {
    startGame()
    variation = giuocoMainLine
    console.log(variation)
});

$("#giuoco-evans-gambit").click(function() {
    $("#evans-gambit-show").toggleClass("show");
});
$("#evans-gambit-accepted").click(function() {
    startGame()
    variation = evansGambitAccepted
    console.log(variation)
});
$("#evans-gambit-declined").click(function() {
    startGame()
    variation = evansGambitDeclined
    console.log(variation)
});
$("#giuoco-pianissimo").click(function() {
    startGame()
    variation = giuocoPianissimo
    console.log(variation)
});
$("#two-knights-defence").click(function() {
    $("#two-knights-show").toggleClass("show");
});
$("#two-knights-main").click(function() {
    startGame()
    variation = twoKnightsMain
    console.log(variation)
});
$("#two-knights-traxler").click(function() {
    startGame()
    variation = twoKnightsTraxler
    console.log(variation)
});

$("#semi-italian-opening").click(function() {
    $("#semi-italian-show").toggleClass("show");
});
$("#semi-italian-main").click(function() {
    startGame()
    variation = semiItalianMain
    console.log(variation)
});
$("#semi-italian-d4").click(function() {
    startGame()
    variation = semiItaliand4
    console.log(variation)
});
$("#semi-italian-h3").click(function() {
    startGame()
    variation = semiItalianh3
    console.log(variation)
});




// $("#three-knights-game").click(function() {
//     $("#three-knights-game-show").toggleClass("show");
// });

// PONZIANI
$("#ponziani-opening").click(function() {
    $("#ponziani-show").toggleClass("show");
});
$("#ponziani-jaenisch").click(function() {
    startGame()
    variation = ponzianiJaenisch
    console.log(variation)
});
$("#ponziani-leonhardt").click(function() {
    startGame()
    variation = ponzianiLeonhardt
    console.log(variation)
});
$("#ponziani-steinitz").click(function() {
    startGame()
    variation = ponzianiSteinitz
    console.log(variation)
});
$("#ponziani-kmoch").click(function() {
    startGame()
    variation = ponzianiKmoch
    console.log(variation)
});



// PETROV DEFENCE
$("#petrov-defence").click(function() {
    $("#petrov-defence-show").toggleClass("show");
});
$("#petrov-classical-main").click(function() {
    startGame()
    variation = petrovClassicalMain
    console.log(variation)
});
$("#petrov-classical").click(function() {
    startGame()
    variation = petrovBestForBlack
    console.log(variation)
});
$("#petrov-cochrane").click(function() {
    startGame()
    variation = petrovCochrane
    console.log(variation)
});
$("#petrov-steinitz").click(function() {
    startGame()
    variation = petrovSteinitz
    console.log(variation)
});

// PHILIDOR DEFENCE
$("#philidor-defence").click(function() {
    $("#philidor-defence-show").toggleClass("show");
});
$("#philidor-Nxd4").click(function() {
    startGame()
    variation = philidorNxd4
    console.log(variation)
});
$("#philidor-Qxd4").click(function() {
    startGame()
    variation = philidorQxd4
    console.log(variation)
});
$("#hanham-variation").click(function() {
    startGame()
    variation = philidorHanham
    console.log(variation)
});
$("#philidor-countergambit").click(function() {
    $("#philidor-countergambit-show").toggleClass("show");
});
$("#philidor-zukertort").click(function() {
    startGame()
    variation = philidorZukertort
    console.log(variation)
});
$("#philidor-keres").click(function() {
    startGame()
    variation = philidorKeres
    console.log(variation)
});
$("#philidor-sozin").click(function() {
    startGame()
    variation = philidorSozin
    console.log(variation)
});
$("#philidor-jaenisch").click(function() {
    startGame()
    variation = philidorJaenisch
    console.log(variation)
});
$("#philidor-markov").click(function() {
    startGame()
    variation = philidorMarkov
    console.log(variation)
});


$("#vienna-game").click(function() {
    $("#vienna-game-show").toggleClass("show");
});
$("#vienna-falkbeer").click(function() {
    $("#vienna-falkbeer-show").toggleClass("show");
});
$("#vienna-game-d5").click(function() {
    startGame()
    variation = viennad5
    console.log(variation)
});
$("#vienna-game-exf4").click(function() {
    startGame()
    variation = viennaexd4
    console.log(variation)
});
$("#vienna-game-mieses").click(function() {
    startGame()
    variation = viennaMieses
    console.log(variation)
});
$("#vienna-game-mengarini").click(function() {
    startGame()
    variation = viennaMengarini
    console.log(variation)
});


$("#vienna-max-lange").click(function() {
    $("#max-lange-show").toggleClass("show");
});
$("#vienna-hamppe-muzio").click(function() {
    startGame()
    variation = viennaHamppeMuzio
    console.log(variation)
});
$("#vienna-steinitz-gambit").click(function() {
    startGame()
    variation = viennaSteinitzGambit
    console.log(variation)
});


// $("#bishops-opening").click(function() {
//     $("#bishops-opening-show").toggleClass("show");
// });
$("#kings-gambit").click(function() {
    $("#kings-gambit-show").toggleClass("show");
});
$("#kings-gambit-accepted").click(function() {
    $("#kings-gambit-accepted-show").toggleClass("show");
});
$("#kings-knight-gambit").click(function() {
    $("#kings-knight-gambit-show").toggleClass("show");
});
$("#k-knight-classical").click(function() {
    $("#k-knight-classical-show").toggleClass("show");
});
$("#muzio-gambit").click(function() {
    startGame()
    variation = muzioGambit
    console.log(variation)
});
$("#hanstein-gambit").click(function() {
    startGame()
    variation = hansteinGambit
    console.log(variation)
});
$("#philidor-gambit").click(function() {
    startGame()
    variation = philidorGambit
    console.log(variation)
});
$("#quaade-gambit").click(function() {
    startGame()
    variation = quaadeGambit
    console.log(variation)
});
$("#rosentreter-gambit").click(function() {
    startGame()
    variation = rosentreterGambit
    console.log(variation)
});
$("#cunningham-defence").click(function() {
    startGame()
    variation = cunninghamDefence
    console.log(variation)
});
$("#schallopp-defence").click(function() {
    startGame()
    variation = schalloppDefence
    console.log(variation)
});
$("#k-gambit-fischer-defence").click(function() {
    startGame()
    variation = kingsGambitFischer
    console.log(variation)
});
$("#bishops-gambit").click(function() {
    $("#bishops-gambit-show").toggleClass("show");
});
$("#korchnoi-rec").click(function() {
    startGame()
    variation = kingsGambitKorchnoi
    console.log(variation)
});
$("#biguer-rec").click(function() {
    startGame()
    variation = kingsGambitBilguer
    console.log(variation)
});

$("#kings-gambit-declined").click(function() {
    $("#kings-gambit-declined-show").toggleClass("show");
});
$("#falkbeer-countergambit").click(function() {
    $("#falkbeer-countergambit-show").toggleClass("show");
});
$("#falkbeer-countergambit-old").click(function() {
    startGame()
    variation = falkbeerCountergambitOld
    console.log(variation)
});
$("#falkbeer-countergambit-modern").click(function() {
    startGame()
    variation = falkbeerCountergambitModern
    console.log(variation)
});


$("#bongcloud").click(function() {
    startGame()
    variation = bongcloud
    console.log(variation)
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
$("#winawer-variation").click(function() {
    startGame()
    variation = winawerVariation
    console.log(variation)
});
$("#winawer-poisoned-pawn").click(function() {
    startGame()
    variation = winawerPoisonedPawn
    console.log(variation)
});
$("#french-classical-variation").click(function() {
    $("#french-classical-show").toggleClass("show");
});
$("#french-burn").click(function() {
    startGame()
    variation = frenchBurn
    console.log(variation)
});
$("#french-albin").click(function() {
    startGame()
    variation = frenchAlbin
    console.log(variation)
});
$("#french-mccutcheon").click(function() {
    startGame()
    variation = frenchMcCutcheon
    console.log(variation)
});
$("#french-steinitz-variation").click(function() {
    startGame()
    variation = frenchSteinitz
    console.log(variation)
});
$("#french-rubinstein-variation").click(function() {
    startGame()
    variation = frenchRubinstein
    console.log(variation)
});



$("#french-tarrasch").click(function() {
    $("#french-tarrasch-show").toggleClass("show");
});
$("#tarrasch-exd5").click(function() {
    startGame()
    variation = tarraschexd5
    console.log(variation)
});
$("#tarrasch-Qxd5").click(function() {
    startGame()
    variation = tarraschQxd5
    console.log(variation)
});
$("#tarrasch-Nf6").click(function() {
    startGame()
    variation = tarraschNf6
    console.log(variation)
});
$("#tarrasch-guimard").click(function() {
    startGame()
    variation = guimardVariation
    console.log(variation)
});
$("#tarrasch-morozvich").click(function() {
    startGame()
    variation = morozevichVariation
    console.log(variation)
});


$("#french-advance").click(function() {
    $("#french-advance-show").toggleClass("show");
});
$("#french-advance-Qb6").click(function() {
    startGame()
    variation = frenchAdvanceQb6
    console.log(variation)
});
$("#french-advance-Be2").click(function() {
    startGame()
    variation = frenchAdvanceBe2
    console.log(variation)
});
$("#french-milner-barry").click(function() {
    startGame()
    variation = frenchMilnerBarry
    console.log(variation)
});
$("#french-advance-Bd7").click(function() {
    startGame()
    variation = frenchAdvanceBd7
    console.log(variation)
});
$("#french-advance-Nh6").click(function() {
    startGame()
    variation = frenchAdvanceNh6
    console.log(variation)
});
$("#french-exchange").click(function() {
    startGame()
    variation = frenchExchange
    console.log(variation)
});



$("#caro-kann-defence").click(function() {
    $("#caro-kann-show").toggleClass("show");
});
$("#caro-kann-main-line").click(function() {
    $("#caro-main-line-show").toggleClass("show");
});
$("#caro-classical").click(function() {
    startGame()
    variation = CARO_CLASSICAL
    console.log(variation)
});
$("#caro-modern").click(function() {
    startGame()
    variation = CARO_MODERN
    console.log(variation)
});
$("#caro-bronstein").click(function() {
    startGame()
    variation = CARO_BRONSTEIN
    console.log(variation)
});
$("#caro-korchnoi").click(function() {
    startGame()
    variation = CARO_KORCHNOI
    console.log(variation)
});
$("#caro-gurgenidze").click(function() {
    startGame()
    variation = CARO_GURGENIDZE
    console.log(variation)
});
$("#caro-advanced").click(function() {
    startGame()
    variation = CARO_ADVANCED
    console.log(variation)
});
$("#caro-exchange-main").click(function() {
    startGame()
    variation = CARO_EXCHANGE_MAIN
    console.log(variation)
});
$("#caro-panov-attack").click(function() {
    startGame()
    variation = CARO_PANOV_ATTACK
    console.log(variation)
});
$("#caro-fantasy").click(function() {
    startGame()
    variation = CARO_FANTASY
    console.log(variation)
});
$("#caro-two-knights").click(function() {
    startGame()
    variation = CARO_TWO_KNIGHTS
    console.log(variation)
});

$("#pirc-defence").click(function() {
    $("#pirc-defence-show").toggleClass("show");
});
$("#pirc-austrian-castle").click(function() {
    startGame()
    variation = PIRC_AUSTRIAN_CASTLE
    console.log(variation)
});
$("#pirc-austrian-c5").click(function() {
    startGame()
    variation = PIRC_AUSTRIAN_c5
    console.log(variation)
});
$("#pirc-classical").click(function() {
    startGame()
    variation = PIRC_CLASSICAL
    console.log(variation)
});
$("#pirc-kholmov").click(function() {
    startGame()
    variation = PIRC_KHOLMOV
    console.log(variation)
});

$("#modern-defence").click(function() {
    startGame()
    variation = MODERN_DEFENCE
    console.log(variation)
});

$("#alekhine-defence").click(function() {
    $("#alekhine-defence-show").toggleClass("show");
});
$("#alekhine-four-pawns").click(function() {
    startGame()
    variation = ALEKHINE_FOUR_PAWNS
    console.log(variation)
});
$("#alekhine-exchange").click(function() {
    startGame()
    variation = ALEKHINE_EXCHANGE
    console.log(variation)
});
$("#alekhine-modern").click(function() {
    startGame()
    variation = ALEKHINE_MODERN
    console.log(variation)
});
$("#alekhine-balogh").click(function() {
    startGame()
    variation = ALEKHINE_BALOGH
    console.log(variation)
});
$("#alekhine-two-pawns").click(function() {
    startGame()
    variation = ALEKHINE_TWO_PAWNS
    console.log(variation)
});


$("#scandinavian-defence").click(function() {
    $("#scandinavian-show").toggleClass("show");
});
$("#scandi-classical").click(function() {
    startGame()
    variation = SCANDI_CLASSICAL
    console.log(variation)
});
$("#scandi-modern").click(function() {
    startGame()
    variation = SCANDI_MODERN
    console.log(variation)
});



$("#nimzowitsch-defence").click(function() {
    $("#nimzowitsch-show").toggleClass("show");
});
$("#nimzowitsch-d4-d5").click(function() {
    startGame()
    variation = NIMZO_d4_d5
    console.log(variation)
});
$("#nimzowitsch-d4-e5").click(function() {
    startGame()
    variation = NIMZO_d4_e5
    console.log(variation)
});
$("#nimzowitsch-williams").click(function() {
    startGame()
    variation = NIMZO_WILLIAMS
    console.log(variation)
});



$("#owens-defence").click(function() {
    $("#owens-show").toggleClass("show");
});
$("#owens-Bd3").click(function() {
    startGame()
    variation = OWENS_Bd3
    console.log(variation)
});
$("#owens-Nc3").click(function() {
    startGame()
    variation = OWENS_Nc3
    console.log(variation)
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
$("#qga-main").click(function() {
    startGame()
    variation = QGA_MAIN
    console.log(variation)
});
$("#qga-mannhein").click(function() {
    startGame()
    variation = QGA_MANNHEIM
    console.log(variation)
});
$("#qga-e3").click(function() {
    startGame()
    variation = QGA_e3
    console.log(variation)
});
$("#qga-Qa4").click(function() {
    startGame()
    variation = QGA_Qa4
    console.log(variation)
});



$("#queens-gambit-declined").click(function() {
    $("#q-gambit-declined-show").toggleClass("show");
});
$("#qgd-tartakower").click(function() {
    startGame()
    variation = QGD_TARTAKOWER
    console.log(variation)
});
$("#qgd-anti-tartakower").click(function() {
    startGame()
    variation = QGD_ANTI_TARTAKOWER
    console.log(variation)
});
$("#qgd-lasker").click(function() {
    startGame()
    variation = QGD_LASKER
    console.log(variation)
});
$("#qgd-orthodox").click(function() {
    startGame()
    variation = QGD_ORTHODOX
    console.log(variation)
});
$("#qgd-cambridge-springs").click(function() {
    startGame()
    variation = QGD_CAMBRIDGE
    console.log(variation)
});
$("#qgd-exchange").click(function() {
    startGame()
    variation = QGD_EXCHANGE
    console.log(variation)
});
$("#qgd-ragozin").click(function() {
    startGame()
    variation = QGD_RAGOZIN
    console.log(variation)
});
$("#qgd-harrwitz").click(function() {
    startGame()
    variation = QGD_HARRWITZ
    console.log(variation)
});
$("#qgd-alatortsev").click(function() {
    startGame()
    variation = QGD_ALATORTSEV
    console.log(variation)
});


$("#slav-defence").click(function() {
    $("#slav-defence-show").toggleClass("show");
});
$("#slav-exchange").click(function() {
    startGame()
    variation = SLAV_EXCHANGE
    console.log(variation)
});
$("#slav-Nc3").click(function() {
    startGame()
    variation = SLAV_Nc3
    console.log(variation)
});
$("#slav-Qc2").click(function() {
    startGame()
    variation = SLAV_Qc2
    console.log(variation)
});
$("#slav-slow").click(function() {
    startGame()
    variation = SLAV_SLOW
    console.log(variation)
});
$("#slav-geller").click(function() {
    startGame()
    variation = SLAV_GELLER
    console.log(variation)
});
$("#slav-alekhine").click(function() {
    startGame()
    variation = SLAV_ALEKHINE
    console.log(variation)
});
$("#slav-chebanenko").click(function() {
    startGame()
    variation = SLAV_ALEKHINE
    console.log(variation)
});
$("#slav-steiner").click(function() {
    startGame()
    variation = SLAV_STEINER
    console.log(variation)
});
$("#slav-smyslov").click(function() {
    startGame()
    variation = SLAV_SMYSLOV
    console.log(variation)
});
$("#slav-dutch").click(function() {
    startGame()
    variation = SLAV_DUTCH
    console.log(variation)
});
$("#slav-krause").click(function() {
    startGame()
    variation = SLAV_KRAUSE
    console.log(variation)
});
$("#slav-carlsbad").click(function() {
    startGame()
    variation = SLAV_CARLSBAD
    console.log(variation)
});


$("#semi-slav-defence").click(function() {
    $("#semi-slav-defence-show").toggleClass("show");
});
$("#semi-slav-marshall").click(function() {
    startGame()
    variation = SEMI_SLAV_MARSHALL
    console.log(variation)
});
$("#semi-slav-noteboom").click(function() {
    startGame()
    variation = SEMI_SLAV_NOTEBOOM
    console.log(variation)
});
$("#semi-slav-meran").click(function() {
    $("#meran-show").toggleClass("show");
});
$("#semi-slav-classical-meran").click(function() {
    startGame()
    variation = SEMI_SLAV_CLASSICAL_MERAN
    console.log(variation)
});
$("#semi-slav-modern-meran").click(function() {
    startGame()
    variation = SEMI_SLAV_MODERN_MERAN
    console.log(variation)
});
$("#semi-slav-meran-castle").click(function() {
    startGame()
    variation = SEMI_SLAV_MERAN_CASTLE
    console.log(variation)
});
$("#semi-slav-meran-e4").click(function() {
    startGame()
    variation = SEMI_SLAV_MERAN_e4
    console.log(variation)
});
$("#semi-slav-meran-Bd6").click(function() {
    startGame()
    variation = SEMI_SLAV_MERAN_Bd6
    console.log(variation)
});
$("#semi-slav-anti-meran").click(function() {
    $("#anti-meran-show").toggleClass("show");
});
$("#anti-meran-karpov").click(function() {
    startGame()
    variation = ANTI_MERAN_KARPOV
    console.log(variation)
});
$("#anti-meran-a3").click(function() {
    startGame()
    variation = ANTI_MERAN_a3
    console.log(variation)
});
$("#anti-meran-Rd1").click(function() {
    startGame()
    variation = ANTI_MERAN_Rd1
    console.log(variation)
});
$("#anti-meran-e4").click(function() {
    startGame()
    variation = ANTI_MERAN_e4
    console.log(variation)
});
$("#anti-meran-Ng5").click(function() {
    startGame()
    variation = ANTI_MERAN_Ng5
    console.log(variation)
});
$("#anti-meran-shirov-gambit").click(function() {
    startGame()
    variation = ANTI_MERAN_SHIROV_GAMBIT
    console.log(variation)
});
$("#anti-meran-Bg5-variations").click(function() {
    $("#anti-meran-Bg5-show").toggleClass("show");
});
$("#anti-meran-moscow").click(function() {
    startGame()
    variation = ANTI_MERAN_MOSCOW
    console.log(variation)
});
$("#anti-meran-anti-moscow").click(function() {
    startGame()
    variation = ANTI_MERAN_ANTI_MOSCOW
    console.log(variation)
});
$("#anti-meran-botvinnik").click(function() {
    startGame()
    variation = ANTI_MERAN_BOTVINNIK
    console.log(variation)
});
$("#semi-slav-fifth-move").click(function() {
    $("#fifth-move-show").toggleClass("show");
});
$("#semi-slav-Qb3").click(function() {
    startGame()
    variation = SEMI_SLAV_Qb3
    console.log(variation)
});
$("#semi-slav-Qd3").click(function() {
    startGame()
    variation = SEMI_SLAV_Qd3
    console.log(variation)
});
$("#semi-slav-g3").click(function() {
    startGame()
    variation = SEMI_SLAV_g3
    console.log(variation)
});
$("#semi-slav-Bf4").click(function() {
    startGame()
    variation = SEMI_SLAV_Bf4
    console.log(variation)
});


$("#chigorin-defence").click(function() {
    $("#chigorin-show").toggleClass("show");
});
$("#chigorin-Nf6").click(function() {
    startGame()
    variation = CHIGORIN_Nf6
    console.log(variation)
});
$("#chigorin-dxc4").click(function() {
    startGame()
    variation = CHIGORIN_dxc4
    console.log(variation)
});
$("#chigorin-Nf3").click(function() {
    startGame()
    variation = CHIGORIN_Nf3
    console.log(variation)
});
$("#chigorin-cxd5").click(function() {
    startGame()
    variation = CHIGORIN_cxd5
    console.log(variation)
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


