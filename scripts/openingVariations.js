

// ----------------------- OPEN SICILIAN -----------------------
// sicilian najdorf 
const sicilianNajdorfClassicalMainLine = ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7", "Qf3", "Qc7", "O-O-O", "Nbd7", "g4"]
const sicilianNajdorfArgentine = ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bg5", "e6", "f4", "Be7", "Qf3", "Qc7", "h6", "Bh4", "g5", "fxg5", "Nfd7"] // maybe not include this one
const sicilianNajdorfEnglishAttack = ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Be3", "e5", "Nb3", "Be6", "f3"]
const sicilianNajdorfLipnitzkyAttack = ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Bc4", "e6", "Bb3", "b5"]
const sicilianNajdorfOpocensky = ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "Be2", "e6"] // maybe not include this one
const sicilianNajdorfAmsterdam = ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "f4", "e5", "Nf3", "Nbd7", "a4", "Be7", "Bd3", "O-O"]
const sicilianNajdorfAdams = ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6", "h3", "e5", "Nde2", "h5"]

// sicilian dragon 
const sicilianDragonPositional = ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'g6', 'Be3', 'Bg7', 'f3', 'O-O', 'Qd2', 'Nc6', 'O-O-O']
const sicilianDragonYugoslav = ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "g6", "Be3", "Bg7", "f3", "O-O", "Qd2", "Nc6", "Bc4", "Bd7", "O-O-O", "Rc8", "Bb3", "Ne5", "h4", "Nc4", "Bxc4", "Rxc4", "h5", "Nxh5", "g4", "Nf6", "Bh6"]
const sicilianDragonSoltis = ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'g6', 'Be3', 'Bg7', 'f3', 'O-O', 'Qd2', 'Nc6', 'Bc4', 'Bd7', 'O-O-O', 'Rc8', 'Bb3', 'Ne5', 'h4', 'h5']
const sicilianDragonClassical = ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "g6", "Be2", "Bg7", "Be3", "Nc6", "O-O", "O-O", "Nb3", "d5"]
const sicilianDragonLevenfish = ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "g6", "f4", "Nc6", "e5"]
const sicilianDragonHarrington = ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'g6', 'Be3', 'Bg7', 'Be2', 'O-O', 'Qd2', 'Nc6', 'O-O-O']

// sicilian classical
const sicilianRichter = ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'Nc6', 'Bg5', 'e6', 'Qd2']
const sicilianFischerSozin = ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'Nc6', 'Bc4', 'e6', 'Bb3', 'a6', 'O-O']
const sicilianVelimirovic = ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'Nc6', 'Bc4', 'e6', 'Be3', 'Be7', 'Qe2']
const sicilianBoleslavsky = ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'Nc6', 'Be2', 'e5', 'Nf3', 'h6', 'O-O', 'Be7', 'Re1', 'O-O', 'h3']

