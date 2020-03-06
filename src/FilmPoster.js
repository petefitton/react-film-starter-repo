import React from 'react';

function FilmPoster(props) {
  return (
    <div>
      <img className="poster" alt="Film Poster" src={`https://image.tmdb.org/t/p/w780/${props.poster_path}`}></img>
    </div>
  )
}

export default FilmPoster;