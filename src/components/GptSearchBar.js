import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstants';
import { model } from '../utils/geminiAi';
import { TMDB_API_OPTIONS } from '../utils/constants';
import { addGptSearchResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector(state => state.config.language);
    const searchText = useRef(null);

    const searchMovie = async (movie) => {
        //search movie in tmdb
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', TMDB_API_OPTIONS);
        const json = await data.json();
        const result = json?.results;
        console.log(result, "searchedMovie");

        return result;

    }



    const handleGptSearchClick = async () => {
        //Make an api call to gpt api to get movie results

        const gptQuery = "Act as Movie Recommendation system and suggest some movies for the query:" + searchText.current.value + ". only give me names of 5 movies, comma separated like the example result given ahead. Example: gadar, Koi Mil Gaya, Trap, Don, The Goat Life";
        const result = await model.generateContent(gptQuery);
        const response = result.response;
        const text = response.text();
        // console.log(text, "gpt-response");

        const gptMovies = text.split(",");
        console.log(gptMovies, "gptmovies");


        //For each movie, search api
        const promiseArray = gptMovies.map(movie => searchMovie(movie));  //returns [promise,promise,promise,promise,promise] as searchMovie is still fetching promised data 

        const movieSearchResults = await Promise.all(promiseArray); //waits untill all the promises got resolved(gave promised data)
        console.log(movieSearchResults, "moviesearchresults");

        dispatch(addGptSearchResult({ movieNames: gptMovies, movieResults: movieSearchResults }));
    };

    return (
        <div className='flex justify-center pt-[22%] md:pt-[8%]'>
            <form className='w-4/5 md:w-1/2 h-[65px] md:h-[88px] bg-black grid grid-cols-12 rounded-lg opacity-80' onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText} type='text' className='p-2 md:p-4 m-2 md:m-4 h-12 md:h-auto col-span-9 rounded place placeholder:font-bold placeholder:text-xs md:placeholder:text-base placeholder-slate-700' placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className='col-span-3 m-2 md:m-4 py-2  md:px-4  font-semibold rounded bg-red-700 text-white hover:opacity-80 text-center' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar