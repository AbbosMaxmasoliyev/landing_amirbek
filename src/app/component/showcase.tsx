import Image from 'next/image'
import React from 'react'

const Showcase = () => {
    return (
        <div id='home' className='flex xl:flex-col flex-col-reverse min-h-[85vh] overflow-hidden items-center justify-between relative'>
            <div className="flex flex-col xl:w-10/12 w-full p-4 xl:mb-5 xl:justify-end xl:h-[70vh] items-start  bg-black z-[3] xl:z-[unset]  xl:static   xl:bottom-[unset] bottom-0">
                <h1 className='xl:z-[1] z-[3] text-[40px]  xl:text-[150px] 2xl:text-[190px]  top-[17%]  text-center font-bold xl:absolute'>I&apos;M AMIRBEK</h1>
                <p className='z-[3] xl:w-[45%] max-w-[90%] '>I&apos;m a versatile and accomplished professional with expertise spanning multiple fields. As a producer, marketer, and developer, he has established a strong presence in various industries, demonstrating his ability to create, innovate, and lead.</p>
                <button className='py-3 px-5 bg-yellow-500 rounded-[50px] my-5 z-[3]'>Load More</button>
            </div>
            <Image alt='Amirbek' src={require("../images/amirbek1.png")} className='z-[2] absolute w-auto h-[950px]  xl:right-[10%] xl:bottom-0  xl:w-auto xl:top-[unset] xl:h-full' width={550} height={650} />
        </div>
    )
}

export default Showcase