import axios from 'axios';
import React, { createContext, useReducer, useEffect, useMemo } from 'react';

export const initialState = {theme: "", data: [], favorites: [] }

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DENTISTS':
      return { ...state, data: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'ADD_FAVORITE': {
        const updatedFavorites = [...state.favorites, action.payload];
        // Guardar en localStorage
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        return { ...state, favorites: updatedFavorites };
      }
    case 'REMOVE_FAVORITE': {
        const updatedFavorites = state.favorites.filter(
          (item) => item.id !== action.payload.id
        );
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        return { ...state, favorites: updatedFavorites };
      }
    case 'LOAD_FAVORITES': {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        return { ...state, favorites: savedFavorites };
      }
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

  const addFavorite = (dentist) => {
    dispatch({ type: 'ADD_FAVORITE', payload: dentist });
  };

  const removeFavorite = (dentist) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: dentist });
  };

  const value = useMemo(
    () => ({
      state,
      toggleTheme,
      addFavorite,
      removeFavorite,
    }),
    [state]
  );
  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};
