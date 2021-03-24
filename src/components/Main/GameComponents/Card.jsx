import React, { useState, useEffect, useCallback } from "react";
import { useSpring, animated as a } from "react-spring";
import sounds from '../../../constants/sounds'
import useStore from '../../../core/store/useStore';
import {changeMovesCount} from '../../../core/store/actions/gameLoop/actionCreators'

const rightSouns = sounds[1];
const wrongSound = sounds[2];

const Card = ({
  id,
  image,
  game,
  flippedCount,
  setFlippedCount,
  flippedIndexes,
  setFlippedIndexes,
  playSound,
  setCurrentTrack,
}) => {
  const {dispatch, state} = useStore();
  const {gameSettings, gameLoop} = state;


  const changeMovesCountValue = useCallback(() => {
    const movesCounter = gameLoop.movesCount + 1;
    dispatch(changeMovesCount(movesCounter));
  });

  const [flipped, setFlipped] = useState(game[id].flipped);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 6, tension: 500, friction: 90 },
  });

  useEffect(() => {
    if (flippedIndexes[2] === true && flippedIndexes.indexOf(id) > -1) {
      setTimeout(() => {
        setFlipped(flipped => !flipped);
        setFlippedCount(flippedCount + 1);
        setFlippedIndexes([]);
        setCurrentTrack(wrongSound);
        playSound();
      }, 1000)
    } else if (flippedIndexes[2] === false && id === 0) {
      setFlippedCount(flippedCount + 1);
      setFlippedIndexes([]);
      setTimeout(() => {
        setCurrentTrack(rightSouns);
        playSound();
      }, 1000)
    }
  }, [flippedIndexes]);

  const onCardClick = () => {
    if ((!game[id].flipped && flippedCount % 3 === 0) ||
      (flippedCount % 3 === 1 && !game[id].flipped && flippedIndexes.indexOf(id) < 0)
    ) {
      setFlipped(flipped => !flipped);
      setFlippedCount(flippedCount + 1);
      const newIndexes = [...flippedIndexes];
      newIndexes.push(id);
      setFlippedIndexes(newIndexes);
      changeMovesCountValue();
    };
  };

  return (
    <div onClick={onCardClick}>
      <a.div
        className={`c back ${gameSettings.fieldCssClass}`}
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform,
        }}
      />
      <a.div
        className={`c front ${gameSettings.fieldCssClass}`}
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          backgroundImage: `url(${image})`,
        }}
      />
    </div>
  )
}

export default Card;