// scheveningen variation
// maybe add more variations later if im feeling up to it
const scheveningenKeres = ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'e6', 'g4', 'h6', 'h4', 'Nc6', 'Rg1', 'd5', 'Bb5', 'Bd7', 'exd5', 'Nxd5', 'Nxd5', 'exd5', 'Qe2+', 'Be7', 'Nf5', 'Bxf5', 'gxf5', 'Kf8', 'Be3', 'Qa5+']
const scheveningenClassical = ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'e6', 'Be2', 'a6', 'O-O', 'Be7', 'Be3', 'O-O', 'f4', 'Qc7', 'a4', 'Nc6', 'Kh1', 'Re8', 'Bf3']
const scheveningenEnglish = ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'e6', 'Be3', 'a6', 'f3', 'b5', 'g4', 'h6', 'Qd2', 'Nbd7', 'O-O-O', 'Bb7']
const scheveningenFischerSozin = ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'e6', 'Bc4', 'Be7', 'Bb3', 'O-O', 'Be3', 'Na6', 'Qe2', 'Nc5', 'f3']
const scheveningenTal = ['e4', 'c5', 'Nf3', 'd6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'e6', 'f4', 'Nc6', 'Be3', 'Be7', 'Qf3']

const acceleratedMainLine = ['e4', 'c5', 'Nf3', 'Nc6', 'd4', 'cxd4', 'Nxd4', 'g6', 'Nc3', 'Bg7', 'Be3', 'Nf6', 'Bc4', 'O-O', 'Bb3']
const acceleratedPassmore = ['e4', 'c5', 'Nf3', 'Nc6', 'd4', 'cxd4', 'Nxd4', 'g6', 'Nxc6', 'bxc6', 'Qd4', 'Nf6', 'e5', 'Ng8', 'e6', 'Nf6', 'exf7+', 'Kxf7', 'Be2']
const acceleratedMaroczy = ['e4', 'c5', 'Nf3', 'Nc6', 'd4', 'cxd4', 'Nxd4', 'g6', 'c4']

const sicilianKalashnikov = ['e4', 'c5', 'Nf3', 'Nc6', 'd4', 'cxd4', 'Nxd4', 'e5', 'Nb5', 'd6', 'N1c3', 'a6', 'Na3', 'b5', 'Nd5', 'Nge7']
const sicilianTaimanov = ['e4', 'c5', 'Nf3', 'e6', 'd4', 'cxd4', 'Nxd4', 'Nc6', 'Nc3', 'Qc7', 'Be2', 'a6', 'Be3', 'Nf6']
const sicilianKanVariation = ['e4', 'c5', 'Nf3', 'e6', 'd4', 'cxd4', 'Nxd4', 'a6', 'Bd3', 'Bc5', 'Nb3', 'Ba7']
const sicilianFourKnights = ['e4', 'c5', 'Nf3', 'e6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'Nc6', 'Nxc6', 'bxc6', 'e5', 'Nd5', 'Ne4']
const sicilianPinVariation = ['e4', 'c5', 'Nf3', 'e6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'Bb4', 'e5', 'Nd5', 'Bd2', 'Nxc3', 'bxc3', 'Be7', 'Qg4'] 

const sicilianClosed = ['e4', 'c5', 'Nc3', 'Nc6', 'g3', 'g6', 'Bg2', 'Bg7', 'd3', 'd6', 'Be3']

const sicilianNimzowitsch = ['e4', 'c5', 'Nf3', 'Nf6', 'e5', 'Nd5', 'Nc3', 'e6', 'Nxd5', 'exd5', 'd4', 'Nc6', 'dxc5', 'Bxc5', 'Qxd5', 'Qb6', 'Bc4', 'Bxf2+', 'Ke2', 'O-O', 'Rf1', 'Bc5', 'Bg5', 'Nd4+', 'Kd1']

const grandPrixAttack = ['e4', 'c5', 'Nc3', 'Nc6', 'f4', 'g6', 'Nf3', 'Bg7', 'Bb5']



// OPEN GAME ---------------------------- //



// scotch game 
const scotchClassical_Be3 = ["e4", "e5", "Nf3", "Nc6", "d4", "exd4", "Nxd4", "Bc5", "Be3", "Qf6", "c3", "Nge7", "Bc4", "Ne5", "Be2", "Qg6", "O-O", "d6"]
const scotchIntermezzo = ["e4", "e5", "Nf3", "Nc6", "d4", "exd4", "Nxd4", "Bc5", "Nxc6", "Qf6", "Qd2", "dxc6", "Nc3"]
const potterVariation = ["e4", "e5", "Nf3", "Nc6", "d4", "exd4", "Nxd4", "Bc5", "Nb3", "Bb6", "Nc3", "Qf6", "Qe2", "Nge7", "Be3", "O-O", "O-O-O", "d6"]
const steinitzVariation = ["e4", "e5", "Nf3", "Nc6", "d4", "exd4", "Nxd4", "Nxd4", "Qxd4", "d6", "Nc3", "Nf6", "f3", "Be7", "Be3", "O-O", "O-O-O"]
const scotchGambit = ["e4", "e5", "Nf3", "Nc6", "d4", "Nxd4", "Bc4", "Bc5", "c3", "Nf6"]
// ADD GORING GAMBIT

// RUY LOPEZ
//
const morphyExchange = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Bxc6', 'dxc6', 'd4', 'exd4', 'Qxd4', 'Qxd4', 'Nxd4']
const morphyNorwegian = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'b5', 'Bb3', 'Na5', 'O-O', 'd6', 'd4', 'Nxb3']
const morphyModernSteinitz = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'd6', 'c3', 'Bd7', 'd4']
const morphyArkhangelsk = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'b5', 'Bb3', 'Bb7', 'c3']
const morphyModernArkhangelsk = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'b5', 'Bb3', 'Bc5', 'a4', 'Rb8']
const morphyOpenDefence = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Nxe4', 'd4', 'b5', 'Bb3', 'd5', 'dxe5', 'Be6', 'c3', 'Bc5', 'Nbd2', 'O-O', 'Bc2']

const morphyDelayedExchange = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Bxc6']
const morphyCentre = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'd4', 'exd4', 'Re1', 'b5', 'Bb3']
const morphyWorrallAttack = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Qe2', 'b5', 'Bb3', 'O-O', 'c3', 'd5']
const morphyModernLine = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'd3', 'd6', 'c3']
const morphyClosedAverbakh = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'd6', 'Bxc6+', 'bxc6', 'd4']
const morphyTrajkovic = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'Bb7', 'c3', 'd5', 'exd5', 'Nxd5', 'Nxe5', 'Nxe5', 'Rxe5', 'Nf4']
const morphyClosedMarshall = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'O-O', 'c3', 'd5', 'exd5', 'Nxd5', 'Nxe5', 'Nxe5', 'Rxe5', 'c6']
const morphyPilnik = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'd6', 'c3', 'O-O', 'd3']
const morphyYates = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'd6', 'c3', 'O-O', 'd4']
const morphyChigorin = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'd6', 'c3', 'O-O', 'h3', 'Na5', 'Bc2', 'c5', 'd4', 'Qc7']
const morphyBreyer = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'd6', 'c3', 'O-O', 'h3', 'Nb8', 'd4', 'Nbd7', 'Nbd2', 'Bb7', 'Bc2', 'Re8', 'Nf1', 'Bf8', 'Ng3', 'g6', 'a4', 'c5', 'd5', 'c4', 'Bg5', 'h6', 'Be3', 'Nc5', 'Qd2', 'h5']
const morphyZaitsev = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'd6', 'c3', 'O-O', 'h3', 'Bb7', 'd4', 'Re8', 'Nbd2', 'Bf8']
const morphyKarpov = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'd6', 'c3', 'O-O', 'h3', 'Nd7']
const morphyKholmov = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'd6', 'c3', 'O-O', 'h3', 'Be6', 'd4', 'Bxb3', 'axb3', 'exd4', 'cxd4', 'd5', 'e5', 'Ne4', 'Nc3', 'f5', 'exf6', 'Bxf6', 'Nxe4', 'dxe4', 'Rxe4', 'Qd5', 'Rg4']
const morphySmyslov = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'd6', 'c3', 'O-O', 'h3', 'h6']
const nonMorphyBirds = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'Nd4', 'Nxd4', 'exd4', 'O-O', 'Bc5', 'd3', 'c6', 'Ba4', 'Ne7']
const nonMorphySteinitz = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'd6', 'd4', 'Bd7', 'Nc3', 'Nf6', 'O-O', 'Be7', 'Re1']

