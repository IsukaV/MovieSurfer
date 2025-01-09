import { useState } from "react";

import SearchResults from "../SearchResults";
import "./Movies.css";
import SearchItem from "../Common/SearchItem";

const Movies = () => {
  const [movie, setMovie] = useState("");
  const [searched, setSearched] = useState(false);
  console.log(searched);
  const handleSearchMovie = (data: string) => {
    setSearched(true);
    setMovie(data);
    console.log(movie);
  };

  const handleBackClicked = () => {
    setSearched(false);
    setMovie("");
  };

  return (
    <div data-testid="movie-search" className="movie-search-container">
      {!movie && <SearchItem searched={handleSearchMovie} type="movie" />}
      {movie && (
        <SearchResults
          searchText={movie}
          backClicked={handleBackClicked}
          type="movie"
        />
      )}
    </div>
  );
};

export default Movies;
