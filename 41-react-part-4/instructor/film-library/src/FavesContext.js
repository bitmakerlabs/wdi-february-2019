import React from 'react';

const FavesContext = React.createContext({
  faves: [],
  toggleFave: () => {},
  toggleCurrentFilm: () => {},
  currentFilm: {}
});

export default FavesContext;
