'use client';
import { useCallback, useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import { fetchMovies } from '../lib/api';
import { Movie } from '@/types/movies';


const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = useCallback(async (searchTerm: string, year: string) => {
    try {
      setError(null);
      const movies = await fetchMovies(searchTerm, year);
      setMovies(movies);
    } catch (err) {
      setError('Failed to fetch movies. Please try again later.');
    }
  }, []);

  return (
    <>
      <header className="flex flex-col items-center pt-6 sm:p-0">
        <h1 className="text-4xl font-bold">Movie Search</h1>
        <SearchBar onSearch={handleSearch}/>
      </header>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 py-8 mx-2">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Home;
