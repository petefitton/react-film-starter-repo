import React from 'react';
import FilmPoster from './FilmPoster';

function FilmDetails(props) {
  return (
    <div className="film-details">
      <h1 className="section-title">DETAILS</h1>
      <FilmPoster />
    </div>
  )
}

export default FilmDetails;