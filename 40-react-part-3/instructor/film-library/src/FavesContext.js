import React from 'react';

const FavesContext = React.createContext({
  faves: [],
  toggleFave: () => {},
});

export default FavesContext;
