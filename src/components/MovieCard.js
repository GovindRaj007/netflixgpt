import React from 'react'
import { CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    // console.log(posterPath, "posterPath");
    return (
        <div className='w-36 md:w-48  pr-4'>
            <img className='h-[192px]' src={CDN_URL + posterPath} alt='movie-card' />
        </div>
    )
}

export default MovieCard