import {
  ACTION_CHANGE_THEME,
  ACTION_TOGGLE_SOUND,
  ACTION_TOGGLE_MUSIC,

} from './actionTypes';

export const changeTheme = (theme) => {
  return {
    payload: {theme},
    type: ACTION_CHANGE_THEME,
  };
};

export const toggleSound = (isCheckedSound) => {
  return {
    payload: {isCheckedSound},
    type: ACTION_TOGGLE_SOUND,
  };
};

export const toggleMusic = (isCheckedMusic) => {
  return {
    payload: {isCheckedMusic},
    type: ACTION_TOGGLE_MUSIC,
  };
};