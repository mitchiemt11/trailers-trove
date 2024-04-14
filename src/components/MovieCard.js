
import React from 'react';

const MovieCard = ({ movie, setSelectedMovie }) => {
  return (
    <div className="cursor-pointer hover:animate-fade-in opacity-80 transition duration-300 ease-in-out hover:opacity-100" onClick={() => setSelectedMovie(movie)}>
      <img className='w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 hover:scale-110' src={movie.thumbnail} alt={movie.title} />
      <h5 className='font-bold m-0 text-[1.2rem] mt-2'>{movie.title}</h5>
    </div>
  );
};

export default MovieCard;


