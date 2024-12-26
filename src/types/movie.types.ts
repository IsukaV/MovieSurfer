export type movieSearch = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}
export type movieData = {
    totalResults: number;
    Search: movieSearch[];
}

export type movieInfo = movieSearch & {
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
}