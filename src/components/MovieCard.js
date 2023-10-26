
import React from 'react';

const MovieCard = ({ movie }) => {

  console.log("MOVIE",movie);
  return (
    <div className="movie-card">
      {/* <img src={movie.thumbnail} alt={movie.title} /> */}
      <h5>{movie.title}</h5>
      {/* <p>{movie.description}</p> */}
    </div>
  );
};

export default MovieCard;