const berlinMainLine = ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'Nf6', 'O-O', 'Nxe4', 'd4', 'Nd6', 'Bxc6', 'dxc6', 'dxe5', 'Nf5', 'Qxd8+', 'Kxd8']

const giuocoMainLine = ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3', 'Nf6', 'd4', 'exd4', 'cxd4', 'Bb4+', 'Nc3', 'Nxe4', 'O-O']
const evansGambitAccepted = ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'b4', 'Bxb4', 'c3', 'Ba5', 'd4', 'd6', 'O-O']
const evansGambitDeclined = ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'b4', 'Bb6', 'a4', 'a6']
const giuocoPianissimo = ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'd3', 'Nf6', 'Bg5', 'h6', 'Bh4', 'd6']

const twoKnightsMain = ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Nf6', 'Ng5', 'd5', 'exd5', 'Na5', 'Bb5+', 'c6', 'dxc6', 'bxc6', 'Be2', 'h6', 'Nf3', 'e4', 'Ne5', 'Bd6']
const twoKnightsTraxler = ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Nf6', 'Ng5', 'Bc5', 'Bxf7+', 'Ke7', 'Bb3']

const semiItalianMain = ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'd6', 'c3', 'Bg4', 'd4', 'Qe7', 'Be3', 'Nf6', 'Qb3', 'Nd8', 'Nbd2', 'g6', 'dxe5']
const semiItaliand4 = ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'd6', 'd4', 'Bg4', 'c3', 'Qf6', 'Be3', 'Bxf3', 'Qxf3']
const semiItalianh3 = ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'd6', 'h3', 'Be7', 'd4', 'Nf6', 'd5', 'Nb8', 'Bd3', 'O-O', 'Be3', 'a5']

const ponzianiJaenisch = ['e4', 'e5', 'Nf3', 'Nc6', 'c3', 'Nf6', 'd4', 'Nxe4', 'd5', 'Ne7', 'Nxe5', 'Ng6', 'Qd4', 'Qf6', 'Qxe4', 'Qxe5']
const ponzianiLeonhardt = ['e4', 'e5', 'Nf3', 'Nc6', 'c3', 'd5', 'Qa4', 'Nf6', 'Nxe5', 'Bd6', 'Nxc6', 'bxc6', 'd3', 'O-O', 'Be2', 'Re8']
const ponzianiSteinitz = ['e4', 'e5', 'Nf3', 'Nc6', 'c3', 'd5', 'f6', 'Bb5', 'Nge7', 'exd5', 'Qxd5', 'd4', 'Bd7']
const ponzianiKmoch = ['e4', 'e5', 'Nf3', 'Nc6', 'c3', 'Nge7', 'd4', 'exd4', 'Bc4', 'd5', 'exd5', 'Nxd5', 'O-O', 'Be7', 'Nxd4', 'Nxd4', 'cxd4', 'Be6']

const petrovClassicalMain = ['e4', 'e5', 'Nf3', 'Nf6', 'Nxe5', 'd6', 'Nf3', 'Nxe4', 'd4', 'd5', 'Bd3']
const petrovBestForBlack = ['e4', 'e5', 'Nf3', 'Nf6', 'Nxe5', 'Qe2', 'Qe7', 'Qxe4', 'd6', 'd4', 'dxe5', 'dxe5', 'Nc6', 'Nc3', 'Qxe5', 'Qxe5', 'Nxe5', 'Nb5']
const petrovCochrane = ['e4', 'e5', 'Nf3', 'Nf6', 'Nxe5', 'd6', 'Nxf7', 'Kxf7', 'Nc3', 'c5', 'Bc4+', 'Be6', 'Bxe6+', 'Kxe6', 'd4', 'Kf7', 'dxc5', 'Nc6']
const petrovSteinitz = ['e4', 'e5', 'Nf3', 'Nf6', 'd4', 'Nxe4', 'Bd3', 'd5', 'Nxe5', 'Bd6', 'O-O', 'O-O', 'c4', 'Bxe5', 'dxe5', 'Nc6', 'cxd5', 'Qxd5', 'Qc2', 'Nb4', 'Bxe4', 'Nxc2']

