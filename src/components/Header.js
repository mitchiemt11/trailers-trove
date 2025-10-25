import React from "react";

function Header({ onSearch, searchTerm, setSearchTerm, onClearSearch, showSearchActive, onGoHome }) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 shadow-lg border-b border-blue-700/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left: Logo & Navigation */}
          <div className="flex items-center gap-6">
            <div className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Trailers Trove
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onGoHome}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-200"
              >
                🏠 Home
              </button>
              {showSearchActive && (
                <button
                  onClick={onClearSearch}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-200"
                >
                  ← Back
                </button>
              )}
            </div>
          </div>

          {/* Right: Search Form */}
          <form onSubmit={onSearch} className="relative w-full max-w-md">
            <div className="relative">
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for movie trailers..."
                className="w-full pl-12 pr-24 py-3 text-sm text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent hover:bg-white/20 transition-all duration-200"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300">
                🔍
              </div>
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-5 py-1.5 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
