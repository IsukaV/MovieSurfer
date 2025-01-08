import {useState} from 'react'
import SearchMovie from './SearchMovie';
import SearchResults from '../SearchResults';
import './Movies.css'

const Movies = () => {
    const [movie, setMovie] = useState("")
    const [searched, setSearched] = useState(false)

    const handleSearchMovie = (data: string) => {
        setSearched(true)
        setMovie(data)
        console.log(movie)
    }

    const handleBackClicked = () => {
        setSearched(false)
        setMovie("")
    }

    return(
        <div className="movie-search-container">
            {!movie && <SearchMovie searched={handleSearchMovie} type="movie"/>}
            {movie && <SearchResults searchText={movie} backClicked={handleBackClicked} type="movie"/>}
            
        </div>
    )
}

export default Movies;