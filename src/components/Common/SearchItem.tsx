import React, { useState } from "react";
import IonIcon from "@reacticons/ionicons";
import "./SearchItem.css";

const SearchItem: React.FC<{
  searched: (content: string) => void;
  type: string;
}> = ({ searched, type }) => {
  console.log("Serach page loaded")
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="movie-search">
      <p data-testid="search-txt">Search & Discover {type} of your choice</p>
      <div className="movie-search-bar">
        <input
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
          <IonIcon name="search-outline" style={{ fontSize: "30px" }} />
        </button>
      </div>
    </div>
  );
};

export default SearchItem;
