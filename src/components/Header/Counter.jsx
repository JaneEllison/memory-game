import React, { useState, useEffect } from "react";
import useStore from '../../core/store/useStore';
import {changeElapsedTime} from '../../core/store/actions/gameLoop/actionCreators'

const Counter = ({ isRunningStopwatch }) => {
  const {dispatch, state} = useStore();
  const {gameLoop} = state;

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const formatTime = (time) => `${(time < 10 ? '0' : '')}${time}`;

  // const secondsData = JSON.stringify(stopwatchSeconds);
  // localStorage.setItem('memorygameseconds', secondsData);

  // const movesData = JSON.stringify(movesCount);
  // localStorage.setItem('memorygamemoves', movesData);

  useEffect(() => {
    if (isRunningStopwatch) {
      const stopwatchInterval = window.setInterval(() => {
        dispatch(changeElapsedTime(gameLoop.elapsedTime += 1));
        
        setMinutes(Math.floor(gameLoop.elapsedTime / 60));
        setSeconds(Math.floor(gameLoop.elapsedTime % 60));    
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
        Moves: {`${gameLoop.movesCount}`}
      </div>
    </div>
  )
}

export default Counter;