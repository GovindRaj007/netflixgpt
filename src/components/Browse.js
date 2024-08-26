import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearchPage';
import { useSelector } from 'react-redux';
import Footer from './Footer';


const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        <>
            <Header />
            {showGptSearch ? (<GptSearch />) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />

                </>)
            }
            {!showGptSearch && <Footer />}


        </>
    )
}
export default Browse;

/*  structure of this container
            MainContainer
                - VideoBackground
                - VideoTitle
            SecondaryContainer
                - MovieList * n
                    -cards * n
            Footer        
             
             */

