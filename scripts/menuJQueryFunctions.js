// openings menu scripts
// $("#kings-pawn-opening").click(function() {
//     $("#kings-pawn-show").toggleClass("show");
//     // $("#kings-pawn-arrow").toggleClass("rotate");
// });

$('.submenu').hide();

$('.pull').click(function(){
    $(this).closest('li').find('ul.submenu').first().slideToggle();
});

// SICILIAN DEFENCE


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




$("#sicilian-nimzowitsch").click(function() {
    startGame()
    variation = sicilianNimzowitsch
    console.log(variation)
});


$("#grand-prix-attack").click(function() {
    startGame()
    variation = grandPrixAttack
    console.log(variation)
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

$("#giuoco-main-line").click(function() {
    startGame()
    variation = giuocoMainLine
    console.log(variation)
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





// PONZIANI

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


$("#albin-countergambit").click(function() {
    startGame()
    variation = ALBIN_COUNTERGAMBIT
    console.log(variation)
});
$("#albin-countergambit-lasker").click(function() {
    startGame()
    variation = ALBIN_LASKER
    console.log(variation)
});

$("#austrian-defence").click(function() {
    startGame()
    variation = AUSTRIAN_DEFENCE
    console.log(variation)
});

$("#london-system").click(function() {
    startGame()
    variation = LONDON_SYSTEM
    console.log(variation)
});

$("#stonewall-attack").click(function() {
    startGame()
    variation = STONEWALL_ATTACK
    console.log(variation)
});

$("#blackmar-gunderam").click(function() {
    startGame()
    variation = BLACKMAR_GUNDERAM
    console.log(variation)
});
$("#blackmar-teichmann").click(function() {
    startGame()
    variation = BLACKMAR_TEICHMANN
    console.log(variation)
});
$("#blackmar-euwe").click(function() {
    startGame()
    variation = BLACKMAR_EUWE
    console.log(variation)
});
$("#blackmar-bogoljubov").click(function() {
    startGame()
    variation = BLACKMAR_BOGOLJUBOV
    console.log(variation)
});
$("#blackmar-ziegler").click(function() {
    startGame()
    variation = BLACKMAR_ZIEGLER
    console.log(variation)
});
$("#blackmar-ryder").click(function() {
    startGame()
    variation = BLACKMAR_RYDER
    console.log(variation)
});
$("#blackmar-okelly").click(function() {
    startGame()
    variation = BLACKMAR_OKELLY
    console.log(variation)
});
$("#blackmar-vienna").click(function() {
    startGame()
    variation = BLACKMAR_VIENNA
    console.log(variation)
});



$("#rubinstein-parma").click(function() {
    startGame()
    variation = RUBINSTEIN_PARMA
    console.log(variation)
});
$("#rubinstein-karpov").click(function() {
    startGame()
    variation = RUBINSTEIN_KARPOV
    console.log(variation)
});
$("#rubinstein-larsen").click(function() {
    startGame()
    variation = RUBINSTEIN_LARSEN
    console.log(variation)
});
$("#rubinstein-main").click(function() {
    startGame()
    variation = RUBINSTEIN_MAIN
    console.log(variation)
});
$("#rubinstein-khasin").click(function() {
    startGame()
    variation = RUBINSTEIN_KHASIN
    console.log(variation)
});
$("#rubinstein-averbakh").click(function() {
    startGame()
    variation = RUBINSTEIN_AVERBAKH
    console.log(variation)
});
$("#rubinstein-reshevsky").click(function() {
    startGame()
    variation = RUBINSTEIN_RESHEVSKY
    console.log(variation)
});
$("#rubinstein-modern").click(function() {
    startGame()
    variation = RUBINSTEIN_MODERN
    console.log(variation)
});
$("#rubinstein-hubner").click(function() {
    startGame()
    variation = RUBINSTEIN_HUBNER
    console.log(variation)
});
$("#rubinstein-fischer").click(function() {
    startGame()
    variation = RUBINSTEIN_FISCHER
    console.log(variation)
});
$("#rubinstein-tal").click(function() {
    startGame()
    variation = RUBINSTEIN_TAL
    console.log(variation)
});
$("#rubinstein-keres").click(function() {
    startGame()
    variation = RUBINSTEIN_KERES
    console.log(variation)
});
$("#rubinstein-dutch").click(function() {
    startGame()
    variation = RUBINSTEIN_DUTCH
    console.log(variation)
});


$("#nimzo-capablanca-main").click(function() {
    startGame()
    variation = CAPABLANCA_MAIN
    console.log(variation)
});
$("#nimzo-capablanca-c5").click(function() {
    startGame()
    variation = CAPABLANCA_c5
    console.log(variation)
});
$("#nimzo-capablanca-d5").click(function() {
    startGame()
    variation = CAPABLANCA_d5
    console.log(variation)
});
$("#nimzo-capablanca-Nc6").click(function() {
    startGame()
    variation = CAPABLANCA_Nc6
    console.log(variation)
});
$("#nimzo-gheorghiu").click(function() {
    startGame()
    variation = GHEORGHIU_VARIATION
    console.log(variation)
});
$("#nimzo-leningrad").click(function() {
    startGame()
    variation = LENINGRAD_VARIATION
    console.log(variation)
});


$("#qid-modern-main").click(function() {
    startGame()
    variation = QID_MODERN_MAIN
    console.log(variation)
});
$("#qid-old-main").click(function() {
    startGame()
    variation = QID_OLD_MAIN
    console.log(variation)
});
$("#qid-e3").click(function() {
    startGame()
    variation = QID_e3
    console.log(variation)
});



$("#bid-Qe7").click(function() {
    startGame()
    variation = BID_Qe7
    console.log(variation)
});
$("#bid-c5").click(function() {
    startGame()
    variation = BID_c5
    console.log(variation)
});
$("#bid-Nbd2").click(function() {
    startGame()
    variation = BID_Nbd2
    console.log(variation)
});


$("#catalan-open-classical").click(function() {
    startGame()
    variation = CATALAN_OPEN_CLASSICAL
    console.log(variation)
});
$("#catalan-open-alekhine").click(function() {
    startGame()
    variation = CATALAN_OPEN_ALEKHINE
    console.log(variation)
});
$("#catalan-closed-main").click(function() {
    startGame()
    variation = CATALAN_CLOSED_MAIN
    console.log(variation)
});
$("#catalan-closed-botvinnik").click(function() {
    startGame()
    variation = CATALAN_CLOSED_BOTVINNIK
    console.log(variation)
});


$("#grunfeld-exchange").click(function() {
    startGame()
    variation = GRUNFELD_EXCHANGE
    console.log(variation)
});
$("#grunfeld-hungarian").click(function() {
    startGame()
    variation = GRUNFELD_HUNGARIAN
    console.log(variation)
});
$("#grunfeld-smyslov").click(function() {
    startGame()
    variation = GRUNFELD_SMYSLOV
    console.log(variation)
});
$("#grunfeld-taimanov").click(function() {
    startGame()
    variation = GRUNFELD_TAIMANOV
    console.log(variation)
});
$("#grunfeld-gambit").click(function() {
    startGame()
    variation = GRUNFELD_GAMBIT
    console.log(variation)
});
$("#neo-grunfeld").click(function() {
    startGame()
    variation = NEO_GRUNFELD
    console.log(variation)
});


$("#kings-indian-main-line").click(function() {
    startGame()
    variation = KID_MAIN_LINE
    console.log(variation)
});
$("#kings-indian-old-main").click(function() {
    startGame()
    variation = KID_OLD_MAIN_LINE
    console.log(variation)
});
$("#kings-indian-petrosian").click(function() {
    startGame()
    variation = KID_PETROSIAN
    console.log(variation)
});
$("#kings-indian-gligoric").click(function() {
    startGame()
    variation = KID_GLIGORIC
    console.log(variation)
});
$("#kings-indian-exchange").click(function() {
    startGame()
    variation = KID_EXCHANGE
    console.log(variation)
});
$("#kings-indian-samisch").click(function() {
    startGame()
    variation = KID_SAMISCH
    console.log(variation)
});
$("#kings-indian-panno").click(function() {
    startGame()
    variation = KID_PANNO
    console.log(variation)
});
$("#kings-indian-averbakh").click(function() {
    startGame()
    variation = KID_AVERBAKH
    console.log(variation)
});
$("#kings-indian-four-pawns").click(function() {
    startGame()
    variation = KID_FOUR_PAWNS
    console.log(variation)
});
$("#kings-indian-gallagher").click(function() {
    startGame()
    variation = KID_GALLAGHER
    console.log(variation)
});


$("#czech-benoni").click(function() {
    startGame()
    variation = BENONI_CZECH
    console.log(variation)
});
$("#modern-benoni").click(function() {
    startGame()
    variation = BENONI_MODERN
    console.log(variation)
});
$("#snake-benoni").click(function() {
    startGame()
    variation = BENONI_SNAKE
    console.log(variation)
});
$("#benoni-fianchetto").click(function() {
    startGame()
    variation = BENONI_FIANCHETTO
    console.log(variation)
});
$("#benoni-taimanov").click(function() {
    startGame()
    variation = BENONI_TAIMANOV
    console.log(variation)
});
$("#benoni-four-pawns").click(function() {
    startGame()
    variation = BENONI_FOUR_PAWNS
    console.log(variation)
});
$("#benoni-classical").click(function() {
    startGame()
    variation = BENONI_CLASSICAL
    console.log(variation)
});
$("#benko-main-line").click(function() {
    startGame()
    variation = BENKO_MAIN
    console.log(variation)
});
$("#benko-sosonko").click(function() {
    startGame()
    variation = BENKO_SOSONKO_ACCEPTED
    console.log(variation)
});
$("#benko-river-styx").click(function() {
    startGame()
    variation = BENKO_RIVER_STYX
    console.log(variation)
});

$("#dutch-traditional").click(function() {
    startGame()
    variation = DUTCH_TRADITIONAL
    console.log(variation)
});
$("#dutch-common").click(function() {
    startGame()
    variation = DUTCH_COMMON
    console.log(variation)
});
$("#dutch-leningrad").click(function() {
    startGame()
    variation = DUTCH_LENINGRAD
    console.log(variation)
});
$("#dutch-botvinnik").click(function() {
    startGame()
    variation = DUTCH_BOTVINNIK
    console.log(variation)
});
$("#dutch-stonewall").click(function() {
    startGame()
    variation = DUTCH_STONEWALL
    console.log(variation)
});
$("#dutch-ilyin").click(function() {
    startGame()
    variation = DUTCH_ILYIN
    console.log(variation)
});


$("#englund-main").click(function() {
    startGame()
    variation = ENGLUND_MAIN
    console.log(variation)
});
$("#englund-blackburne").click(function() {
    startGame()
    variation = ENGLUND_BLACKBURNE
    console.log(variation)
});
$("#englund-soller").click(function() {
    startGame()
    variation = ENGLUND_SOLLER
    console.log(variation)
});
$("#englund-felbecker").click(function() {
    startGame()
    variation = ENGLUND_FELBECKER
    console.log(variation)
});
$("#englund-zilbermints").click(function() {
    startGame()
    variation = ENGLUND_ZILBERMINTS
    console.log(variation)
});

$("#english-symmetrical").click(function() {
    startGame()
    variation = ENGLISH_SYMMETRICAL
    console.log(variation)
});
$("#english-mikenas-flohr").click(function() {
    startGame()
    variation = ENGLISH_MIKENAS_FLOHR
    console.log(variation)
});
$("#english-botvinnik").click(function() {
    startGame()
    variation = ENGLISH_BOTVINNIK
    console.log(variation)
});
$("#english-taimanov").click(function() {
    startGame()
    variation = ENGLISH_TAIMANOV
    console.log(variation)
});
$("#english-hort").click(function() {
    startGame()
    variation = ENGLISH_HORT
    console.log(variation)
});
$("#english-wimpey").click(function() {
    startGame()
    variation = ENGLISH_WIMPEY
    console.log(variation)
});


