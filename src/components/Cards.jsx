import React from 'react'

export default function Cards() {
  return (
    <div className='max-w-[1640px] ms-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Cards */}
        <div className='rounded-xl relative '>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded px-4  '>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h w-full object-cover rounded-xl '
            src="src/Images/Card-burger-1.jpg" alt="" />
        </div>

         {/* Cards */}
         <div className='rounded-xl relative '>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded px-4  '>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h w-full object-cover rounded-xl '
            src="src/Images/Card-burger-1.jpg" alt="" />
        </div>

         {/* Cards */}
         <div className='rounded-xl relative '>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>We Deliver Sweets Too</p>
                <p className='px-2'>Tasty Treats</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded px-4 '>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h w-full object-cover rounded-xl '
            src="src/Images/Card-burger-1.jpg" alt=" " />
        </div>
         
    </div>
  )
}
