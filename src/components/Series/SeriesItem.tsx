import React, {useState, useEffect} from 'react'
import {seriesSearch,  seriesInfo} from './../../types/series.types'
import { fetchItemInfo} from '../../services/apiServices'
import './SeriesItem.css'

const SeriesItem: React.FC<{series: seriesSearch}> = ({series}) => {
    const [itemClicked, setItemClicked] = useState(false)

    const handleDetailClose = () => {
        setItemClicked(false)
    }
    return (<>
    
        <div className="series-item-container" onClick={() => setItemClicked(true)}>
            <div className="series-img-container">
                {series.Poster != "N/A" && <img src={series.Poster}/>}
                {series.Poster == "N/A" && <div>No Image</div>}

            </div>
            <div className="series-info-container">
                <p className="series-title">{series.Title}</p>
            </div>
        </div>
        {itemClicked && <SeriesDetails series={series} detailClosed={handleDetailClose}/>}
        </>)
}


const SeriesDetails : React.FC<{series: seriesSearch, detailClosed: () => void}> = ({series, detailClosed}) => {
    const [data, setData] = useState<seriesInfo | null>(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

        const getSeriesInfo = async () => {
            try {
              const seriesData = await fetchItemInfo(series.imdbID); 
              setData(seriesData);
            } catch (error: any) {
              console.log(error)
            } finally {
              setLoading(false);
            }
          };
        
        getSeriesInfo();

        
    }, []); 

        return (
            <div className="series-details-container">
                {loading && <div className="series-details" style={{textAlign: 'center'}}><p>Loading</p></div>}
                
                {!loading && 
                    <div className="series-details">
                        {data?.Plot &&
                        <div>
                            <p className='series-title-txt'>{data.Title} - {data.Year} </p>
                            <p>{data.Plot}</p>
                        </div>
                        }
                        {data?.Released &&
                        <div>
                            <p style={{fontWeight: 'bold', paddingTop: 10}}>Released on</p>
                            <p>{data.Released}</p>
                        </div>
                        }
                        {data?.Actors &&
                        <div>
                             <p style={{fontWeight: 'bold', paddingTop: 10}}>Actors</p>
                             <p>{data.Actors}</p>
                        </div>
                        }
                       {data?.Director &&
                        <div>
                             <p style={{fontWeight: 'bold', paddingTop: 10}}>Director</p>
                             <p>{data.Director}</p>
                        </div>
                        }
                        {data?.Genre &&
                        <div>
                             <p style={{fontWeight: 'bold', paddingTop: 10}}>Genre</p>
                             <p>{data.Genre}</p>
                        </div>
                        }
                        {data?.totalSeasons &&
                        <div>
                             <p style={{fontWeight: 'bold', paddingTop: 10}}>Total seasons</p>
                             <p>{data.totalSeasons}</p>
                        </div>
                        }
                        
                    </div>
                }
                <button className="close-series-details" onClick={detailClosed}>Close</button>
                
            </div>
        )
    
    
}

export default SeriesItem;