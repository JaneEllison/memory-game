import { initialState } from '../initialState';
import { appSettingsReducer } from './appSettings/appSettingsReducer';
import { gameSettingsReducer } from './gameSettings/gameSettingsReducer';
import { gameLoopReducer } from './gameLoop/gameLoopReducer';

import {
  ACTION_CHANGE_THEME,
  ACTION_TOGGLE_SOUND,
  ACTION_TOGGLE_MUSIC,

} from '../actions/appSettings/actionTypes';

import {
  ACTION_CHANGE_DIFFICULTY,
  ACTION_CHANGE_CARD_THEME,
  ACTION_CHANGE_CURRENT_IMAGES,
  ACTION_CHANGE_FIELD_CSS_CLASS
} from '../actions/gameSettings/actionTypes';

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
} from '../actions/gameLoop/actionTypes'

const rootReducer = (state = initialState, action) => {
  const { payload, type } = action;

  console.log('reducer', type, payload);

  switch (type) {
    case ACTION_CHANGE_THEME:
      return {
        ...state,
        appSettings: {
          ...state.appSettings,
          theme: payload.theme,
        }
      };

    case ACTION_TOGGLE_SOUND:
      return {
        ...state,
        appSettings: {
          ...state.appSettings,
          isSoundOn: payload.isCheckedSound,
        }
      };

    case ACTION_TOGGLE_MUSIC:
      return {
        ...state,
        appSettings: {
          ...state.appSettings,
          isMusicOn: payload.isCheckedMusic,
        }
      };

    case ACTION_CHANGE_DIFFICULTY:
      return {
        ...state,
        gameSettings: {
          ...state.gameSettings,
          difficulty: payload.difficulty,
        }
      };

    case ACTION_CHANGE_CARD_THEME:
      return {
        ...state,
        gameSettings: {
          ...state.gameSettings,
          cardTheme: payload.cardTheme,
        }
      };

    case ACTION_CHANGE_CURRENT_IMAGES:
      return {
        ...state,
        gameSettings: {
          ...state.gameSettings,
          currentImages: payload.currentImages,
        }
      };

    case ACTION_CHANGE_FIELD_CSS_CLASS:
      return {
        ...state,
        gameSettings: {
          ...state.gameSettings,
          fieldCssClass: payload.fieldCssClass,
        }
      };

    case ACTION_TOGGLE_GAME_STARTED:
      return {
        ...state,
        gameLoop: {
          ...state.gameLoop,
          isGameStarted: payload.isGameStarted,
        },
      };

    case ACTION_TOGGLE_GAME_FINISHED:
      return {
        ...state,
        gameLoop: {
          ...state.gameLoop,
          isGameFinished: payload.isGameFinished,
        },
      };

    case ACTION_TOGGLE_STOPWATCH_RUNNING:
      return {
        ...state,
        gameLoop: {
          ...state.gameLoop,
          isStopwatchRunning: payload.isStopwatchRunning,
        },
      };

    case ACTION_CHANGE_ELAPSED_TIME:
      return {
        ...state,
        gameLoop: {
          ...state.gameLoop,
          elapsedTime: payload.elapsedTime,
        }
      };

    case ACTION_CHANGE_MOVES_COUNT:
      return {
        ...state,
        gameLoop: {
          ...state.gameLoop,
          movesCount: payload.movesCount,
        }
      };

    case ACTION_CHANGE_HIGHT_SCORE:
      return {
        ...state,
        gameLoop: {
          ...state.gameLoop,
          highScore: payload.highScore,
        }
      };

    default:
      return state;
  }
};


const reducers = {
  appSettings: appSettingsReducer,
  gameSettings: gameSettingsReducer,
  gameLoop: gameLoopReducer,
};

const _rootReducer = (state = initialState, action) => {
  const _reducers = Object.entries(reducers); //[ [appSettings, appSettingsReducer], [key, value] ]

  return _reducers.reduce((acc, next) => {
    const [key, reducerFn] = next;

    return {
      ...acc,
      [key]: reducerFn(state[key], action),
    };
  }, {});
};

export default rootReducer;
