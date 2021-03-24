const appSettings = {
  theme: 'dark',
  isSoundOn: true, //boolean
  soundVolume: 0.5, //number from 0 to 1
  isMusicOn: true, //boolean
  musicValue: 0.5, //number from 0 to 1
};

const gameSettings = {
  difficulty: '18',
  cardTheme: 'stars',
  currentImages: ['abstract_1', 'abstract_2'],
  fieldCssClass: 'field__normal',
};

const gameLoop = {
  isGameStarted: false, //boolean
  isGameFinished: false, //boolean
  isStopwatchRunning: false, //boolean
  elapsedTime: 0,
  movesCount: 0, 
  highScore: 0, // number TODO: refactor to Array<{score: number, name: string, moves: number, difficulty: string}>
  gameCardsSet: [], // array<{id: number, imgId: number, isFlipped: boolean, image: string}>
  flipsCount: 0, // number
  cardMatchBatch: [], // [number, number, boolean] // 0 and 1 cards indexes 2 comparison result
};

export const initialState = {
  appSettings,
  gameSettings,
  gameLoop,
};