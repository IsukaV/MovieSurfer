import {useState} from 'react'
import SearchSeries from './SearchSeries';
import SearchResults from '../SearchResults';
import './Series.css'

const Series = () => {
    const [series, setSeries] = useState("")

    const handleSearchSeries = (data: string) => {
        setSeries(data)
        console.log(series)
    }

    const handleBackClicked = () => {
        setSeries("")
    }

    return(
        <div className="series-search-container">
            {!series && <SearchSeries seriesSearched={handleSearchSeries}/>}
            {series && <SearchResults searchText={series} backClicked={handleBackClicked} type="series"/>}
            
        </div>
    )
}

export default Series;