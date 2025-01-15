import { searchItems } from '../types/common.types';

const baseUrl = 'https://www.omdbapi.com';

export const fetchItems = async (
  searchText: string,
  pageNo: number,
  type: string
): Promise<searchItems> => {
  try {
    const response = await fetch(
      `${baseUrl}/?&s=${searchText}&type=${type}&page=${pageNo}&apikey=38556ccb`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error(`Unknown error`);
  }
};

export const fetchItemInfo = async (id: string) => {
  try {
    const response = await fetch(`${baseUrl}/?&i=${id}&apikey=38556ccb`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error(`Unknown error`);
  }
};
