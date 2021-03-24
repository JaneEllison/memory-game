const state = {
  //global

  //TODO refactor to
  // selectedCards: ['abstract_1', 'abstract_2'], // Array<string>

  // theme: 'light', // string one of ['light', 'dark']
  // currentImages: ['abstract_1', 'abstract_2'],
  // cardTheme: 'abstract', // string one of ['abstract', 'animal'...]
  // fieldCssClass: 'field__normal', // string one of ['field__easy', 'field__normal', field__hard]

  // difficulty: '18', // number one of ['12', '18, '24']
  isGameStarted: false, //boolean
  isGameFinished: false, //boolean
  isStopwatchRunning: false, //boolean
  // elapsedTime: 0, //number in ms
  isSoundOn: true, //boolean
  soundVolume: 0.5, //number from 0 to 1
  currentSound: 'assets/sounds/right_sound.mp3', //string file to source
  isMusicOn: true, //boolean
  musicValue: 0.5, //number from 0 to 1
  movesCoun: 0, //number int
  highScore: 0, // number TODO: refactor to Array<{score: number, name: string, moves: number, difficulty: string}>
  gameCardsSet: [], // array<{id: number, imgId: number, isFlipped: boolean, image: string}>
  flipsCount: 0, // number
  cardMatchBatch: [], // [number, number, boolean] // 0 and 1 cards indexes 2 comparison result
  
  //local
  isFlipped: false, //boolean
};