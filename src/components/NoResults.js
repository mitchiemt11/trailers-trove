import React from "react";

function NoResults() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/60 backdrop-blur-sm z-30">
      <p className="text-2xl md:text-3xl font-semibold text-white">
        Oops! No results found 🎬
      </p>
      <p className="text-gray-300 mt-2 max-w-md px-4">
        Try searching with a different keyword — we couldn't find any matches.
      </p>
    </div>
  );
}

export default NoResults;