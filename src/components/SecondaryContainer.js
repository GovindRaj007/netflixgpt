import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store?.movies);
    console.log(movies, "movies");
    return (
        movies && (
            <div className=' bg-black w-[100%]'>
                <div className='-mt-[12px] md:-mt-[340px] pl-0 md:pl-10 relative z-20'>
                    <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
                    <MovieList title={"Trending"} movies={movies?.topRatedMovies} />
                    <MovieList title={"Popular"} movies={movies?.popularMovies} />
                    <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
                </div>
            </div>
        )
    )
}

export default SecondaryContainer

/* structure of this container
    MovieList - Popular
        MovieCard * n
    MovieList - Now playing
    MovieList - Trending
    MovieList - Horror
*/ 