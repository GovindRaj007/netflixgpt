import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movie_id }) => {

    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    useMovieTrailer(movie_id);
    return (
        <div className='w-screen pt-[17%] md:pt-0 '>
            <iframe
                className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&controls=0&loop=1&repeat=1"}
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" >

            </iframe>
        </div>
    )
}

export default VideoBackground;