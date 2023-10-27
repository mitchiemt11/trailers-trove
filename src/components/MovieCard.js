
import React from 'react';

const MovieCard = ({ movie }) => {

  console.log("MOVIE",movie);
  return (
    <div className="movie-card">
      <img className='movie-cover' src={movie.thumbnail} alt={movie.title} />
      <h5 className='movie-title'>{movie.title}</h5>
    </div>
  );
};

export default MovieCard;
