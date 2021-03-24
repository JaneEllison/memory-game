import { initialState } from '../initialState';

import {
  ACTION_CHANGE_THEME,
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

  console.log('reducer', type, payload, state);

  switch (type) {
    case ACTION_CHANGE_THEME:
      return {
        ...state,
        appSettings: {
          ...state.appSettings,
          theme: payload.theme,
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

    default:
      return state;
  }
};

export default rootReducer;


    // case ACTION_TOGGLE_SOUND:
    //   return {
    //     ...state,
    //     appSettings: {
    //       ...state.appSettings,
    //       isSoundOn: payload.isChecked
    //     },
    //   }; 

      // case ACTION_TURN_ON_SOUND:
      //   return {
      //     ...state,
      //     appSettings: {
      //       ...state.appSettings,
      //       isSoundOn: true,
      //     },
      //   }; 