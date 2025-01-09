import React , {useState, useEffect} from "react"
import MovieItem from './Movie/MovieItem'
import SeriesItem from "./Series/SeriesItem"
import SearchItem from "./SearchItem"
import PageSelector from "./PageSelector"
import {movieData} from './../types/movie.types'
import {seriesData} from './../types/series.types'
import { fetchItems} from "../services/apiServices"
import './SearchResults.css'

interface SearchResultsProps {
    searchText: string;
    backClicked: () => void;
    type: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({searchText, backClicked, type}) => {
    const [loading, setLoading] = useState(true)
    const [searchTxt, setSearchTxt] = useState(" ")
    const [pageNo, setPageNo] = useState(1)
    const [data, setData] = useState<movieData | seriesData | null>(null);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
      setLoading(true)
      const getItems = async () => {
        try {
          const items = await fetchItems(searchText, pageNo, type); 
          setData(items);
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
    
    getItems();
    setSearchTxt(searchText)
    }, [pageNo]);


    
    const handlePageClick = (page_no: number) => {
        setPageNo(page_no)
        console.log(page_no)
    }

    if(!data){
        return(<>
        <div>Loading</div>
        </>)
    }

    return (
    <> 
        <div className="search-result-txt"> 
            <button className='search-result-back-btn' onClick={backClicked}>
                <p>Back</p>
            </button>
            {data.totalResults? data.totalResults : 0} Results : {searchText} 
        </div>
        {data.Search && 
        <div className="movie-results-container">
        {!loading && type=="movie" && searchTxt && data.Search.map((movie) => (
        <SearchItem
            item={movie}
        />
        ))}
        {!loading && type=="series" && searchTxt && data.Search.map((series) => (
        <SearchItem
            item={series}
        />
        ))}
        {loading &&
        <div className="loading-movies">Loading</div>
        }
        </div>
        
        }
       
        {data.totalResults &&
        <PageSelector totalResults={data.totalResults} pageClicked={handlePageClick}/>}
    </>
    )

}

export default SearchResults