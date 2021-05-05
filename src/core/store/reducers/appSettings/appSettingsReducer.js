import {
  ACTION_CHANGE_THEME,
  ACTION_TOGGLE_SOUND,
  ACTION_TOGGLE_MUSIC,

} from '../../actions/appSettings/actionTypes';

const initialState = {
  theme: 'dark',
  isSoundOn: true,
  soundVolume: 0.5, //number from 0 to 1
  isMusicOn: true, //boolean
  musicValue: 0.5, //number from 0 to 1
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

    case ACTION_TOGGLE_SOUND:
      return {
        ...state,
        isSoundOn: payload.isCheckedSound,
      };

    case ACTION_TOGGLE_MUSIC:
      return {
        ...state,
        isMusicOn: payload.isCheckedMusic,
      };

    default:
      return state;
  }
};