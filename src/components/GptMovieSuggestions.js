import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
    const { movieNames, movieResults } = useSelector(store => store?.gpt);
    if (!movieNames) return null;


    return (
        <div className='p-4 m-6 bg-black text-white opacity-90 rounded-lg border  bg-gradient-to-t from-gray-500  border-solid border-white '>
            <div >
                {movieNames.map((movie, index) => <MovieList key={movie} title={movie} movies={movieResults[index]} />)
                }
            </div>
        </div>
    )
}

export default GptMovieSuggestions;