import React from 'react'

export const Header = () => {
  return (
    <div className='container flex flex-col items-center w-full gap-5 px-3 py-4 m-auto text-center sm:text-left sm:items-start sm:px-0 sm:py-10 sm:mt-32 sm:w-1/2'>
        <h1 className='text-5xl font-bold dark:text-gray-300'>Unsaid Thoughts, Finally Heard.</h1>
        <p className='text-xl font-medium dark:text-gray-300'>How does that sound? It captures the essence of an anonymous platform for sharing what often goes unspoken.</p>
        <button className='px-4 py-4 text-xl bg-transparent border border-black rounded-lg hover:bg-gray-300 hover:text-black dark:border-gray-200 dark:text-gray-300 w-fit'>Write Now !</button>
    </div>
  )
}