const philidorNxd4 = ['e4', 'e5', 'Nf3', 'd6', 'd4', 'exd4', 'Nxd4', 'Nf6', 'Nc3', 'Be7', 'Bc4', 'O-O', 'c5']
const philidorQxd4 = ['e4', 'e5', 'Nf3', 'd6', 'd4', 'exd4', 'Qxd4', 'Nc6', 'Bb5', 'Bd7', 'Bxc6', 'Bxc6', 'Nc3', 'Nf6', 'Bg5', 'O-O-O']
const philidorHanham = ['e4', 'e5', 'Nf3', 'd6', 'Nf6', 'Nc3', 'Nbd7', 'Bc4', 'Be7', 'O-O', 'O-O', 'a4', 'c6']
const philidorZukertort = ['e4', 'e5', 'Nf3', 'd6', 'Nf6', 'f5', 'Nc3', 'fxe4', 'Nxe4', 'd5', 'Nxe5', 'dxe4', 'Qh5+', 'g6', 'Nxg6', 'Nf6', 'Qe5+', 'Be7', 'Nxh8', 'Nc6', 'Bb5', 'Qd5', 'Bg5']
const philidorKeres = ['e4', 'e5', 'Nf3', 'd6', 'Nf6', 'f5', 'Nc3', 'fxe4', 'Nxe4', 'd5', 'Nxe5', 'dxe4', 'Qh5+', 'g6', 'Nxg6', 'Nf6', 'Qe5+', 'Kf7', 'Bc4+', 'Kg7', 'Bh6+', 'Kxh6', 'Nxh8', 'Bb4+', 'c3', 'Qxh8', 'cxb4']
const philidorSozin = ['e4', 'e5', 'Nf3', 'd6', 'Nf6', 'f5', 'Nc3', 'Nf6', 'dxe5', 'Nxe4', 'Nxe4', 'fxe4', 'Ng5', 'd5', 'e6', 'Bc5', 'Nxe4']
const philidorJaenisch = ['e4', 'e5', 'Nf3', 'd6', 'Nf6', 'f5', 'Bc4', 'exd4', 'Ng5', 'Nh6', 'Nxh7', 'Ng4', 'Nxf8', 'Kxf8', 'Qxd4', 'Nc6']
const philidorMarkov = ['e4', 'e5', 'Nf3', 'd6', 'Nf6', 'f5', 'dxe5', 'Bb4+', 'c3', 'Bc5', 'Nf7', 'Qf6', 'Be3', 'Bxe6', 'Nxh8', 'Bxe3', 'fxe3', 'Qh4+', 'g3']

const viennad5 = ['e4', 'e5', 'Nc3', 'Nf6', 'f4', 'd5', 'fxe5', 'Nxe4', 'Nf3'] // see if i can find a deeper line for this
const viennaexd4 = ['e4', 'e5', 'Nc3', 'Nf6', 'f4', 'exf4', 'e5', 'Qe7', 'Qe2', 'Ng8', 'Nf3']
// const viennaBc4 = ['e4', 'e5', 'Nc3', 'Nf6', 'Bc4',  // maybe take this out
const viennaMieses = ['e4', 'e5', 'Nc3', 'Nf6', 'g3', 'd5', 'exd5', 'Nxd5', 'Bg2', 'Nxc3', 'bxc3', 'Bd6', 'Nf3', 'O-O', 'O-O']
const viennaMengarini = ['e4', 'e5', 'Nc3', 'Nf6', 'a3', 'Bc5', 'Nf3', 'exd5', 'O-O', 'Nxe5', 'Re8', 'd4']
const viennaHamppeMuzio = ['e4', 'e5', 'Nc3', 'Nc6', 'f4', 'exf4', 'Nf3', 'g5', 'Bc4', 'g4', 'O-O', 'gxf3', 'Qxf3']
const viennaSteinitzGambit = ['e4', 'e5', 'Nc3', 'Nc6', 'f4', 'exf4', 'd4', 'Qh4+', 'Ke2']
// const viennaBc4 = ['e4', 'e5', 'Nc3', 'Nf6', 'Bc4', 'Nc6'] // need a way deeper line
//
const muzioGambit = ['e4', 'e5', 'f4', 'exf4', 'Nf3', 'f5', 'Bc4', 'g4', 'O-O', 'gxf3', 'Qxf3', 'Qf6', 'e5', 'Qxe5', 'Bxf7+']
const hansteinGambit = ['e4', 'e5', 'f4', 'exf4', 'Nf3', 'g5', 'Bc4', 'Bg7', 'd4', 'd6', 'O-O', 'h6']
const philidorGambit = ['e4', 'e5', 'f4', 'exf4', 'Nf3', 'g5', 'Bc4', 'Bg7', 'h4', 'h6', 'd4', 'd6']
const quaadeGambit = ['e4', 'e5', 'f4', 'exf4', 'Nf3', 'g5', 'Nc3', 'Bg7', 'd4', 'g4']
const rosentreterGambit = ['e4', 'e5', 'f4', 'exf4', 'Nf3', 'g5', 'd4', 'g4', 'Ne5', 'Qh4+', 'g3', 'fxg3', 'Qxg4', 'g2', 'Qxh4', 'gxh1=Q', 'Nc3']
const cunninghamDefence = ['e4', 'e5', 'f4', 'exf4', 'Nf3', 'Be7', 'Nc3', 'Bh4+', 'Ke2', 'd5', 'Nxd5', 'Nf6', 'Nxf6+', 'Qxf6', 'd4', 'Bg4', 'Qd2']
const schalloppDefence = ['e4', 'e5', 'f4', 'exf4', 'Nf3', 'Nf6', 'e5', 'Nh5', 'd4', 'd6', 'Qe2', 'Be7', 'exd6', 'Qxd6', 'Qb5+']
const kingsGambitFischer = ['e4', 'e5', 'f4', 'exf4', 'Nf3', 'd6', 'd4', 'g5', 'h4', 'g4', 'Ng5', 'f6', 'Nh3', 'gxh3', 'Qh5+', 'Kd7', 'Bxf4']
const kingsGambitKorchnoi = ['e4', 'e5', 'f4', 'exf4', 'Bc4', 'Nf6', 'Nc3', 'c6', 'Bb3', 'd5', 'exd5', 'cxd5', 'd4', 'Bd6', 'Nge2', 'O-O', 'O-O', 'g5', 'Nxd5', 'Nc6']
const kingsGambitBilguer = ['e4', 'e5', 'f4', 'exf4', 'Bc4', 'd5', 'Bxd5', 'Nf6', 'Nc3', 'Bb4', 'Nf3', 'Bxc3', 'dxc3', 'c6', 'Bc4', 'Qxd1+', 'Kxd1', 'O-O', 'Bxf4', 'Nxe4']
const falkbeerCountergambitOld = ['e4', 'e5', 'f4', 'd5', 'exd5', 'e4', 'd3', 'Nf6', 'dxe4', 'Nxe4', 'Nf3', 'Bc5']
const falkbeerCountergambitModern = ['e4', 'e5', 'f4', 'd5', 'exd5', 'c6', 'Nc3', 'exf4', 'Nf3', 'Bd6', 'd4', 'Ne7', 'dxc6', 'Nbxc6']
// const kingsDeclinedClassical = ['e4', 'e5', 'f4', 'Bc5', 

