import React from 'react';
import FilmRow from './FilmRow';

function FilmListing(props) {
  let handleFilterClick = (filter) => {console.log(`Setting filter to ${filter}`)}


  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div className="film-list-filter">
          ALL
          <span className="section-count">{props.films.length}</span>
        </div>
        <div className="film-list-filter">
          FAVES
          <span className="section-count">0</span>
        </div>
      </div>
      {props.films.map((film, index) => {
        return (
          <div key={`in-${index}`}>
            <FilmRow film={film} />
          </div>
        )
      })}
    </div>
  )
}

export default FilmListing;