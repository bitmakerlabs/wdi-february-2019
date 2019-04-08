import React, {useContext} from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow';
import FavesContext from './FavesContext';

const FilmList = () => {
  const favesFromContext = useContext(FavesContext);

  const filmList = TMDB.films.map((film) => {
    return (
      <FilmRow film={film} key={film.id} />
    );
  });

  return (
    <section className="film-list">
      <h1 className="section-title">FILMS</h1>

      <nav className="film-list-filters">
        <button className="film-list-filter">
          ALL
          <span className="section-count">{filmList.length}</span>
        </button>
        <button className="film-list-filter">
          FAVES
          <span className="section-count">{favesFromContext.faves.length}</span>
        </button>
      </nav>


      {filmList}
    </section>
  );
};

export default FilmList;
