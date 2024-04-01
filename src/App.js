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


  const handleGetStarted = () => {
    setShowLanding(false);
  };


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
        <Landing handleGetStarted={handleGetStarted} />
      ) : (
        <>
          <header>
            <div className='flex justify-between items-center max-w-[1000px] ml-0 mr-0 '>
              <div className='text-xl'>Trailers Trove</div>
              <form onSubmit={handleSearchTrailer}>
                <div className="flex">
                  <input
                    type="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    className="rounded-t-l-lg rounded-b-l-lg border-solid border-[#ccc] p-10 w-full focus:outline-none"
                  />
                  <button type="submit" className="bg-[#aeb0b1] border-none px-8 py-12 border-t-r-lg border-b-r-lg text-white cursor-pointer">
                    <i className="fa fa-search"></i>
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



