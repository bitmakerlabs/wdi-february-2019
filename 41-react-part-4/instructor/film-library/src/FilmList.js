import React, {useState, useContext} from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow';
import FavesContext from './FavesContext';

const FilmList = () => {
  const favesFromContext = useContext(FavesContext);
  const [filter, setFilter] = useState('all')

  const films = filter === 'faves' ? favesFromContext.faves : TMDB.films;

  const filmList = films.map((film) => {
    return (
      <FilmRow film={film} key={film.id} />
    );
  });

  const handleFilterToggle = (filter) => {
    console.log(`Setting Filter to ${filter}`);
    setFilter(filter);
  }

  return (
    <section className="film-list">
      <h1 className="section-title">FILMS</h1>

      <nav className="film-list-filters">
        <button className="film-list-filter" onClick={() => {handleFilterToggle('all')}}>
          ALL
          <span className="section-count">{filmList.length}</span>
        </button>
        <button className="film-list-filter" onClick={() => {handleFilterToggle('faves')}}>
          FAVES
          <span className="section-count">{favesFromContext.faves.length}</span>
        </button>
      </nav>


      {filmList}
    </section>
  );
};

export default FilmList;
