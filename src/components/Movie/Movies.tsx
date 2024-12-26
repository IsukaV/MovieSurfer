import {useState} from 'react'
import SearchMovie from './SearchMovie';
import SearchResults from '../SearchResults';
import './Movies.css'

const Movies = () => {
    const [movie, setMovie] = useState("")
    const [movieSearched, setMovieSearched] = useState(false)

    const handleSearchMovie = (data: any) => {
        setMovieSearched(true)
        setMovie(data)
        console.log(movie)
    }

    const handleBackClicked = () => {
        setMovieSearched(false)
        setMovie("")
    }

    return(
        <div className="movie-search-container">
            {!movie && <SearchMovie movieSearched={handleSearchMovie}/>}
            {movie && <SearchResults searchText={movie} backClicked={handleBackClicked} type="movie"/>}
            
        </div>
    )
}

export default Movies;