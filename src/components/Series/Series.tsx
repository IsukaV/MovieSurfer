import { useState } from "react";
import SearchResults from "../SearchResults";
import "./Series.css";
import SearchItem from "../Common/SearchItem";

const Series = () => {
  const [series, setSeries] = useState("");

  const handleSearchSeries = (data: string) => {
    setSeries(data);
    console.log(series);
  };

  const handleBackClicked = () => {
    setSeries("");
  };

  return (
    <div className="series-search-container">
      {!series && <SearchItem searched={handleSearchSeries} type="Tv Series" />}
      {series && (
        <SearchResults
          searchText={series}
          backClicked={handleBackClicked}
          type="series"
        />
      )}
    </div>
  );
};

export default Series;
