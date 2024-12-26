import React, {useState} from "react";
import IonIcon from '@reacticons/ionicons';
import './SearchSeries.css'

const SearchMovie: React.FC<{seriesSearched: (data: string) => void}>= ({seriesSearched}) => {
    const [searchValue, setSearchValue] = useState("")


    return (
        <div className = "series-search">
            <p>Search & Discover series of your choise</p>
            <div className="series-search-bar">
            <input 
                
                type="text"
                value={searchValue}
                onKeyPress={(e) =>{
                    if (e.key === 'Enter') {
                        seriesSearched(searchValue)
                      }
                }}
                placeholder="Search TV Series"
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button onClick={() => seriesSearched(searchValue)}><IonIcon name="search-outline"  style={{ fontSize: '30px' }} /></button>
            </div>
        </div>
    )
}

export default SearchMovie;