import React from 'react';
import './App.css';
import { movies } from './data';
import MovieCard from './components/MovieCard';
import YouTube from 'react-youtube';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredMovies, setFilteredMovies] = React.useState(movies);
  const [selectedMovie, setSelectedMovie] = React.useState({});
  const [noResults, setNoResults] = React.useState(false);
  const [playTrailer, setPlayTrailer] = React.useState(false);


  const handleSearchTrailer = (event) => {
    event.preventDefault();
    // Filter movies based on the search term
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
    setNoResults(filtered.length === 0);
  };
  
  React.useEffect(() => {
    // Set the selected movie to the first movie when the component is mounted
    if (filteredMovies.length > 0) {
      setSelectedMovie(filteredMovies[0]);
    } else {
      setSelectedMovie({});
    }
  }, [filteredMovies]);

  const renderTrailer = (trailer) => {
    const opts = {
      height: 500,
      width: '100%',
      playerVars: {
        autoplay: 1,
        controls: 0,
      },
    };

    return (
      <div className='trailer'>
        <YouTube
          videoId={trailer}
          opts={opts}
          className='trailer'
        />
      </div>
    )
  }

  return (
    <div className="App">
      <header className='header'>
        <div className='header-content max-center'>
          <h1>Trailers Trove</h1>
          <form onSubmit={handleSearchTrailer}>
            <div className="search-wrapper">
              <input
                type="search"
                placeholder="Search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="rounded-left-input"
              />
              <button type="submit" className="search-button">
               <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </header>

      <div className='hero' style={{ backgroundImage: `url(${selectedMovie.backgroundImage || './thumbnails/po.jpeg'})` }}>
        <div className='hero-content max-center' >
          {playTrailer ? <button className='play-btn play-btn--close' onClick={() => setPlayTrailer(false)} >
              Close
            </button>
          : null}
          {selectedMovie.trailer && playTrailer ? renderTrailer(selectedMovie.trailer) : null}
          <button className='play-btn' onClick={() => setPlayTrailer(true)} >
           Watch Trailer
          </button>
          <h1 className='hero-title'>{selectedMovie.title}</h1>
          <p className='hero-overview'>{selectedMovie.description}</p>
        </div>
      </div>

      {noResults ? (
        <div className="no-results">
          <p>Oops!, No results found</p>
        </div>
      ) : (
        <div className="movie-list max-center">
          {filteredMovies.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              setSelectedMovie={setSelectedMovie}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
