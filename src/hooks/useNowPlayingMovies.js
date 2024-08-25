import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);


    //Fetch data from TMDB api and update store
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', TMDB_API_OPTIONS)
        const json = await data.json();
        console.log(json, "nowPlayingMovies");
        dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(() => {

        !nowPlayingMovies && getNowPlayingMovies();
    }, [])

}
export default useNowPlayingMovies;