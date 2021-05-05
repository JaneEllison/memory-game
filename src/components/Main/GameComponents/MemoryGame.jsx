import React, { useState, useEffect } from "react";
import useStore from '../../../core/store/useStore';
import Card from './Card';
import images from '../../../constants/themes';
import sounds from '../../../constants/sounds';

import {changeCurrentImages} from '../../../core/store/actions/gameSettings/actionCreators';
import {
  toggleGameStarted,
  toggleGameFinished,
  changeHighScore,
  toggleStopwatchRunning,
} from '../../../core/store/actions/gameLoop/actionCreators';

const finishSound = [...sounds].pop();

const MemoryGame = ({ 
  playSound,
  setCurrentTrack,
}) => {
  const {dispatch, state} = useStore();
  const {gameSettings, gameLoop} = state;

  const savedGame = JSON.parse(localStorage.getItem('memorygame'));
  const savedField = JSON.parse(localStorage.getItem('memoryfield'));

  const [game, setGame] = useState([]);
  const [flippedCount, setFlippedCount] = useState(0);
  const [flippedIndexes, setFlippedIndexes] = useState([]);

  useEffect(() => {
    if(gameLoop.movesCount === 0) {
      dispatch(changeCurrentImages(images[gameSettings.cardTheme]));

      const newGame = [];
      for (let i = 0; i < gameSettings.difficulty / 2; i++) {
        const firstOption = {
          id: 2 * i,
          imgId: i,
          image: gameSettings.currentImages[i],
          flipped: false,
        };
        const secondOption = {
          id: 2 * i + 1,
          imgId: i,
          image: gameSettings.currentImages[i],
          flipped: false,
        };
  
        newGame.push(firstOption);
        newGame.push(secondOption);
      }
  
      const shuffledGame = newGame.sort(() => Math.random() - 0.5);
      setGame(shuffledGame);
      dispatch(toggleStopwatchRunning(true));
    } else {
      setGame(savedGame);
      dispatch(toggleStopwatchRunning(true));
      // setField(savedField);
    }

  }, [gameSettings.currentImages]);

  useEffect(() => {
    const finished = !game.some(card => !card.flipped);

    if (finished && game.length > 0) {
      setTimeout(() => {
        let score = gameLoop.movesCount;
        if (score > gameLoop.highScore) {
          dispatch(changeHighScore(score));
          const savedHighScore = JSON.stringify(gameLoop.highScore);
          localStorage.setItem('memorygamehighscore', savedHighScore);
        }
        setCurrentTrack(finishSound);
        playSound();
      }, 1000)
      dispatch(toggleGameFinished(true));
      dispatch(toggleGameStarted(false));
      dispatch(toggleStopwatchRunning(false));
    }

    const savedGame = JSON.stringify(game);
    localStorage.setItem('memorygame', savedGame);

  }, [game]);

  if (flippedIndexes.length === 2) {
    const match = game[flippedIndexes[0]].imgId === game[flippedIndexes[1]].imgId;

    if (match) {
      const newGame = [...game];
      newGame[flippedIndexes[0]].flipped = true;
      newGame[flippedIndexes[1]].flipped = true;
      setGame(newGame);

      const newIndexes = [...flippedIndexes];
      newIndexes.push(false);
      setFlippedIndexes(newIndexes);
    } else {
      const newIndexes = [...flippedIndexes];
      newIndexes.push(true);
      setFlippedIndexes(newIndexes);
    }
  };
  
  return (
    <div>
      {(game.length === 0)
        ? 'loading'
        : <div
            className="cards"
          >
            {game.map((card, index) => (
              <div className={`card ${gameSettings.fieldCssClass}`} key={index}>
                <Card
                  id={index}
                  image={card.image}
                  game={game}
                  flippedCount={flippedCount}
                  setFlippedCount={setFlippedCount}
                  flippedIndexes={flippedIndexes}
                  setFlippedIndexes={setFlippedIndexes}
                  playSound={playSound}
                  setCurrentTrack={setCurrentTrack}
                />
              </div>
            ))}
          </div>
      }
    </div>
  )
}

export default MemoryGame;