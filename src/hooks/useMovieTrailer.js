import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";


const useMovieTrailer = (movie_id) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    //fetching trailer video and updating the store with trailer video data
    const getMovieVideos = async () => {

        const response = await fetch("https://api.themoviedb.org/3/movie/" + movie_id + "/videos?language=en-US", TMDB_API_OPTIONS)
        const json = await response.json();
        console.log(json, "movievideos");


        const filteredData = json?.results?.filter((video) => video.type === "Trailer");
        const trailer = filteredData && filteredData?.length ? filteredData[0] : json?.results[0];
        console.log(trailer, "trailer");

        dispatch(addTrailerVideo(trailer));

    }
    useEffect(() => {
        !trailerVideo && getMovieVideos();
    }, [])
}
export default useMovieTrailer;