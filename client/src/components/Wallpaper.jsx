import React from 'react'
import { Button } from 'flowbite-react';


const Wallpaper = () => {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
    <div className="flex-1 justify-center flex flex-col">
        <h2 className='text-2xl'>
            Download High Qualiti Wallpaper Like 4k,8k and more...
        </h2>
        <p className='text-gray-500 my-2'>
            Checkout 100M+ Wallpaper...
        </p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
            <a href="https://nayan-home-page-dev.netlify.app/" target='_blank' rel='noopener noreferrer'>
               Go to Wallpaper...
            </a>
        </Button>
    </div>
    <div className="p-7 flex-1">
        <img src="https://images.unsplash.com/photo-1469285994282-454ceb49e63c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDA5MzR8MHwxfHNlYXJjaHwxMHx8Y2FyfGVufDB8fHx8MTcyMzYzNjk0N3ww&ixlib=rb-4.0.3&q=85" />
    </div>
</div>
  )
}

export default Wallpaper
