import React, { useState, useLayoutEffect, useCallback } from "react";
import useStore from '../../core/store/useStore';

import SoundSettings from './MenuComponents/SoundsSettings';
import DifficultSettings from './MenuComponents/DifficultSettings';
import ThemeSettings from './MenuComponents/ThemeSettings';
import NavButtons from './MenuComponents/NavButtons';
import GameButtons from './GameComponents/GameButtons';
import MemoryGame from './GameComponents/MemoryGame';
import EndGamePopup from './GameComponents/EndGamePopup';

import {
  toggleGameStarted,
  toggleGameFinished,
  changeMovesCount,
  changeElapsedTime,
  toggleStopwatchRunning,
} from '../../core/store/actions/gameLoop/actionCreators';

import {
  toggleSound,
  toggleMusic,
} from '../../core/store/actions/appSettings/actionCreators';

import sounds from '../../constants/sounds';

const [themeMusic] = sounds;

const Main = () => {
  const {dispatch, state} = useStore();
  const {appSettings, gameLoop} = state;

  const changeElapsedTimeSettings = useCallback((seconds) => {
    dispatch(changeElapsedTime(seconds));
  });

  // const savedIsSoundOn = JSON.parse(localStorage.getItem('memorygameissoundon'));
  // const savedSoundVolume = JSON.parse(localStorage.getItem('memorygamesoundvolume'));

  // const savedIsMusicOn = JSON.parse(localStorage.getItem('memorygameismusicon'));
  // const savedMusicVolume = JSON.parse(localStorage.getItem('memorygamemusicvolume'));

  const [soundValue, setSoundValue] = useState(0.5);

  const [currentTrack, setCurrentTrack] = useState(null);

  const [musicValue, setMusicValue] = useState(0.5);

  const changeMovesCountValue = useCallback((movesCount) => {
    dispatch(changeMovesCount(movesCount));
  });

  let audioPlayer;
  let soundPlayer;

  // useEffect(() => {
  //   if (localStorage.getItem('memorygameissoundon') === null) {
  //     setIsSoundOn(true);
  //     soundPlayer.muted = false;
  //     setSoundValue(0.5);
  //   } else {
  //     if(!JSON.parse((localStorage.getItem('memorygameissoundon')))) {
  //       setIsSoundOn(false);
  //       soundPlayer.muted = true;
  //       setSoundValue(0);
  //     }
  //   }
  //   if (localStorage.getItem('memorygameismusicon') === null) {
  //     setIsMusicOn(true);
  //     audioPlayer.muted = false;
  //     setMusicValue(0.5);
  //   } else {
  //     if(!JSON.parse((localStorage.getItem('memorygameismusicon')))) {
  //       setIsMusicOn(false);
  //       audioPlayer.muted = true;
  //       setMusicValue(0);
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   const json = JSON.stringify(isGameStarted);
  //   localStorage.setItem('memorygamestart', json);
  // }, [gameLoop.isGameStarted])

  const initPlayer = () => {
    audioPlayer = document.getElementById('music');
    soundPlayer = document.getElementById('sound');
  };

  useLayoutEffect(() => {
    initPlayer();
    audioPlayer.play();
  });

  const formatVolume = (volume) => `${Math.round(volume * 10000) / 100}%`;

  const changeSoundState = () => {
    dispatch(toggleSound(!appSettings.isSoundOn));
    handleMuteSound();
    // localStorage.setItem('memorygameissoundon', JSON.stringify(!isSoundOn));
    // localStorage.setItem('memorygamesoundvolume', soundValue);
  };

  const changeMusicState = () => {
    dispatch(toggleMusic(!appSettings.isMusicOn));
    handleMuteMusic();
    // localStorage.setItem('memorygameismusicon', JSON.stringify(!isMusicOn));
    // localStorage.setItem('memorygamemusicvolume', musicValue);
  };

  const setVolumeAudio = () => {
    audioPlayer.volume = musicValue;
  };
  const setVolumeSound = () => {
    soundPlayer.volume = soundValue;
  };

  const playSound = () => {
    soundPlayer.play();
  };

  const handleMuteMusic = () => {
    if (appSettings.isMusicOn) {
      setTimeout(() => {
        audioPlayer.muted = true;
        setMusicValue(0);
      }, 0);
    } else {
      setTimeout(() => {
        audioPlayer.muted = false;
        setMusicValue(0.5);
      }, 0);
    }
  };
  const handleMuteSound = () => {
    if (appSettings.isSoundOn) {
      setTimeout(() => {
        soundPlayer.muted = true;
        setSoundValue(0);
      }, 0);
    } else {
      setTimeout(() => {
        soundPlayer.muted = false;
        setSoundValue(0.5);
      }, 0);
    }
  };

  const startNewGame = () => {
    changeElapsedTimeSettings(0);

    changeMovesCountValue(0);
    dispatch(toggleGameStarted(false));
    dispatch(toggleGameFinished(false));

    setTimeout(() => {
      dispatch(toggleGameStarted(true));
    }, 0);
  };

  const backToGame = () => {
    dispatch(toggleGameStarted(true));
    dispatch(toggleStopwatchRunning(true));
  }

  const backToMenu = () => {
    changeMovesCountValue(0);
    changeElapsedTimeSettings(0);
    dispatch(toggleGameFinished(false));
    dispatch(toggleGameStarted(false));
  }

  return (
    <div className="main__container">
      <audio
        src={themeMusic}
        id='music'
        loop={true}
      />
      <audio
        src={currentTrack}
        id='sound'
      />
      <EndGamePopup
        startNewGame={startNewGame}
        backToMenu={backToMenu}
      />
      {!gameLoop.isGameStarted
        ? (
          <>
            <div className="first__block_settings">
              <SoundSettings
                changeSoundState={changeSoundState}
                changeMusicState={changeMusicState}
                soundValue={soundValue}
                musicValue={musicValue}
                setMusicValue={setMusicValue}
                setSoundValue={setSoundValue}
                setVolumeSound={setVolumeSound}
                setVolumeAudio={setVolumeAudio}
                formatVolume={formatVolume}
              />
              <DifficultSettings />
            </div>
            <div className="second__block_settings">
              <ThemeSettings />
            </div>
            <NavButtons
              startNewGame={startNewGame}
              backToGame={backToGame}
            />
          </>
        )
        : (
          <>
            <GameButtons
              startNewGame={startNewGame}
            />
            <MemoryGame
              playSound={playSound}
              setCurrentTrack={setCurrentTrack}
            />
          </>
        )
      }

    </div>
  )
};

export default Main;
