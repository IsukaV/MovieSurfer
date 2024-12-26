import React, {useState} from "react";
import IonIcon from '@reacticons/ionicons';
import './SearchMovie.css'

const SearchMovie: React.FC<{movieSearched: (content: string) => void}> = ({ movieSearched }) => {
    const [searchValue, setSearchValue] = useState("")


    return (
        <div className = "movie-search">
            <p>Search & Discover movie of your choise</p>
            <div className="movie-search-bar">
            <input 
                
                type="text"
                value={searchValue}
                onKeyPress={(e) =>{
                    if (e.key === 'Enter') {
                        movieSearched(searchValue)
                      }
                }}
                placeholder="Search movie"
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button onClick={() => movieSearched(searchValue)}><IonIcon name="search-outline"  style={{ fontSize: '30px' }} /></button>
            </div>
        </div>
    )
}

export default SearchMovie;