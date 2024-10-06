import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {

    useEffect(()=>{
        gsap.utils.toArray('.p').forEach((bullet, index)=>{
        // gsap.to('',{

        // });
    });
    })
    

  return (
    <div className='h-[100vh] cont text-white [&>*]:bg-[#1e1e1e] [&>*]:p-8 relative'>
   
   
        <div className='section h-full flex absolute z-[5]'>
       
            <div className='flex flex-col justify-between fixed h-[90%]'>
                <h1 className='text-[20px] font-semibold'>Jackter</h1>
                <div className='flex flex-col items-center gap-2'><img src='./signature.svg' className='w-[40px]'/><div className='border-[1px] border-white w-[1px] h-[90px]'></div><img src='./sigmaIcon.svg'/></div>
                <div className='flex flex-col gap-5 [&>*]:w-[30px]'><img src='./youtubeIcon.svg'/><img src='./instaIcon.svg'/><img src='./xIcon.svg'/></div>
            </div>
                 

            <div className='flex flex-col justify-between items-center fixed h-[90%] right-[40px]'>
                <button><img src='./bars.svg'/></button>
                <div className='flex flex-col gap-3 [&>*]:bg-[#555555] panel'>
                    <div className='w-[10px] h-[10px] rounded-full p bullet-1'></div>
                    <div className='w-[10px] h-[10px] rounded-full p bullet-2'></div>
                    <div className='w-[10px] h-[10px] rounded-full p bullet-3'></div>
                </div>
                <div>
                    <h1>scroll down</h1>
                </div>
            </div>
        </div>


        <div className='section h-full relative overflow-y-hidden flex flex-col justify-center items-center'>
           <div className='absolute h-[100%] w-[50%] rounded-full bg-gradient-to-b from-[#f6ba37] via-[#edae00] to-[#ff3300] top-[-50%] blur-[50px]'></div>
           <h1 className='relative text-[36px] font-semibold'>So, what is a film to you</h1>
           <label className=''>Love, poetry, Art....</label>
        </div>


        <div className='section h-full flex justify-center gap-16 items-center'>
            <div>
                <label className='twxt-[14px]'>You what a film is near me</label>
                <h1 className='text-[36px] font-semibold w-[600px]'>The Way of sharing emotions visually</h1>
            </div>
            <div className='h-[250px] w-[250px] relative'>
                <div className='bg-gradient-to-b from-[#f6ba37] via-[#d76f00] to-[#ff3300] h-full w-full rounded-full blur-[20px]'></div>
                <div className='h-[90%] w-[90%] rounded-full bg-[#ffffff1c] absolute bottom-0 border border-[#ffffff2c]'></div>
            </div>
        </div>


        <div className='section h-full flex flex-row-reverse justify-center items-center'>
              <div className='h-[300px] w-[300px] bg-gradient-to-b from-[#f6ba37] via-[#d76f00] to-[#ff3300] rounded-t-full blur-[50px] rotate-[-45deg]'></div>
              <div>
                <p>Films could be the best thing happened to humanity</p>
                <h1 className='text-[36px] font-semibold w-[600px]'>There is no such thing as bad film each film has a story to tell</h1>
              </div>
        </div>

    </div>
  )
}
