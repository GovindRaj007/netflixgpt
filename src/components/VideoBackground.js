import React, { useEffect, useState } from 'react'
import { TMDB_API_OPTIONS } from '../utils/constants';


const VideoBackground = ({ movie_id }) => {
    const [trailerId, setTrailerId] = useState(null);


    const getMovieVideo = async () => { //only for mainMovie trailer of homepage

        const response = await fetch("https://api.themoviedb.org/3/movie/" + movie_id + "/videos?language=en-US", TMDB_API_OPTIONS)
        const json = await response.json();
        // console.log(json, "movievideo");


        const filteredData = json?.results?.filter((video) => video.type === "Trailer");
        const trailer = filteredData && filteredData?.length ? filteredData[0] : json?.results[0];
        // console.log(trailer, "trailer");
        setTrailerId(trailer?.key);

    }
    useEffect(() => {
        getMovieVideo();
    }, [movie_id])

    return (
        <div className='w-screen pt-[17%] md:pt-0 '>
            <iframe
                className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/" + trailerId + "?&autoplay=1&mute=1&controls=0&loop=1&repeat=1"}
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" >

            </iframe>
        </div>
    )
}

export default VideoBackground;