const bongcloud = ['e4', 'e5', 'Ke2', 'Ke7', 'Ke1', 'Ke8']

const winawerVariation = ['e4', 'e6', 'd4', 'd5', 'Nc3', 'Bb4', 'e5', 'c5', 'a3', 'Bxc3+', 'bxc3', 'Ne7', 'Nf3', 'Bd7', 'Bd3', 'c4', 'Be2', 'Ba4', 'O-O', 'Qa5', 'Bd2', 'Nbc6', 'Bg5', 'h6', 'Nh3', 'O-O']
const winawerPoisonedPawn = ['e4', 'e6', 'd4', 'd5', 'Nc3', 'Bb4', 'e5', 'c5', 'a3', 'Bxc3+', 'bxc3', 'Ne7', 'Qg4', 'Qc7', 'Qxg7', 'Rg8', 'Qxh7', 'cxd4', 'Ne2', 'Nbc6']
const frenchBurn = ['e4', 'e6', 'd4', 'd5', 'Nc3', 'Nf6', 'Bg5', 'dxe4', 'Nxe4', 'Be7', 'Bxf6', 'Bxf6', 'Nf3', 'Nd7', 'O-O', 'Nf3', 'c5']
const frenchAlbin = ['e4', 'e6', 'd4', 'd5', 'Nc3', 'Nf6', 'Be7', 'e5', 'Nfd7', 'h4', 'Bxg5', 'hxg5', 'Qxg5', 'Nh3', 'Qe7', 'Qg4', 'g6', 'Ng5']
const frenchMcCutcheon = ['e4', 'e6', 'd4', 'd5', 'Nc3', 'Nf6', 'Be7', 'Bb4', 'e5', 'h6', 'Bd2', 'Bxc3', 'bxc3', 'Ne4', 'Qg4']
const frenchSteinitz = ['e4', 'e6', 'd4', 'd5', 'Nc3', 'Nf6', 'e5', 'Nfd7', 'f4', 'c5', 'Nf3', 'Nc6', 'Be3']
const frenchRubinstein = ['e4', 'e6', 'd4', 'd5', 'Nc3', 'dxe4', 'Nxe4', 'Nd7', 'Nf3', 'Ngf6', 'Nxf6+', 'Nxf6']
const tarraschexd5 = ['e4', 'e6', 'd4', 'd5', 'Nd2', 'c5', 'exd5', 'exd5', 'Ngf4', 'Nc6', 'Bb5', 'Bd6', 'O-O', 'Nge7', 'dxc5', 'Bxc5', 'Nb3', 'Bb6']
const tarraschQxd5 = ['e4', 'e6', 'd4', 'd5', 'Nd2', 'c5', 'exd5', 'Qxd5', 'Ngf3', 'cxd4', 'Bc4', 'Qd6', 'O-O', 'Nf6', 'Nb3', 'Nc6', 'Nbxd4', 'Nxd4']
const tarraschNf6 = ['e4', 'e6', 'd4', 'd5', 'Nd2', 'Nf6', 'e5', 'Nfd7', 'Bd3', 'c5', 'c3', 'Nc6', 'Ne2', 'cxd4', 'cxd4', 'f6', 'exf6', 'Nxf6', 'Nf3', 'Bd6']
const guimardVariation = ['e4', 'e6', 'd4', 'd5', 'Nd2', 'Nc6', 'Ngf3', 'Nf6', 'e5', 'Nd7', 'Be2']
const morozevichVariation = ['e4', 'e6', 'd4', 'd5', 'Nd2', 'Be7', 'Ngf3', 'Nf6', 'e5', 'Nfd7']
const frenchAdvanceQb6 = ['e4', 'e6', 'd4', 'd5', 'e5', 'c5', 'c3', 'Nc6', 'Nf3', 'Qb6', 'a3', 'c4']
const frenchAdvanceBe2 = ['e4', 'e6', 'd4', 'd5', 'e5', 'c5', 'c3', 'Nc6', 'Nf3', 'Qb6', 'Be2', 'Nh6', 'Bxh6']
const frenchMilnerBarry = ['e4', 'e6', 'd4', 'd5', 'e5', 'c5', 'c3', 'Nc6', 'Nf3', 'Qb6', 'Bd3', 'cxd4', 'Bd7', 'O-O', 'Nxd4', 'Nxd4', 'Qxd4', 'Nc3', 'Qxe5', 'Re1', 'Qb8', 'Nxd5']
const frenchAdvanceBd7 = ['e4', 'e6', 'd4', 'd5', 'e5', 'c5', 'c3', 'Nc6', 'Nf3', 'Bd7', 'Be2', 'dxc5']
const frenchAdvanceNh6 = ['e4', 'e6', 'd4', 'd5', 'e5', 'c5', 'c3', 'Nc6', 'Nf3', 'Nh6', 'Bxh6', 'gxh6']
const frenchExchange = ['e4', 'e6', 'd4', 'd5', 'exd5', 'exd5', 'c4', 'Nf6', 'Nc3', 'Bb4', 'Bd3', 'O-O', 'Ne2', 'dxc4', 'Bxc4', 'Nc6', 'O-O', 'Bd6', 'h3']

