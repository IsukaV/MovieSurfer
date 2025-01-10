import React, { useState } from "react";
import IonIcon from "@reacticons/ionicons";
import "./SearchBar.css";

const SearchBar: React.FC<{
  searched: (content: string) => void;
  type: string;
}> = ({ searched, type }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="movie-search">
      <p data-testid="search-text">Search & Discover {type} of your choice</p>
      <div className="movie-search-bar">
        <input
          data-testid="search-input"
          type="text"
          value={searchValue}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              searched(searchValue);
            }
          }}
          placeholder="Search movie"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={() => searched(searchValue)}>
          <IonIcon data-testid="search-Icon" name="search-outline" style={{ fontSize: "30px" }} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
