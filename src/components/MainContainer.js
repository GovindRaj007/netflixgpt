import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    // console.log(movies, "moviesfromStore");
    if (!movies) return;

    const mainMovie = movies[9];
    // console.log(mainMovie, "mainmovie")

    const { original_title, overview, id } = mainMovie;

    return (
        <div className='bg-black'>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movie_id={id} />
        </div>
    )
}

export default MainContainer