const CARO_CLASSICAL = ['e4', 'c6', 'd4', 'd5', 'Nc3', 'Nd2', 'dxe4', 'Nxe4', 'Bf5', 'Ng3', 'Bg6', 'h4', 'h6', 'Nf3', 'Nd7', 'h5', 'Bh7', 'Bd3', 'Bxd3', 'Qxd3']
const CARO_MODERN = ['e4', 'c6', 'd4', 'd5', 'Nc3', 'Nd2', 'dxe4', 'Nxe4', 'Nd7'] // see if i can find a deeper line maybe
const CARO_BRONSTEIN = ['e4', 'c6', 'd4', 'd5', 'Nc3', 'dxe4', 'Nxe4', 'Nf6', 'Nxf6+', 'gxf6']
const CARO_KORCHNOI = ['e4', 'c6', 'd4', 'd5', 'Nc3', 'dxe4', 'Nxe4', 'Nf6', 'Nxf6+', 'exf6']
const CARO_GURGENIDZE = ['e4', 'c6', 'd4', 'd5', 'Nc3', 'g6', 'Nf3', 'Bg7', 'h3']
const CARO_ADVANCED = ['e4', 'c6', 'd4', 'd5', 'e5', 'Bf5'] // see if i can find a deeper line
const CARO_EXCHANGE_MAIN = ['e4', 'c6', 'd4', 'd5', 'exd5', 'cxd5', 'Bd3', 'Nc6', 'c3', 'Nf6', 'Bf4', 'Bg4', 'Qb3']
const CARO_PANOV_ATTACK = ['e4', 'c6', 'd4', 'd5', 'exd5', 'cxd5', 'c4', 'Nf6', 'Nc3', 'e6', 'Nf3']
const CARO_FANTASY = ['e4', 'c6', 'd4', 'd5', 'f3', 'dxe4', 'fxe4', 'e5', 'Nf3', 'Bg4', 'Bc4', 'Nd7', 'O-O', 'Ngf6', 'c3', 'Bd6']
const CARO_TWO_KNIGHTS = ['e4', 'c6', 'Nc3', 'd5', 'Nf3', 'Bg4', 'h3', 'Bxf3', 'Qxf3']

// see if there are more pirc variations to add
const PIRC_AUSTRIAN_CASTLE = ['e4', 'd6', 'd4', 'Nf6', 'Nc3', 'g6', 'f4', 'Bg7', 'Nf3', 'O-O', 'Bd3', 'Nc6']
const PIRC_AUSTRIAN_c5 = ['e4', 'd6', 'd4', 'Nf6', 'Nc3', 'g6', 'f4', 'Bg7', 'Nf3', 'c5', 'dxc5', 'Qa5']
const PIRC_CLASSICAL = ['e4', 'd6', 'd4', 'Nf6', 'Nc3', 'g6', 'Nf3', 'Bg7', 'Be2', 'O-O', 'O-O']
const PIRC_KHOLMOV = ['e4' ,'d6', 'd4', 'Nf6', 'Nc3', 'g6', 'Bc4', 'Bg7', 'Qe2', 'Nc6', 'e5', 'Nxd4', 'exf6', 'Nxe2', 'fxg7', 'Rg8', 'Ngxe2', 'Rxg7']

const ALEKHINE_FOUR_PAWNS = ['e4', 'Nf6', 'e5', 'Nd5', 'd4', 'd6', 'c4', 'Nb6', 'f4', 'dxe5', 'fxe5', 'Nc6', 'Be3', 'Bf5', 'Nc3', 'e6', 'Nf3']

// one of the exchange variation lines
// will probably need to add another few later
const ALEKHINE_EXCHANGE = ['e4', 'Nf6', 'e5', 'Nd5', 'd4', 'd6', 'c4', 'Nb6', 'exd6', 'cxd6', 'Nc3', 'g6', 'Be3', 'Bg7', 'Rc1', 'O-O', 'b3']

// need a deeper line
const ALEKHINE_MODERN = ['e4', 'Nf6', 'e5', 'Nd5', 'd4', 'd6', 'Nf3']

const ALEKHINE_BALOGH = ['e4', 'Nf6', 'e5', 'Nd5', 'd4', 'd6', 'Bc4', 'Nb6', 'Bb3', 'dxe5', 'Qh5', 'e6', 'dxe5']
const ALEKHINE_TWO_PAWNS = ['e4', 'Nf6', 'e5', 'Nd5', 'c4', 'Nb6', 'c5', 'Nd5', 'Bc4']

const MODERN_DEFENCE = ['e4', 'g6', 'd4', 'Bg7', 'Nc3', 'd6', 'f4', 'c6', 'Nf3', 'Bg4']

const SCANDI_CLASSICAL = ['e4', 'd5', 'exd5', 'Qxd5', 'Nc3', 'Qa5', 'd4', 'c6', 'Nf3', 'Nf6', 'Bc4', 'Bf5', 'Bd2', 'e6', 'Qe2']
const SCANDI_MODERN = ['e4', 'd5', 'exd5', 'Nf6', 'd4', 'Nxd5', 'c4', 'Nb6']

