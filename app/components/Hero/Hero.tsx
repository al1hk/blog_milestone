import React from 'react'
import Image from 'next/image'

function Hero() {
    return (
        <div id='hero' className='h-[80vh] xl:h-screen relative'>
            <div className='bg-hero_overlay absolute w-full h-full z-10 bg-opacity-50'></div>

            <main>
                <div>
                    <Image
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                        src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2022/01/header-hero.jpg"
                        alt="Nature background"
                        layout="fill" // Ensures the image covers the container
                        objectFit="cover" // Ensures the image is responsive and covers the area without distortion
                    />
                </div>
            </main>
            <div className="container mx-auto h-full flex flex-col items-center justify-center z-20 relative font-body">
                <div className='text-white text-center'>
                    <h1 className='text-6xl font-bold text-white'>we all love</h1>
                    <p className='text-9xl mb-8 font-bold text-white'>n a t u r e</p>
                    <p className='text-4xl mb-8 font-bold text-white'> Look deep into nature, and you will
                    understand everything better.</p>
                    <a href="#blog" className='bg-amber-300 text-black px-6 py-2 rounded-md hover:bg-amber-600 transition duration-300 shadow-lg text-2xl'>Explore</a>
                </div>
            </div>
        </div>
    )
}

export default Hero
