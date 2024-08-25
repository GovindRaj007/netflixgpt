import React, { useEffect, useState } from 'react'
import { CDN_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import { TMDB_API_OPTIONS } from '../utils/constants';

const MovieCard = ({ id, posterPath }) => {

    // console.log(posterPath, "posterPath");
    const [isHovered, setIsHovered] = useState(false);
    //to get youtube key
    const [trailerId, setTrailerId] = useState(null);




    const getMovieVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US", TMDB_API_OPTIONS);
        const json = await data.json();
        const filteredData = json?.results.filter(video => video.type === "Trailer");
        const trailer = filteredData[0];
        setTrailerId(trailer?.key);

    }
    useEffect(() => {
        getMovieVideo();
    }, [])

    if (!posterPath) return null;

    const handleMouseIn = () => {
        setIsHovered(true);
    }
    const handleMouseOut = () => {
        setIsHovered(false);
    }

    const imageStyle = {
        transform: isHovered ? 'scale(1.1)' : 'scale(1)', //enlarge on hover
        transition: 'transform 0.3s ease-in-out', //smooth transition effect

    }

    return (
        <div className='w-36 md:w-48 pr-4' onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
            <Link to={"https://www.youtube.com/watch?v=" + trailerId}>
                <img style={imageStyle} className='h-full object-cover rounded-lg' src={CDN_URL + posterPath} alt='movie-card' />
            </Link>
        </div>
    )
}

export default MovieCard;