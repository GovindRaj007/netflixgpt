import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { Background_Image, USER_AVATAR } from '../utils/constants';



const Login = () => {

    const [isSignInForm, setisSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);  //useRef declares a object(email) with initial value as null and this object is passed as the ref attribute to the jsx of dom node we want to manipulate(here <input>)
    const password = useRef(null);

    const handleclick = () => {
        //validate the form data

        // console.log(email.current.value);
        // console.log(password.current.value);

        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            //sign up logic

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user; //stored in UserImpl-handles signed-in user's session
                    // console.log(user); 

                    updateProfile(user, {
                        displayName: name.current.value, photoURL: USER_AVATAR
                    }).then(() => {
                        // Profile updated! -> to authImpl-manages entire authentication process
                        // console.log(auth, "after updating");
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });

        }
        else {
            //sign In logic

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });

        }
    };

    const toggleForm = () => setisSignInForm(!isSignInForm);

    return (

        <div>
            <Header />
            <div className='absolute'>
                <img className='h-screen w-screen object-cover' src={Background_Image} alt='background-img' />
            </div>
            <form onSubmit={e => e.preventDefault()} className='absolute w-11/12 md:w-3/12 p-10 md:p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80'>
                <h1 className='font-bold text-3xl py-4 mb-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-2 bg-gray-700 w-full rounded' />}
                <input ref={email} type='text' placeholder='Email Address' className='p-4 my-2 bg-gray-700 w-full rounded' />
                <input ref={password} type='password' placeholder='Password' className='p-4 my-2 bg-gray-700 w-full rounded' />
                <p className='p-2 text-red-500 font-bold text-lg'>{errorMessage}</p>
                <button className='h-12 font-bold px-4 my-2 bg-red-700 w-full  rounded' onClick={handleclick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleForm}>{isSignInForm ? "New User ? Sign Up Now." : "Registered User ? Sign In."}</p>

            </form>
        </div>

    )
}
export default Login;
