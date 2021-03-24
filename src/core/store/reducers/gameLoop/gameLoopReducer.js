import {
  ACTION_TOGGLE_GAME_STARTED,
  ACTION_TOGGLE_GAME_FINISHED,
  ACTION_TOGGLE_STOPWATCH_RUNNING,
  ACTION_CHANGE_ELAPSED_TIME,
  ACTION_CHANGE_MOVES_COUNT,
  ACTION_CHANGE_HIGHT_SCORE,
  ACTION_TOGGLE_GAME_CARDS_SET,
  ACTION_CHANGE_FLIPS_COUNT,
  ACTION_CHANGE_CARD_MATCH_BATCH,
} from '../../actions/gameLoop/actionTypes';

const initialState = {
  isGameStarted: false,
  isGameFinished: false,
  isStopwatchRunning: false, //boolean
  elapsedTime: 0,
  movesCount: 0,
  highScore: 0, // number TODO: refactor to Array<{score: number, name: string, moves: number, difficulty: string}>
  gameCardsSet: [], // array<{id: number, imgId: number, isFlipped: boolean, image: string}>
  flipsCount: 0, // number
  cardMatchBatch: [], // [number, number, boolean] // 0 and 1 cards indexes 2 comparison result
};

export const gameSettingsReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case 'ACTION_INIT_APP_SETTINGS':
      return {
        state
      };

    case ACTION_TOGGLE_GAME_STARTED:
      return {
        ...state,
        isGameStarted: payload.isGameStarted,

      };

    case ACTION_TOGGLE_GAME_FINISHED:
      return {
        ...state,
        isGameFinished: payload.isGameFinished,
      };

    case ACTION_CHANGE_ELAPSED_TIME:
      return {
        ...state,
        elapsedTime: payload.elapsedTime,
      };

    case ACTION_CHANGE_MOVES_COUNT:
      return {
        ...state,
        movesCount: payload.movesCount,
      };

    case ACTION_CHANGE_HIGHT_SCORE:
      return {
        ...state,
        highScore: payload.highScore,
      };

    default:
      return state;
  }



}