import axios from 'axios';
import React, { createContext, useReducer, useEffect, useMemo } from 'react';

export const initialState = {theme: "", data: []}

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DENTISTS':
      return { ...state, data: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        dispatch({ type: 'SET_DENTISTS', payload: response.data });
      })
      .catch((error) => console.log(error));
  }, []);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const value = useMemo(() => ({
    state,
    toggleTheme,
  }), [state]);
  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};
