import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

function FilmRow(props) {
  return (
    <div className="film-row">
      <FilmPoster poster_path={props.film.poster_path}/>
      <div className="film-summary">
        <Fave />
        <h1>{props.film.title}</h1>
        <p>{props.film.release_date}</p>
      </div>
    </div>
  )
}

export default FilmRow;