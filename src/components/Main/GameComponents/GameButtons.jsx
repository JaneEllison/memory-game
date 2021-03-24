import useStore from '../../../core/store/useStore';

const GameButtons = ({
  setIsGameStarted,
  setIsRunningStopwatch,
  startNewGame
}) => {
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
        setIsGameStarted(false);
      }}>
        Menu
      </button>
    </div>
  )
}

export default GameButtons;