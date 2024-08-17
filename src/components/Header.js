import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);


    const handleSignOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });
    }

    useEffect(() => {
        //set up a authentication state listener(onAuthStateChanged) when the component mounts
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User object is present if the user is signed in //signed up
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse"); //after signing up/signing In it navigates to browse page
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/") //navigates to login page after sign out
            }
        });

        //useEffect returns a cleanup func that unsubscribes/to remove  the onauthStateChanged listener when component unmounts
        return () => unsubscribe();

    }, [])

    const handleGptSearchClick = () => {
        //Toggle Gpt search button
        dispatch(toggleGptSearchView());

    }
    const handleLanguageOption = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className='absolute flex justify-between w-[100%] px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10'>
            <img className='w-16 md:w-48 h-12 md:h-32  mt-2 md:-mt-2' src={LOGO} alt='logo' />
            {user && (<div className='flex '>
                {showGptSearch && (<select onChange={handleLanguageOption} className='h-10 w-[75px] md:w-[100px] p-2  my-3 md:my-4 mx-0 md:mx-4 bg-gray-700 text-white text-xs md:text-lg rounded opacity-90'>
                    {SUPPORTED_LANGUAGES.map(lang => (<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))
                    }                </select>)}
                {!showGptSearch && <button onClick={handleGptSearchClick} className='h-10 w-[93px] md:w-[142.25px] px-4 md:px-6 my-3 md:my-4 ml-1 mx-0 md:mx-4 rounded bg-red-700 text-white  text-xs md:text-lg font-semibold hover:opacity-80'>{showGptSearch ? "Home Page" : "Gpt-Search"}</button>}
                {showGptSearch && <button onClick={handleGptSearchClick} className='h-10 w-[75px] md:w-[142.25px] px-4 md:px-6 my-3 md:my-4 ml-1 mx-0 md:mx-4 rounded bg-red-700 text-white text-wrap text-xs md:text-lg font-semibold hover:opacity-80'>{showGptSearch ? "Home Page" : "Gpt-Search"}</button>}

                <img className="w-13 h-10  my-3 md:my-4 px-2 rounded-lg" src={user?.photoURL} alt='userIcon' />
                <button onClick={handleSignOut} className='h-10 w-[40px] md:w-auto px-2 md:px-4 my-3 md:my-4 rounded bg-white text-black text-xs md:text-lg text-wrap hover:opacity-80'>Sign Out</button>
            </div>)}
        </div>
    )
}
export default Header;