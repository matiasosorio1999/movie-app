import Image from 'next/image';
import { fetchMovieDetails } from '@/lib/api';
import StarIcon from '@/components/Icons/StarIcon';
import TimerIcon from '@/components/Icons/TimerIcon';
import PeopleList from '@/components/PeopleList';

interface MovieDetailsProps {
  params: {
    id: string;
  };
}

const MovieDetails = async ({ params }: MovieDetailsProps) => {
  try {
    const movie = await fetchMovieDetails(params.id);
    const posterUrl = movie.Poster !== "N/A" ? movie.Poster : "/default_image.jpg";
    const genres = movie.Genre !== "N/A" ? movie.Genre.split(',').map((genre: string) => genre.trim()) : [];

    return (
      <div className="mx-auto md:p-4 flex-col items-center md:items-start justify-around flex md:flex-row md:pt-12">
        <div className='relative w-full sm:w-11/12 md:w-1/2 xl:w-3/12 pb-10 h-[50vh] sm:h-[50vh] lg:h-[50vh]'>
          <Image className='sm:rounded-xl' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={posterUrl} alt={movie.Title} layout='fill' objectFit='cover' />
        </div>
        <div className='md:ml-9 pt-2 w-11/12 md:w-2/3'>
          <h1 className="text-3xl mt-2 md:mt-0 sm:text-5xl font-bold">{movie.Title}</h1>
          <div className='flex-wrap my-4 md:my-8 xl:flex justify-between'>
            <div className='xl:w-7/12'>
              <div>
                {genres.map((genre: string) => {
                  return <span key={genre} className='text-sm py-1 px-3 sm:py-2 sm:px-6 bg-slate-700 rounded-3xl mr-2'>{genre}</span>
                })}
              </div>
              <div className='flex my-4 gap-5'>
                <span className='flex gap-1'><StarIcon />{movie.imdbRating}</span>
                <span className='flex gap-1 items-center'><TimerIcon />{movie.Runtime}</span>
              </div>
              <p>{movie.Plot}</p>
            </div>
            <div className='mt-6 md:w-1/2 xl:mt-0 xl:w-1/3 xl:ml-4'>
              <PeopleList title={'Director'}>{movie.Director}</PeopleList>
              <PeopleList title={'Writer'}>{movie.Writer}</PeopleList>
              <PeopleList title={'Actors'}>{movie.Actors}</PeopleList>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Failed to fetch movie details:', error);
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Error</h1>
        <p className="text-red-500">Failed to fetch movie details. Please try again later.</p>
      </div>
    );
  }
};

export default MovieDetails;
