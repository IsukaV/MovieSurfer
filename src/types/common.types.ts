//movieSearch & seriesSearch
export type searchItem = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

//movieData & seriesData
export type searchItems = {
  totalResults: number;
  Search: searchItem[];
};

//movieInfo
export type itemInfo = searchItem & {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Director: string;
  totalSeasons: string;
};

export type seriesInfo = itemInfo & {
  totalSeasons: string;
};