const NIMZO_d4_d5 = ['e4', 'Nc6', 'd4', 'd5', 'Nc3', 'dxe4', 'd5', 'Ne5', 'Qd4', 'Ng6']
const NIMZO_d4_e5 = ['e4', 'Nc6', 'd4', 'e5', 'dxe5', 'Nxe5', 'Nf3']
const NIMZO_WILLIAMS = ['e4', 'Nc6', 'Nf3', 'd6', 'd4', 'Bg4', 'Bb5', 'a6', 'Bxc6+', 'Bxd1', 'Bb5+', 'c6', 'dxc6', 'Qa5+', 'Nc3', 'O-O-O', 'Nc4', 'Qc7', 'Nd5']

const OWENS_Bd3 = ['e4', 'b6', 'd4', 'Bb7', 'Bd3', 'e6', 'Nf3', 'c5', 'c3', 'Nf6', 'Nbd2', 'Nc6']
const OWENS_Nc3 = ['e4', 'b6', 'd4', 'Bb7', 'Nc3', 'e6', 'Nf3', 'Bb4', 'Bd3', 'Nf6', 'Bg5', 'h6']

const QGA_MAIN = ['d4', 'd5', 'c4', 'dxc4', 'Nf3', 'Nf6', 'e3', 'e6', 'Bxc4', 'c5', 'O-O', 'a6']
const QGA_MANNHEIM = ['d4', 'd5', 'c4', 'dxc4', 'Nf3', 'Nf6', 'Qa4+', 'Nc6']
const QGA_e3 = ['d4', 'd5', 'c4' ,'dxc4', 'e3', 'e5', 'Bxc4', 'exd5', 'exd4']
const QGA_Qa4 = ['d4', 'd5', 'c4', 'dxc4', 'Qa4+', 'Nc6', 'Nf3']

const QGD_TARTAKOWER = ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Bg5', 'Be7', 'Nf3', 'h6', 'Bh4', 'O-O', 'e3', 'b6']
const QGD_ANTI_TARTAKOWER = ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Bg5', 'Be7', 'Nf3', 'h6', 'Bxf6', 'Bxf6']
const QGD_LASKER = ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Bg5', 'Be7', 'Nf3', 'O-O', 'e3', 'h6', 'Bh4', 'Ne4', 'Bxe7', 'Qxe7']
const QGD_ORTHODOX = ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Bg5', 'Be7', 'Nf3', 'O-O', 'e3', 'Nbd7', 'Rc1', 'c6']
const QGD_CAMBRIDGE = ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Bg5', 'Nbd7', 'e3', 'c6', 'Nf3', 'Qa5', 'Nd2', 'Bb4', 'Qc2', 'O-O']
const QGD_EXCHANGE = ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'cxd5', 'exd5', 'Bg5', 'c6', 'Qc2']
const QGD_RAGOZIN = ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Nf3', 'Bb4', 'Bg5', 'dxc4', 'e4']
const QGD_HARRWITZ = ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Nf3', 'Be7', 'Bf4', 'O-O', 'e3', 'c5', 'dxc5', 'Bxc5']
const QGD_ALATORTSEV = ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Be7', 'cxd5', 'exd5', 'Bf4', 'c6', 'e3']

