import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Movie } from '@/types/movies';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : '/default_image.jpg';
  return (
    <div className='mb-4'>
      <Link href={`/movie/${movie.imdbID}`}>
        <div className='relative w-full pb-10 h-[350px]'>
          <Image 
            className='rounded-xl'
            src={posterUrl} 
            alt={movie.Title} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            objectFit='cover'
          />
        </div>
        <h2 className='text-xl font-bold hover:text-gray-300 p-1 pl-2'>{movie.Title}</h2>
      </Link>
      <p className='px-2'>{movie.Year} <span>{movie.Type}</span></p>
    </div>
  );
};

export default MovieCard;
