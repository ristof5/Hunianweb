import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

{/* tampilan dibawah navbar */}
const hero = () => {
  return (
    <div className='relative h-screen text-white overflow-hidden'>
        <div className="absolute inset-0">
            <Image src='/hero.jpg' alt='hero' fill className='object-cover object-center w-full h-full'/>
            <div className='absolute inset-0 bg-black opacity-70'></div>
        </div>
        <div className='relative flex flex-col justify-center items-center h-full'>
            <h1 className='text-7xl font-extrabold leading-tight mb-3 capitalize'>Book your <span className='text-orange-500'>Villa</span> or  
            <span className='text-orange-500'> Room</span>
            </h1>
            <p className='text-xl text-grey-300 mb-8'>Get Special Offer For You</p>
            <div className="flex gap-5 ">
                <Link href='/room' className='bg-orange-400 text-white hover:bg-orange-500
                py-2 px-6 md:px-10 text-lg font-semibold hover:scale-105 hover:shadown-lg'>
                    Book Now
                </Link>
                <Link href='/contact' className='bg-transparent border border-orange-400 text-white hover:bg-orange-500
                py-2 px-6 md:px-10 text-lg font-semibold hover:scale-105 hover:shadown-lg'>
                    Contact Us
                </Link>
            </div>
        </div>
    </div>
  )
}

export default hero