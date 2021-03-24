import React, { useState, useEffect, useCallback } from "react";
import useStore from '../../core/store/useStore';
import {changeElapsedTime} from '../../core/store/actions/gameLoop/actionCreators'

const Counter = ({ isRunningStopwatch, movesCount }) => {
  const {dispatch, state} = useStore();
  const {gameLoop} = state;

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const changeElapsedTimeSettings = useCallback(() => {
    const secondsCount = gameLoop.elapsedTime += 1;

    setMinutes(Math.floor(secondsCount / 60));
    setSeconds(Math.floor(secondsCount % 60));

    dispatch(changeElapsedTime(secondsCount));
  });

  const formatTime = (time) => `${(time < 10 ? '0' : '')}${time}`;

  // const secondsData = JSON.stringify(stopwatchSeconds);
  // localStorage.setItem('memorygameseconds', secondsData);

  // const movesData = JSON.stringify(movesCount);
  // localStorage.setItem('memorygamemoves', movesData);

  useEffect(() => {
    if (isRunningStopwatch) {
      const stopwatchInterval = window.setInterval(() => {
        changeElapsedTimeSettings();
      }, 1000);
      return () => window.clearInterval(stopwatchInterval);
    }
    return undefined;
  }, [isRunningStopwatch]);

  return (
    <div className="statistic">
      <div>
        Time: {`${formatTime(minutes)}:${formatTime(seconds)}`}
      </div>
      <div>
        Moves: {`${movesCount}`}
      </div>
    </div>
  )
}

export default Counter;