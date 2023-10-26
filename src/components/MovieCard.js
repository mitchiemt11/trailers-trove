
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      {/* <img src={movie.thumbnail} alt={movie.title} /> */}
      <p>{movie.title}</p>
      {/* <p>{movie.description}</p> */}
    </div>
  );
};

export default MovieCard;
