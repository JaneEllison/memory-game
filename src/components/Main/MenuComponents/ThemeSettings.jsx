import React, { useEffect, useCallback } from "react";
import useStore from '../../../core/store/useStore';
import { ThemeButtons } from '../../../constants/buttons';

import {changeCardTheme} from '../../../core/store/actions/gameSettings/actionCreators'

const ThemeSettings = () => {

  const {dispatch, state} = useStore();
  const {gameSettings} = state;

  const changeCardThemeSettings = useCallback((value) => {
    let cardThemeName = value.toLowerCase();

    dispatch(changeCardTheme(cardThemeName));
  });


  // const themeGame = localStorage.getItem('memorygametheme');
  // const savedTheme = JSON.parse(themeGame);

  // useEffect(() => {
  //   let themeName = gameSettings.theme.toLowerCase();    
  //   const theme = JSON.stringify(themeName);
  //   localStorage.setItem('memorygametheme', theme);

  //   if(themeGame) {
  //     setCurrentImages(images[theme]);
  //   }
  // }, [gameSettings.theme]);

  return (
    <div>
      <h3>Choose a theme:</h3>
      <div className="bg__settings">
        {ThemeButtons.map((button) => (
          <div className="block__settings" key={button.id}>
            <button
              className={
                (gameSettings.cardTheme === button.text.toLocaleLowerCase())
                ? "card__bg active"
                : "card__bg"
              }
              onClick={() => changeCardThemeSettings(button.text)}
            >
              {button.text}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
};

export default ThemeSettings;