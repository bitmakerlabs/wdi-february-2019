import React, {useState} from 'react';
import FilmList from './FilmList';
import FavesContext from './FavesContext';

const App = () => {
  const [faves, setFaves] = useState([]);

  const onFaveToggle = (film) => {
    const favesCopy = faves.slice();
    const filmIndex = faves.indexOf(film);

    if (faves.includes(film)) {
      // remove it from faves
      console.log(`Removing ${film.title} from faves`);
      favesCopy.splice(filmIndex, 1);
      setFaves(favesCopy);
    } else {
      // add it to faves
      console.log(`Adding ${film.title} to faves`);
      setFaves([...favesCopy, film]);
    }
  };

  return (
    <main className="film-library">
      <FavesContext.Provider value={{faves, toggleFave: onFaveToggle}}>
        <FilmList />

        <section className="film-details">
          <h1 className="section-title">DETAILS</h1>
        </section>
      </FavesContext.Provider>
    </main>
  );
}

export default App;
