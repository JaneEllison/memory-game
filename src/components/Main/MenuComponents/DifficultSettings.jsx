import React, { useEffect, useCallback } from "react";
import useStore from '../../../core/store/useStore';
import { DifficultButtons } from '../../../constants/buttons';

import {
  changeDifficulty,
  changeFieldCssClass,
} from '../../../core/store/actions/gameSettings/actionCreators';

const DifficultSettings = () => {
  const { dispatch, state } = useStore();
  const { gameSettings } = state;

  useEffect(() => {
    if (gameSettings.difficulty === 12) {
      dispatch(changeFieldCssClass('field__easy'));
    }
    if (gameSettings.difficulty === 18) {
      dispatch(changeFieldCssClass('field__normal'));
    }
    if (gameSettings.difficulty === 24) {
      dispatch(changeFieldCssClass('field__difficult'));
    }

    // const savedDifficult = JSON.stringify(state.difficult);
    // localStorage.setItem('memorygamedifficult', savedDifficult);

    // const savedField = JSON.stringify(field);
    // localStorage.setItem('memoryfield', savedField);
  }, [gameSettings.difficulty]);

  return (
    <div className='difficulty__container'>
      <h3>Choose a difficulty:</h3>
      <div className="difficult__buttons">
        {
          DifficultButtons.map((button) => (
            <button
              key={button.id}
              className={
                gameSettings.difficulty === button.value
                  ? "difficult__button active"
                  : "difficult__button"
              }
              onClick={() => dispatch(changeDifficulty(button.value))}
            >
              {button.text}
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default DifficultSettings;