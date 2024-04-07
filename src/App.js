import React from 'react';
import { movies } from './data';
import MovieCard from './components/MovieCard';
import YouTube from 'react-youtube';
import Landing from './Landing';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredMovies, setFilteredMovies] = React.useState(movies);
  const [selectedMovie, setSelectedMovie] = React.useState({});
  const [noResults, setNoResults] = React.useState(false);
  const [playTrailer, setPlayTrailer] = React.useState(false);
  const [showLanding, setShowLanding] = React.useState(true);
  const [showConfetti, setShowConfetti] = React.useState(false);

  const handleGetStarted = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      setShowLanding(false);
    }, 4000);
  }


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
      <div className='absolute left-0 top-0 right-0 bottom-0 w-full h-full'>
        <YouTube
          videoId={trailer}
          opts={opts}
          className='absolute left-0 top-0 right-0 bottom-0 w-full h-full'
          onEnd={() => setPlayTrailer(false)}
        />
      </div>
    )
  }

  return (
    <div>
      {showLanding ? (
        <Landing handleGetStarted={handleGetStarted} showConfetti={showConfetti} />
      ) : (
        <>
          <header className="text-white px-8 py-6">
            <div className='flex justify-between items-center max-w-[1000px] ml-auto mr-auto '>
              <div className='text-2xl'>Trailers Trove</div>
              <form onSubmit={handleSearchTrailer}>
                <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    id="search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </header>

          <div className='relative min-h-[500px] bg-center flex items-end bg-cover' style={{ backgroundImage: `url(${selectedMovie.backgroundImage || './thumbnails/po.jpeg'})` }}>
            <div className='pb-[60px] max-w-[1000px] ml-0 mr-0' >
              {playTrailer ? <button className='bg-[#000030] border-solid border-[#000030] text-white px-15 py-15 decoration-none inline-block text-[1.2rem] mt-4 mb-2 cursor-pointer rounded-lg absolute z-10 left-[30px] bott-[30px]' onClick={() => setPlayTrailer(false)} >
                Close
              </button>
                : null}
              {selectedMovie.trailer && playTrailer ? renderTrailer(selectedMovie.trailer) : null}
              <button className='bg-[#000030] border-solid border-[#000030] text-white px-15 py-15 decoration-none inline-block text-[1.2rem] mt-4 mb-2 cursor-pointer rounded-lg' onClick={() => setPlayTrailer(true)} >
                Watch Trailer
              </button>
              <h1 className='text-[3rem] m-0 p-0 drop-shadow-lg'>{selectedMovie.title}</h1>
              <p className='text-[aliceblue] text-[1.2] font-medium'>{selectedMovie.description}</p>
            </div>
          </div>
          {noResults ? (
            <div className="text-center text-[2rem] mt-[50px]">
              <p>Oops!, No results found</p>
            </div>
          ) : (
            <div className="grid gap-[15px] p-[15px] grid-cols max-w-[1000px] mx-auto my-auto">
              {filteredMovies.map((movie, index) => (
                <MovieCard
                  key={index}
                  movie={movie}
                  setSelectedMovie={setSelectedMovie}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
