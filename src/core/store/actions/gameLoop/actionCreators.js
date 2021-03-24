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
} from './actionTypes';

export const changeElapsedTime = (seconds) => {
  return {
    payload: {seconds},
    type: ACTION_CHANGE_ELAPSED_TIME,
  };
};

export const changeMovesCount = (movesCount) => {
  return {
    payload: {movesCount},
    type: ACTION_CHANGE_MOVES_COUNT,
  };
};