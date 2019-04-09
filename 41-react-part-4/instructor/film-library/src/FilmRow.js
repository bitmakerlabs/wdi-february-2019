import React, {useContext} from 'react';
import Fave from './Fave';
import FavesContext from './FavesContext';

const FilmRow = ({film}) => {
  const favesContext = useContext(FavesContext);

  const handleFilmDetail = () => {
    console.log(`Showing details for ${film.title}`);
    favesContext.toggleCurrentFilm(film);
  };

  return (
    <article className="film-row" onClick={handleFilmDetail}>
      <img src={`https://image.tmdb.org/t/p/w780${film.poster_path}`} alt={film.title} />
      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{new Date(film.release_date).getFullYear()}</p>
      </div>

      <Fave onFaveToggle={() => favesContext.toggleFave(film)} />
    </article>
  )
};

export default FilmRow;
