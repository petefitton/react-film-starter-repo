import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

function App() {
  return (
    <div className="film-library">
        <ul className="header">
        </ul>
        <FilmListing films={TMDB.films} />
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        <FilmDetails />
      </div>
    </div>
  );
}

export default App;
