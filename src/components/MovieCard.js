
import React from 'react';

const MovieCard = ({ movie, selectedMovie }) => {
  return (
    <div className="movie-card" onClick={() => selectedMovie(movie)}>
      <img className='movie-cover' src={movie.thumbnail} alt={movie.title} />
      <h5 className='movie-title'>{movie.title}</h5>
    </div>
  );
};

export default MovieCard;
