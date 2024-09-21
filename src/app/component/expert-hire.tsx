import Link from 'next/link'
import React from 'react'

const ExpertHire = () => {
    return (
        <div className='flex flex-col justify-end  h-auto pt-5 w-full items-center bg-[#262626]'>
            <div className="flex flex-row justify-center  w-12/12 xl:w-10/12 ">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center  p-4 rounded-t-3xl bg-[#000] xl:gap-7 gap-2">
                    <div className="card  gap-3 flex flex-col w-full p-4">
                        <h3 className='font-bold text-xl xl:text-3xl '>Want An Expert</h3>
                        <p>Unclock Success with Expert Guidance</p>
                        <Link href={"#about"} className='text-yellow-400'>Hire me</Link>
                    </div>
                    <div className="card  gap-3 flex flex-col w-full p-4">
                        <h3 className='font-bold text-xl xl:text-3xl '>Unlimited Revisions</h3>
                        <p>Unclock Success with Expert Guidance</p>
                        <Link href={"#about"} className='text-yellow-400'>Hire me</Link>
                    </div>
                    <div className="card  gap-3 flex flex-col w-full p-4">
                        <h3 className='font-bold text-xl xl:text-3xl '>Let's discusss</h3>
                        <p>Unclock Success with Expert Guidance</p>
                        <Link href={"#about"} className='text-yellow-400'>Hire me</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpertHire