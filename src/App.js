import React from 'react';
import './App.css';
import { movies } from './data';
import MovieCard from './components/MovieCard';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredMovies, setFilteredMovies] = React.useState(movies);
  const [selectedMovie, setSelectedMovie] = React.useState({});

  console.log("SMMMM:::", selectedMovie)

  // const handleSearchTrailer = (event) => {
  //   event.preventDefault();
  //   // Filter movies based on the search term
  //   const filtered = movies.filter((movie) =>
  //     movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredMovies(filtered);
  // };

  const handleSearchTrailer = (event) => {
    event.preventDefault();
    // Filter movies based on the search term
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };
  
  React.useEffect(() => {
    // Set the selected movie to the first movie when the component is mounted
    if (filteredMovies.length > 0) {
      setSelectedMovie(filteredMovies[0]);
    } else {
      setSelectedMovie({});
    }
  }, [filteredMovies]);

  return (
    <div className="App">
      <header className='header'>
        <div className='header-content max-center'>
          <h1>Trailers trove</h1>
          <form onSubmit={handleSearchTrailer}>
            <input
              type="search"
              placeholder="Search for a trailer"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </header>

      <div className='hero'>
        <div className='hero-content max-center'>
          <h1>{selectedMovie.title}</h1>
        </div>
      </div>

      <div className="movie-list max-center">
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
