import React from 'react'
import GptSearchBar from './GptSearchBar'
import { Background_Image } from '../utils/constants';
import GptMovieSuggestions from './GptMovieSuggestions';
import Footer from './Footer';
import { useSelector } from 'react-redux';

const GptSearchPage = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);

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