import React , {useState, useEffect} from "react"
import MovieItem from './Movie/MovieItem'
import SeriesItem from "./Series/SeriesItem"
import PageSelector from "./PageSelector"
import {movieData} from './../types/movie.types'
import {seriesData} from './../types/series.types'
import { fetchMovies , fetchSeries} from "../services/apiServices"
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
        if(type == "movie"){
            setLoading(true)

            const getMovies = async () => {
                try {
                  const movieData = await fetchMovies(searchText, pageNo); 
                  setData(movieData);
                } catch (error: any) {
                  setError(error.message);
                } finally {
                  setLoading(false);
                }
              };
            
            getMovies();
            
            setSearchTxt(searchText)
            console.log("search text is" ,searchText)
            fetchMovies(searchText, pageNo)
    }else{

        setLoading(true)

        const getSeries = async () => {
            try {
              const seriesData = await fetchSeries(searchText, pageNo); 
              setData(seriesData);
            } catch (error: any) {
              setError(error.message);
            } finally {
              setLoading(false);
            }
          };
        
        getSeries();

        setSearchTxt(searchText)
        fetchSeries(searchText, pageNo)
    }
        

        
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
        <MovieItem
            movie={movie}
        />
        ))}
        {!loading && type=="series" && searchTxt && data.Search.map((series) => (
        <SeriesItem
            series={series}
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