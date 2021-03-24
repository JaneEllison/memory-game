import {initialState} from '../initialState';

import {
  ACTION_CHANGE_THEME,
  
  
  ACTION_TOGGLE_SOUND
} from '../actions/appSettings/actionTypes';

import {
  ACTION_CHANGE_DIFFICULTY,
  ACTION_CHANGE_CARD_THEME,
  ACTION_CHANGE_CURRENT_IMAGES,
  ACTION_CHANGE_FIELD_CSS_CLASS
} from '../actions/gameSettings/actionTypes';



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