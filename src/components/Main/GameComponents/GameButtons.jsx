import {changeMovesCount} from '../../../core/store/actions/gameLoop/actionCreators'
import useStore from '../../../core/store/useStore';

const GameButtons = ({
  setIsGameStarted,
  setIsRunningStopwatch,
  setStopwatchSeconds,
}) => {
  const {dispatch} = useStore();

  return (
    <div>
      <button
        className="restart__button"
        onClick={() => {
          setStopwatchSeconds(0);
          dispatch(changeMovesCount(0));
          setIsGameStarted(false);
          setTimeout(() => {
            setIsGameStarted(true);
          }, 5);
        }}
      >
        Restart
      </button>
      <button onClick={() => {
        setIsRunningStopwatch(false);
        setIsGameStarted(false);
      }}>
        Menu
      </button>
    </div>
  )
}

export default GameButtons;