
import React from 'react';
import './App.css';
import {movies} from './data';
import MovieCard from './components/MovieCard';


console.log (movies);

function App() {
  return (
    <div className="App">
      <h1>Trailers trove</h1>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
