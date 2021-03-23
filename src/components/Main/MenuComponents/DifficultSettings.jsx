import React, { useEffect, useCallback } from "react";
import useStore from '../../../core/store/useStore';
import { DifficultButtons } from '../../../constants/buttons';

const DifficultSettings = () => {
  const { dispatch, state } = useStore();

  const changeDifficulty = useCallback((value) => {
    dispatch({
      type: 'CHANGE_DIFFICULTY',
      payload: { difficulty: value },
    });
  });

  const changeFieldCssClass = useCallback((value) => {
    dispatch({
      type: 'CHANGE_FIELD_CSS_CLASS',
      payload: { fieldCssClass: value },
    });
  });

  useEffect(() => {
    if (state.difficulty === 12) {
      changeFieldCssClass('field__easy');
    }
    if (state.difficulty === 18) {
      changeFieldCssClass('field__normal');
    }
    if (state.difficulty === 24) {
      changeFieldCssClass('field__difficult');
    }

    // const savedDifficult = JSON.stringify(state.difficult);
    // localStorage.setItem('memorygamedifficult', savedDifficult);

    // const savedField = JSON.stringify(field);
    // localStorage.setItem('memoryfield', savedField);
  }, [state.difficulty]);

  return (
    <div className='difficulty__container'>
      <h3>Choose a difficulty:</h3>
      <div className="difficult__buttons">
        {
          DifficultButtons.map((button) => (
            <button
              key={button.id}
              className={
                state.difficulty === button.value
                  ? "difficult__button active"
                  : "difficult__button"
              }
              onClick={() => changeDifficulty(button.value)}
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