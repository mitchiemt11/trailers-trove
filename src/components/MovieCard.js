
import React from 'react';

const MovieCard = ({ movie, setSelectedMovie }) => {
  return (
    <div className="cursor-pointer" onClick={() => setSelectedMovie(movie)}>
      <img className='w-full' src={movie.thumbnail} alt={movie.title} />
      <h5 className='font-bold m-0 text-[1.2rem] mt-2'>{movie.title}</h5>
    </div>
  );
};

export default MovieCard;


