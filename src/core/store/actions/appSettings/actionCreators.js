import {
  ACTION_CHANGE_THEME,
  ACTION_TOGGLE_SOUND,
} from './actionTypes';

export const changeTheme = (theme) => {
  return {
    payload: {theme},
    type: ACTION_CHANGE_THEME,
  };
};

// export const toggleSound = (isChecked) => {
//   return {
//     payload: {isChecked},
//     type: ACTION_TOGGLE_SOUND,
//   };
// };

// dispatchEvent(toggleSound(true/false))

// export const turnOnSound = () => {
//   return {
//     type: ACTION_TURN_ON_SOUND,
//   };
// };