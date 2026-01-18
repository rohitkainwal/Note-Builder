import React from 'react'
import Features from './Features'

const FeatureSection = () => {
  return (
    <div className='relative max-w-4xl mx-auto py-16 px-4 z-10'>
        <div className='text-center mb-12'>
 <p className='mb-2  text-gray-500 dark:text-white'>Features</p>
        <h2 className="text-balance text-2xl dark:text-white sm:text-4xl font-medium mb-12">Your thoughts. Your flow. Perfectly in sync.</h2>
        <Features/>
        </div>
       
    </div>
  )
}

export default FeatureSection