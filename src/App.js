import React from 'react';
import { movies } from './data';
import MovieCard from './components/MovieCard';
import YouTube from 'react-youtube';
import Landing from './components/Landing';
import Header from './components/Header';
import NoResults from './components/NoResults';
import Card from './components/Card';

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
          <Header onSearch={handleSearchTrailer} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className='relative min-h-[500px] bg-top flex items-end bg-cover' style={{ backgroundImage: `url(${selectedMovie.backgroundImage || './thumbnails/po.jpeg'})` }}>
            <div className='pb-[60px] max-w-[1000px] ml-auto mr-auto' >
              {playTrailer ? <button className='bg-[#000030] hover:bg-red-700 border-solid border-[#000030] text-white px-5 py-2 decoration-none inline-block text-[1.2rem] mt-4 mb-2 cursor-pointer rounded-lg absolute z-10 left-[30px] bottom-[30px]' onClick={() => setPlayTrailer(false)} >
                Close
              </button>
                : null}
              {selectedMovie.trailer && playTrailer ? renderTrailer(selectedMovie.trailer) : null}
              <button onClick={() => setPlayTrailer(true)} className='cursor-pointer border-solid border-[#000030] inline-flex items-center justify-center px-5 py-3 text-[1.2rem] text-base font-medium text-center text-white bg-[#000030] rounded-lg hover:bg-[#001330cf]'>
                Watch Trailer
              </button>
              <p className='text-[aliceblue] text-[3rem]'>{selectedMovie.title}</p>
              <p className='text-[aliceblue] text-[1.3] font-medium'>{selectedMovie.description}</p>
            </div>
          </div>

          {noResults ? (
            <NoResults/>
          ) : (
            <div className="grid grid-cols-3 gap-[25px] p-[25px] max-w-[1000px] mx-auto my-auto">
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
