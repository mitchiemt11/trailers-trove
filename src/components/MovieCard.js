import React from "react";

function MovieCard({ movie, setSelectedMovie }) {
  function handleClick() {
    setSelectedMovie(movie);
  }

  return (
    <div
      className="cursor-pointer rounded-xl overflow-hidden shadow-xl bg-gray-900 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 transform transition-all duration-300 ease-in-out group"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden aspect-[2/3]">
        <img
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          src={movie.thumbnail}
          alt={movie.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="bg-gradient-to-r from-blue-900/90 to-purple-900/90 text-white p-3 text-center font-medium group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300">
        {movie.title}
      </div>
    </div>
  );
}

export default MovieCard;
