import React, {useState, useEffect} from 'react'
import {movieSearch, movieInfo} from './../../types/movie.types'
import { fetchItemInfo} from '../../services/apiServices'
import './MovieItem.css'

const MovieItem: React.FC<{movie: movieSearch}>= ({movie}) => {
    const [itemClicked, setItemClicked] = useState(false)

    const handleDetailClose = () => {
        setItemClicked(false)
    }
    return (<>
    
        <div className="movie-item-container" onClick={() => setItemClicked(true)}>
            <div className="movie-img-container">
                {movie.Poster != "N/A" && <img src={movie.Poster}/>}
                {movie.Poster == "N/A" && <div>No Image</div>}

            </div>
            <div className="movie-info-container">
                <p className="movie-title">{movie.Title}</p>
            </div>
        </div>
        {itemClicked && <MovieDetails movie={movie} detailClosed={handleDetailClose}/>}
        </>)
}

const MovieDetails: React.FC<{movie:movieSearch, detailClosed: ()=> void}> = ({movie, detailClosed}) => {
    const [data, setData] = useState<movieInfo | null>(null)
    const [loading,setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)
        
        const getMovieInfo = async () => {
            try {
              const seriesData = await fetchItemInfo(movie.imdbID); 
              setData(seriesData);
            } catch (error: any) {
              console.log(error)
            } finally {
              setLoading(false);
            }
          };
        
        getMovieInfo();


        
        

        
    }, []); // Empty dependency array ensures it runs once after the component mounts

        return (
            <div className="movie-details-container">
                {loading && <div className="movie-details" style={{textAlign: 'center'}}><p>Loading</p></div>}
                
                {!loading && 
                    <div className="movie-details">
                        {data?.Plot &&
                        <div>
                            <p className='movie-title-txt'>{data.Title} - {data.Year} </p>
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
                        {data?.Runtime &&
                        <div>
                             <p style={{fontWeight: 'bold', paddingTop: 10}}>Play time</p>
                             <p>{data.Runtime}</p>
                        </div>
                        }
                        
                    </div>
                }
                <button className="close-movie-details" onClick={detailClosed}>Close</button>
                
            </div>
        )
    
    
}

export default MovieItem;