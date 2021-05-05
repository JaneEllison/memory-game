import React, { useReducer } from 'react';
import rootReducer from './reducers/rootReducer';
import {initialState} from './initialState';

export const Context = React.createContext({});

const Store = (props) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <Context.Provider value={{ dispatch, state }}>
      {props.children}
    </Context.Provider>
  );
};

export default Store;
