import '../Header/SwitcherStyle.css';
import {useCallback} from 'react';
import Counter from '../Header/Counter';
import useStore from '../../core/store/useStore';

import {changeTheme} from '../../core/store/actions/appSettings/actionCreators'

const Header = () => {
  const {dispatch, state} = useStore();
  const {appSettings, gameLoop} = state;

  const isChecked = appSettings.theme === 'light';

  const toggleTheme = useCallback((event) => {
    const {checked} = event.target;
    const newMode = checked? 'light' : 'dark';

    dispatch(changeTheme(newMode));

    localStorage.setItem('mode', newMode);
  });


    return (
    <header className="App-header">
      <h1>
        Memory Game
      </h1>
      <span className="switcher switcher__theme">
        <input
          type="checkbox"
          id="switcher__theme"
          onChange={toggleTheme}
          checked={isChecked}
        />
        <label htmlFor="switcher__theme"></label>
      </span>
      <div>
        High Score: {gameLoop.highScore}
      </div>
      <Counter />
    </header>
  )
};

export default Header;
