import {
  ACTION_CHANGE_THEME,
} from '../../actions/appSettings/actionTypes';

const initialState = {
  difficulty: '18',
  cardTheme: 'stars',
  currentImages: ['abstract_1', 'abstract_2'],
  fieldCssClass: 'field__normal',
};

export const appSettingsReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case 'ACTION_INIT_APP_SETTINGS':
      return {
        state
      };

    case ACTION_CHANGE_THEME:
      return {
        ...state,
        theme: payload.theme,
      };

    default:
      return state;
  }
};