const SLAV_EXCHANGE = ['d4', 'd5', 'c4', 'e6', 'cxd5', 'cxd5', 'Nf3', 'Nf6', 'Nc3', 'Nc6', 'Bf4', 'Bf5']
const SLAV_Nc3 = ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Nf3', 'Bf5'] // not sure if i should keep this line or revise the moves
const SLAV_Qc2 = ['d4', 'd5', 'c4', 'e6', 'Nf3', 'Nf6', 'Qc2', 'g6', 'Bf4', 'Bf5', 'Qb3', 'Qb6']
const SLAV_SLOW = ['d4', 'd5', 'c4', 'e6', 'Nf3', 'Nf6', 'e3', 'Bf5', 'Nc3', 'e6', 'Nh4']
const SLAV_CHEBANENKO = ['d4', 'd5', 'c4', 'e6', 'Nf3', 'Nf6', 'Nc3', 'a6', 'c5', 'Bf5', 'Bf4', 'Nbd7', 'h3', 'e6', 'e3']
const SLAV_GELLER = ['d4', 'd5', 'c4', 'e6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'e4', 'b5', 'e5', 'Nd5', 'a4', 'e6']
const SLAV_ALEKHINE = ['d4', 'd5', 'c4', 'e6', 'Nf3', 'Nf6', 'e3', 'b5', 'a4', 'b4', 'Na2', 'e6', 'Bxc4']
const SLAV_STEINER = ['d4', 'd5', 'c4', 'e6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'a4', 'Bg4', 'Ne5', 'Bh5']
const SLAV_SMYSLOV = ['d4', 'd5', 'c4', 'e6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'a4', 'Na6', 'e4', 'Bg4', 'Bxc4', 'e6', 'O-O', 'Nb4']
const SLAV_DUTCH = ['d4', 'd5', 'c4', 'e6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'a4', 'Bf5', 'e3', 'e6', 'Bxc4', 'Bb4', 'O-O', 'O-O']
const SLAV_KRAUSE = ['d4', 'd5', 'c4', 'e6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'a4', 'Bf5', 'Ne5', 'e6', 'f3', 'Bb4', 'e4', 'Bxe4', 'fxe4', 'Nxe4']
const SLAV_CARLSBAD = ['d4', 'd5', 'c4', 'e6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'a4', 'Bf5', 'Ne5', 'Nbd7', 'Nxc4', 'Qc7', 'g3', 'e5']

const SEMI_SLAV_MARSHALL = ['d4', 'd5', 'c4', 'c6', 'Nc3', 'e6', 'e4', 'dxe4', 'Nxe4', 'Bb4+', 'Bd2', 'Qxd4', 'Bxb4', 'Qxe4+']
const SEMI_SLAV_NOTEBOOM = ['d4', 'd5', 'c4', 'c6', 'Nc3', 'e6', 'Nf3', 'dxc4', 'a4', 'Bb4', 'e3', 'b5', 'Bd2', 'a5', 'axb5', 'Bxc3', 'Bxc3', 'cxb5', 'b3', 'Bb7', 'bxc4', 'b4', 'Bb2', 'Nf6', 'Bd3', 'Nbd7', 'O-O', 'O-O']
const SEMI_SLAV_MERAN = ['d4' ,'d5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'e3', 'Nbd7', 'Bd3', 'dxc4', 'Bxc4', 'b5']
const SEMI_SLAV_CLASSICAL_MERAN = ['d4' ,'d5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'e3', 'Nbd7', 'Bd3', 'dxc4', 'Bxc4', 'b5', 'Bd3', 'a6', 'e4', 'c5', 'e5', 'axb5', 'exf6', 'gxf6', 'O-O', 'Qb6', 'Qe2']
const SEMI_SLAV_MODERN_MERAN = ['d4' ,'d5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'e3', 'Nbd7', 'Bd3', 'dxc4', 'Bxc4', 'b5', 'Bd3', 'Bb7', 'e4', 'b4', 'Na4', 'c5', 'e5', 'Nd5', 'Nxc5', 'Nxc5', 'dxc5', 'Bxc5', 'Bb5+', 'Ke7']
const SEMI_SLAV_MERAN_CASTLE = ['d4' ,'d5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'e3', 'Nbd7', 'Bd3', 'dxc4', 'Bxc4', 'b5', 'Bd3', 'Bb7', 'O-O', 'a6', 'e4', 'c5', 'd5']
const SEMI_SLAV_MERAN_e4 = ['d4' ,'d5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'e3', 'Nbd7', 'Bd3', 'dxc4', 'Bxc4', 'b5', 'Bd3', 'Bb7', 'e4', 'b4', 'Na4', 'c5', 'e5', 'Nd5']
const SEMI_SLAV_MERAN_Bd6 = ['d4' ,'d5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'e3', 'Nbd7', 'Bd3', 'dxc4', 'Bxc4', 'b5', 'Bd3', 'Bd6', 'O-O', 'O-O', 'Qc2', 'Bb7']

const ANTI_MERAN_KARPOV = ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'e3', 'Nbd7', 'Qc2', 'Bd6', 'Bd3', 'dxc4', 'Bxc4', 'O-O', 'O-O', 'b5', 'Bd3', 'Bb7']
const ANTI_MERAN_a3 = ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'e3', 'Nbd7', 'Qc2', 'Bd6', 'Bd3', 'dxc4', 'Bxc4', 'O-O', 'O-O', 'b5', 'Bd3', 'Bb7', 'a3', 'a6', 'b4', 'a5', 'Rb1', 'axb4', 'axb4', 'Qe7', 'e4', 'e5']
const ANTI_MERAN_Rd1 = ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'e3', 'Nbd7', 'Qc2', 'Bd6', 'Bd3', 'dxc4', 'Bxc4', 'O-O', 'O-O', 'b5', 'Bd3', 'Bb7', 'Rd1', 'b4', 'Na4', 'c5', 'dxc5', 'Rc8']
const ANTI_MERAN_e4 = ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'e3', 'Nbd7', 'Qc2', 'Bd6', 'Bd3', 'dxc4', 'Bxc4', 'O-O', 'O-O', 'b5', 'Bd3', 'Bb7', 'e4', 'e5', 'dxe5', 'Nxe5', 'Nxe5', 'Bxe5', 'h3']
const ANTI_MERAN_Ng5 = ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'e3', 'Nbd7', 'Qc2', 'Bd6', 'Bd3', 'dxc4', 'Bxc4', 'O-O', 'O-O', 'b5', 'Bd3', 'Bb7', 'Ng5', 'h6', 'Nge4', 'Be7']
const ANTI_MERAN_SHIROV_GAMBIT = ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'e3', 'Nbd7', 'Qc2', 'Bd6', 'g4', 'dxc4', 'Bxc4', 'e5', 'g5', 'Nd5', 'Ne4']
const ANTI_MERAN_MOSCOW = ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'Bg5', 'h6', 'Bxf6', 'Qxf6', 'e3', 'Nd7', 'Bd3', 'dxc4', 'Bxc4', 'O-O', 'Bg7']
const ANTI_MERAN_ANTI_MOSCOW = ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'Bg5', 'h6', 'Bh4', 'dxc4', 'e4', 'g5', 'Bg3', 'b5']
const ANTI_MERAN_BOTVINNIK = ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'Bg5', 'dxc4', 'e4', 'b5', 'e5', 'h6', 'Bh4', 'g5', 'Nxg5', 'hxg5', 'Bxg5', 'Nbd7']

const SEMI_SLAV_Qb3 = ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'Qb3', 'dxc4', 'Qxc4', 'b5', 'Qb3', 'Nbd7', 'Bg5', 'Be7', 'e3']
const SEMI_SLAV_Qd3 = ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'Qd3', 'Nbd7', 'e4', 'dxe4', 'Nxe4', 'Nxe4', 'Qxe4', 'Bb4+', 'Bd2', 'Bxd2+', 'Nxd2']
const SEMI_SLAV_g3 = ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'g3', 'dxc4', 'Bg2', 'b5', 'Ne5', 'a6', 'a4', 'Bb7']
const SEMI_SLAV_Bf4 = ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'Bf4', 'dxc4', 'a4', 'Nd5', 'Bg5', 'Be7', 'Bxe7', 'Qxe7']
