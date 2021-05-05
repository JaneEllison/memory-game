import useStore from '../../../core/store/useStore';
import {
  toggleGameStarted,
  toggleStopwatchRunning,
} from '../../../core/store/actions/gameLoop/actionCreators';

const GameButtons = ({
  startNewGame
}) => {
  const {dispatch} = useStore();

  return (
    <div>
      <button
        className="restart__button"
        onClick={() => {
          startNewGame()
        }}
      >
        Restart
      </button>
      <button onClick={() => {
        dispatch(toggleStopwatchRunning(false));
        dispatch(toggleGameStarted(false));
      }}>
        Menu
      </button>
    </div>
  )
}

export default GameButtons;