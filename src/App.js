import React from 'react';
import { movies } from './data/data';
import MovieCard from './components/MovieCard';
import YouTube from 'react-youtube';
import Landing from './components/Landing';
import Header from './components/Header';
import NoResults from './components/NoResults';

// Constants
const CONFETTI_DURATION = 4000;
const YOUTUBE_OPTS = {
  height: 500,
  width: '100%',
  playerVars: {
    autoplay: 1,
    controls: 0,
  },
};

function App() {

  const [appState, setAppState] = React.useState({
    searchTerm: '',
    filteredMovies: movies,
    selectedMovie: movies[0] || {},
    noResults: false,
    playTrailer: false,
    showLanding: true,
    showConfetti: false,
  });


  const playTrailerButtonRef = React.useRef(null);

  const {
    searchTerm,
    filteredMovies,
    selectedMovie,
    noResults,
    playTrailer,
    showLanding,
    showConfetti,
  } = appState;

  const showSearchActive = noResults || filteredMovies.length !== movies.length;

  const handleGetStarted = React.useCallback(() => {
    setAppState(prev => ({ ...prev, showConfetti: true }));

    setTimeout(() => {
      setAppState(prev => ({
        ...prev,
        showConfetti: false,
        showLanding: false,
      }));
    }, CONFETTI_DURATION);
  }, []);

  const handleSearchTrailer = React.useCallback((event) => {
    event.preventDefault();
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(appState.searchTerm.toLowerCase())
    );

    setAppState(prev => ({
      ...prev,
      filteredMovies: filtered,
      noResults: filtered.length === 0,
    }));
  }, [appState.searchTerm]);

  const handleSetSearchTerm = React.useCallback((term) => {
    setAppState(prev => ({ ...prev, searchTerm: term }));
  }, []);

  const handleSelectMovie = React.useCallback((movie) => {
    setAppState(prev => ({ ...prev, selectedMovie: movie }));
  }, []);

  const toggleTrailer = React.useCallback((value) => {
    setAppState(prev => ({ ...prev, playTrailer: value }));
  }, []);

  const handleClearSearch = React.useCallback(() => {
    setAppState(prev => ({
      ...prev,
      searchTerm: '',
      filteredMovies: movies,
      selectedMovie: movies[0] || {},
      noResults: false,
    }));
  }, []);

  const handleGoHome = React.useCallback(() => {
    // Return to landing screen and reset search/trailer state
    setAppState(prev => ({
      ...prev,
      searchTerm: '',
      filteredMovies: movies,
      selectedMovie: movies[0] || {},
      noResults: false,
      playTrailer: false,
      showLanding: true,
      showConfetti: false,
    }));
  }, []);

  React.useEffect(() => {
    // Set the selected movie to the first movie when the component is mounted
    if (filteredMovies.length > 0) {
      setAppState(prev => ({ ...prev, selectedMovie: filteredMovies[0] }));
    } else {
      setAppState(prev => ({ ...prev, selectedMovie: {} }));
    }
  }, [filteredMovies]);

  const renderTrailer = () => (
    <div className="absolute inset-0 w-full h-full">
      <YouTube
        videoId={selectedMovie.trailer}
        opts={YOUTUBE_OPTS}
        className="absolute inset-0 w-full h-full"
        onEnd={() => toggleTrailer(false)}
      />
    </div>
  );


  const renderMovieContent = () => (
    <>
      <Header
        onSearch={handleSearchTrailer}
        searchTerm={searchTerm}
        setSearchTerm={handleSetSearchTerm}
        onClearSearch={handleClearSearch}
        showSearchActive={showSearchActive}
        onGoHome={handleGoHome}
      />
      <div
        className="relative min-h-[500px] bg-top flex items-end bg-cover"
        style={{
          backgroundImage: `url(${selectedMovie.backgroundImage || './thumbnails/po.jpeg'})`
        }}
      >
        <div className="pb-[60px] max-w-[1000px] mx-auto">
          {playTrailer && (
            <button
              className="bg-[#000030] hover:bg-red-700 border-solid border-[#000030] text-white px-5 py-2 text-[1.2rem] mt-4 mb-2 rounded-lg absolute z-10 left-[30px] bottom-[30px]"
              onClick={() => toggleTrailer(false)}
            >
              Close
            </button>
          )}

          {selectedMovie.trailer && (
            <button
              ref={playTrailerButtonRef}
              onClick={() => toggleTrailer(true)}
              className="inline-flex items-center justify-center px-5 py-3 text-[1.2rem] font-medium text-white bg-[#000030] rounded-lg hover:bg-[#001330cf] border-solid border-[#000030]"
            >
              Watch Trailer
            </button>
          )}

          <h1 className="text-[aliceblue] text-[3rem]">{selectedMovie.title}</h1>
          <p className="text-[aliceblue] text-[1.3] font-medium">
            {selectedMovie.description}
          </p>
        </div>
      </div>

      {noResults ? (
        <NoResults />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] p-[25px] max-w-[1000px] mx-auto">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id || movie.title}
              movie={movie}
              setSelectedMovie={handleSelectMovie}
            />
          ))}
        </div>
      )}
    </>
  );

  return (
    <div className="min-h-screen">
      {showLanding ? (
        <Landing
          handleGetStarted={handleGetStarted}
          showConfetti={showConfetti}
        />
      ) : (
        renderMovieContent()
      )}
    </div>
  );
}

export default App;
