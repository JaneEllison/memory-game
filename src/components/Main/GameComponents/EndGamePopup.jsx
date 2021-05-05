import FinishButtons from '../GameComponents/FinishButtons';
import CloseIcon from '../../../assets/close-icon.png'
import useStore from '../../../core/store/useStore';

const EndGamePopup = ({
  startNewGame,
  backToMenu,
}) => {
  const {state} = useStore();
  const {gameLoop} = state;

  const formatTime = (time) => `${(time < 10 ? '0' : '')}${time}`;
  const minutes = Math.floor(gameLoop.elapsedTime / 60);
  const seconds = Math.floor(gameLoop.elapsedTime % 60);

  return (
    <div className={
      gameLoop.isGameFinished
      ? "end_game__popup"
      : "end_game__popup hidden"
    }
    >
      <div className="end_game__popup-bg">
        <img
          src={CloseIcon}
          alt="close"
          className="close__popup_icon"
          onClick={backToMenu}
        />
        <div className="end_game__popup-text">
          <h2 className="end_game__popup-header">Сongratulations!</h2>
          <h2>You have finished the game. Your score:</h2>
        </div>
        <div className="end_game__popup-stats">
          <span>Time: {formatTime(minutes)}:{formatTime(seconds)}</span>
          <span>Moves: {gameLoop.movesCount}</span>
        </div>
        <FinishButtons
          startNewGame={startNewGame}
          backToMenu={backToMenu}
        />
      </div>
    </div>
  )
}

export default EndGamePopup;