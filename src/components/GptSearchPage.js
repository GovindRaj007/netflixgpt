import React from 'react'
import GptSearchBar from './GptSearchBar'
import { Background_Image } from '../utils/constants';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearchPage = () => {
    return (
        <div>
            <div className='fixed -z-10'>
                <img className='h-screen w-screen object-cover' src={Background_Image} alt='background-img' />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />

        </div>
    )
}

export default GptSearchPage;