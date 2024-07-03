import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4'>
    <div className='flex flex-col gap-3'>
        <p>BEGIN YOUR</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md: text-6xl lg:text-7xl'>Fit<span className='text-blue-400'>Quest</span></h1>
        </div>
        <p className='text-sm md:text-base font-light'>Transform your life with FitQuest, your ultimate fitness companion. Whether you're a beginner or a seasoned athlete, our 
        <span className='text-blue-400'>personalized workout plans</span>, <span className='text-blue-400'>real-time tracking</span>, and <span className='text-blue-400'>motivational community</span> will help you reach your goals. Join us today and take the first step towards a healthier, stronger, and more confident you!</p>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-blue-400 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none">
        <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl'>Ready & Go!</span>
        </button>
    </div>
  )
}

export default Hero