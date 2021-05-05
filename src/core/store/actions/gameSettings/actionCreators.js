import {
  ACTION_CHANGE_DIFFICULTY,
  ACTION_CHANGE_CARD_THEME,
  ACTION_CHANGE_CURRENT_IMAGES,
  ACTION_CHANGE_FIELD_CSS_CLASS,

} from './actionTypes';

export const changeDifficulty = (difficulty) => {
  return {
    payload: {difficulty},
    type: ACTION_CHANGE_DIFFICULTY,
  };
};

export const changeCardTheme = (cardTheme) => {
  return {
    payload: {cardTheme},
    type: ACTION_CHANGE_CARD_THEME,
  };
};

export const changeCurrentImages = (currentImages) => {
  return {
    payload: {currentImages},
    type: ACTION_CHANGE_CURRENT_IMAGES,
  };
};

export const changeFieldCssClass = (fieldCssClass) => {
  return {
    payload: {fieldCssClass},
    type: ACTION_CHANGE_FIELD_CSS_CLASS,
  };
};



