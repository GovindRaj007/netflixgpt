import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen h-screen aspect-video absolute  pt-[27%] md:pt-[15%] px-6 md:px-16 bg-gradient-to-r from-black'>
            <h1 className='w-2/4 md:w-auto font-bold text-lg md:text-4xl text-white'>{title}</h1>
            <div className='hidden md:inline-block h-[190px] line-clamp-4 pt-4 text-lg w-1/4 text-white '>
                <p >{overview}</p>
            </div>
            <div className='pt-4'>
                <button className='bg-white text-black p-2 px-4 md:px-8 text-xl rounded-lg hover:opacity-80'> Play</button>
                <button className='hidden md:inline-block mx-2 bg-white text-black p-2 px-8 text-xl  rounded-lg hover:opacity-80'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle