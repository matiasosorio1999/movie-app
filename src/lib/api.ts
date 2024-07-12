import { Movie, MovieDetails } from "@/types/movies";

const API_URL = 'http://www.omdbapi.com/';

export const fetchMovies = async (searchTerm: string, year?: string): Promise<Movie[]> => {
  try {
    const response = await fetch(`${API_URL}?s=${searchTerm}&y=${year}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`);
    if (!response.ok) {
      throw new Error('Error fetching movies');
    }
    const data = await response.json();
    return data.Search || [];
  } catch (error) {
    console.log('Error fetching movies', error);
    throw error;
  }
};

export const fetchMovieDetails = async (id: string): Promise<MovieDetails> => {
  try {
    const response = await fetch(`${API_URL}?i=${id}&plot=full&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`);
    if (!response.ok) {
      throw new Error('Error fetching movie details');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching movie details', error);
    throw error;
  }
};
