import React from "react";

function NoResults() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      <p className="text-2xl md:text-3xl font-semibold text-white">
        Oops! No results found 🎬
      </p>
      <p className="text-gray-400 mt-2 max-w-md">
        Try searching with a different keyword — we couldn't find any matches.
      </p>
    </div>
  );
}

export default NoResults;
