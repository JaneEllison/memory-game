import useStore from '../../../core/store/useStore';
import {toggleGameStarted} from '../../../core/store/actions/gameLoop/actionCreators';


const GameButtons = ({
  setIsRunningStopwatch,
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
        setIsRunningStopwatch(false);
        dispatch(toggleGameStarted(false));
      }}>
        Menu
      </button>
    </div>
  )
}

export default GameButtons;