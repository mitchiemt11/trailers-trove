import React, { useState, useEffect } from "react";
import { movies } from "./data/data";
import MovieCard from "./components/MovieCard";
import YouTube from "react-youtube";
import Landing from "./components/Landing";
import Header from "./components/Header";
import NoResults from "./components/NoResults";

function App() {
  // Simple separate state for each thing
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [selectedMovie, setSelectedMovie] = useState(movies[0] || {});
  const [noResults, setNoResults] = useState(false);
  const [playTrailer, setPlayTrailer] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  const showSearchActive = noResults || filteredMovies.length !== movies.length;

  // Handle Get Started button click
  function handleGetStarted() {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      setShowLanding(false);
    }, 4000);
  }

  // Handle search
  function handleSearchTrailer(event) {
    event.preventDefault();
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
    setNoResults(filtered.length === 0);
  }

  // Handle movie selection
  function handleSelectMovie(movie) {
    setSelectedMovie(movie);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Clear search and go back
  function handleClearSearch() {
    setSearchTerm("");
    setFilteredMovies(movies);
    setSelectedMovie(movies[0] || {});
    setNoResults(false);
  }

  // Go back to landing page
  function handleGoHome() {
    setSearchTerm("");
    setFilteredMovies(movies);
    setSelectedMovie(movies[0] || {});
    setNoResults(false);
    setPlayTrailer(false);
    setShowLanding(true);
    setShowConfetti(false);
  }

  // Update selected movie when filtered list changes
  useEffect(() => {
    if (filteredMovies.length > 0) {
      setSelectedMovie(filteredMovies[0]);
    } else {
      setSelectedMovie({});
    }
  }, [filteredMovies]);

  // Show landing page
  if (showLanding) {
    return (
      <div className="min-h-screen bg-[#000020] text-white">
        <Landing handleGetStarted={handleGetStarted} showConfetti={showConfetti} />
      </div>
    );
  }

  // Show main app
  return (
    <div className="min-h-screen bg-[#000020] text-white">
      <Header
        onSearch={handleSearchTrailer}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onClearSearch={handleClearSearch}
        showSearchActive={showSearchActive}
        onGoHome={handleGoHome}
      />

      {/* Movie Background Section */}
      <div
        className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[85vh] flex flex-col justify-end bg-black"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%), url(${
            selectedMovie.backgroundImage || "./thumbnails/po.jpeg"
          })`,
          backgroundSize: 'contain',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* No Results Overlay */}
        {noResults && <NoResults />}

        <div className="max-w-[1200px] mx-auto pb-[70px] px-6 text-white relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold drop-shadow-lg mb-4">
            {selectedMovie.title || "Search for Movies"}
          </h1>
          <p className="mt-3 text-base sm:text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
            {selectedMovie.description || "Use the search bar above to find movie trailers"}
          </p>

          {selectedMovie.trailer && !playTrailer && !noResults && (
            <button
              onClick={() => setPlayTrailer(true)}
              className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
            >
              ▶ Watch Trailer
            </button>
          )}

          {playTrailer && (
            <button
              onClick={() => setPlayTrailer(false)}
              className="absolute left-5 bottom-5 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold shadow-md z-20"
            >
              ✖ Close
            </button>
          )}
        </div>

        {/* Trailer Player */}
        {playTrailer && (
          <div className="absolute inset-0 w-full h-full bg-black">
            <YouTube
              videoId={selectedMovie.trailer}
              opts={{
                height: 500,
                width: "100%",
                playerVars: {
                  autoplay: 1,
                  controls: 0,
                },
              }}
              className="absolute inset-0 w-full h-full"
              onEnd={() => setPlayTrailer(false)}
            />
          </div>
        )}
      </div>

      {/* Movie Grid */}
      {!noResults && (
        <div className="px-6 py-8 bg-gradient-to-b from-[#000020] to-[#000040]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id || movie.title}
                movie={movie}
                setSelectedMovie={handleSelectMovie}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;