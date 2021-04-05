import './App.css';
import React, { useState, useEffect, createContext } from "react";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';
import { lightTheme, darkTheme } from './constants/themeSettings';
import useStore from './core/store/useStore';

export const ModeContext = createContext('dark');

function App() {
  const {state} = useStore();

  // const savedTheme = JSON.parse(localStorage.getItem('memorygametheme'));
  // const savedDifficult = JSON.parse(localStorage.getItem('memorygamedifficult'));
  // const savedSeconds = JSON.parse(localStorage.getItem('memorygameseconds'));
  // const savedMoves = JSON.parse(localStorage.getItem('memorygamemoves'));
  // const savedStartGame = JSON.parse(localStorage.getItem('memorygamestart'));

  // useEffect(() => {
  //   if (localStorage.getItem('mode') === 'light') {
  //     setCurrentMode('light');
  //     setIsChecked(true);
  //   }
  // }, []);

  useEffect(() => {
    const theme = state.appSettings.theme === 'light' ? lightTheme : darkTheme;

    Object.keys(theme).forEach(key => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    });
  }, [state.appSettings.theme]);

  // useEffect(() => {
  //   const highScore = localStorage.getItem('memorygamehighscore');
  //   const savedScore = JSON.parse(highScore);
  //   if (savedScore) {
  //     setHighScore(savedScore);
  //   };
  // }, []);

  return (
    <ModeContext.Provider value={state.theme}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </ModeContext.Provider>
  );
}

export default App;
