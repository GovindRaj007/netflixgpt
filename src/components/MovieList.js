
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {

    return (
        <div className='px-4'>
            <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll scrollbar-hide'>
                <div className='flex'>
                    {movies?.map(movie => <MovieCard key={movie.id} id={movie?.id} posterPath={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList;