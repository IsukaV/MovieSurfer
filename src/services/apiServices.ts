import {movieSearch, movieData} from './../types/movie.types'
import { searchItem, searchItems } from '../types/common.types';
import { seriesData } from '../types/series.types';

export const fetchItems = async (searchText: string, pageNo: number, type: string): Promise<searchItems> => {
    try{
        const response = await fetch( `https://www.omdbapi.com/?&s=${searchText}&type=${type}&page=${pageNo}&apikey=38556ccb`)
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        return data
    }catch(error: unknown){
        if(error instanceof Error){
            console.log(error.message)
        }
    }
}

export const fetchMovieInfo = async (id: string) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?&i=${id}&apikey=38556ccb`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data
    } catch (error: any) {
        throw new Error(`Fetching series failed: ${error.message}`); 
    }
};

export const fetchSeriesInfo = async (id: string) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?&i=${id}&apikey=38556ccb`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); 
        return data
    } catch (error: any) {
        throw new Error(`Fetching series failed: ${error.message}`); 
    }
};