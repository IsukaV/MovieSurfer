import {movieSearch, movieData} from './../types/movie.types'
import { seriesData } from '../types/series.types';

export const fetchMovies = async (searchText: string, pageNo: number): Promise<movieData> => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?&s=${searchText}&type=movie&page=${pageNo}&apikey=38556ccb`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); 
        return data;
    } catch (error: any) {
        throw new Error(`Fetching movies failed: ${error.message}`); 
    }
};

export const fetchSeries = async (searchText: string, pageNo: number): Promise<seriesData> => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?&s=${searchText}&type=series&page=${pageNo}&apikey=38556ccb`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); 
        return data
    } catch (error: any) {
        throw new Error(`Fetching series failed: ${error.message}`); 
    }


};

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