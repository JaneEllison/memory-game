import {
  ACTION_CHANGE_DIFFICULTY,
  ACTION_CHANGE_CARD_THEME,
  ACTION_CHANGE_CURRENT_IMAGES,
  ACTION_CHANGE_FIELD_CSS_CLASS
} from '../../actions/gameSettings/actionTypes';

const initialState = {
  difficulty: '18',
  cardTheme: 'stars',
  currentImages: ['abstract_1', 'abstract_2'],
  fieldCssClass: 'field__normal',
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