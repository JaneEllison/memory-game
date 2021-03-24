import {
  ACTION_CHANGE_DIFFICULTY,
  ACTION_CHANGE_CARD_THEME,
  ACTION_CHANGE_CURRENT_IMAGES,
  ACTION_CHANGE_FIELD_CSS_CLASS
} from '../../actions/gameSettings/actionTypes';

const initialState = {
  theme: 'dark',
  isSoundOn: true, //boolean
  soundVolume: 0.5, //number from 0 to 1
  isMusicOn: true, //boolean
  musicValue: 0.5, //number from 0 to 1
};

export const gameSettingsReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case 'ACTION_INIT_APP_SETTINGS':
      return {
        state
      };
    
    case ACTION_CHANGE_DIFFICULTY:
      return {
        ...state,
        difficulty: payload.difficulty,
      };

    case ACTION_CHANGE_CARD_THEME:
      return {
        ...state,
        cardTheme: payload.cardTheme,
      };

    case ACTION_CHANGE_CURRENT_IMAGES:
      return {
        ...state,
        currentImages: payload.currentImages,
      };

    case ACTION_CHANGE_FIELD_CSS_CLASS:
      return {
        ...state,
        fieldCssClass: payload.fieldCssClass,
      };

    default:
      return state;
  }
}