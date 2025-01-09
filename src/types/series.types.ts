export type seriesSearch = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};
export type seriesData = {
  totalResults: number;
  Search: seriesSearch[];
};

export type seriesInfo = seriesSearch & {
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
  totalSeasons: string;
  Director: string;
};
