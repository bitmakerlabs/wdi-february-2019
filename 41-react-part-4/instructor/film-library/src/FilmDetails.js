import React, {useContext} from 'react';
import FavesContext from './FavesContext';

const FilmDetails = () => {
  const favesFromContext = useContext(FavesContext)

  let details;

  if(favesFromContext.currentFilm) {
    const film = favesFromContext.currentFilm;
    const backdropURL =  `https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`;

    details = (
      <div className="film-detail is-hydrated">
        <figure className="film-backdrop">
          <img src={backdropURL} />
          <h1 className="film-title"> {film.title} </h1>
          </figure>
      </div>
    )
  } else {
    details = (
      <div className="film-detail">
        <span> No Film Selected </span>
      </div>
    )
  }

  return (
    <React.Fragment> {details} </React.Fragment>
  )
}

export default FilmDetails;
