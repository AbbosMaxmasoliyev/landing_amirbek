import React from 'react'
import { MdDesignServices } from "react-icons/md";

const About = () => {
    return (
        <div id='about' className='py-10 px-10 bg-white w-full text-black flex flex-col items-center'>
            <div className="flex flex-col w-11/12  xl:w-10/12 max-w-[1400px] items-center">
                <p className='text-[30px] text-center font-bold'>About Me</p>
                <p className='font-semibold text-[20px] text-center lg:w-[80%] my-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur tempora neque ipsa earum consequatur? Ipsa doloremque beatae praesentium aut quo numquam quod, odit eaque sequi esse! Suscipit distinctio totam vitae provident dolorum delectus deserunt at repudiandae exercitationem qui officia corrupti quibusdam eum, illum facilis quaerat.</p>

                <p className='text-[30px] text-center font-bold flex flex-row w-full items-center gap-4 my-7'>My Service <span className='block w-[250px] border-t border-gray-500' /></p>
                <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-between">
                    <div className="card flex flex-row gap-3 items-start w-full border p-3 rounded-2xl text-black hover:text-white hover:bg-black transition-all duration-150 cursor-pointer">
                        <MdDesignServices size={50} />
                        <div className="flex flex-col w-9/12 ">
                            <p className='text-xl font-bold'>Digital marketing</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illum soluta voluptas nihil libero.</p>
                        </div>
                    </div>
                    <div className="card flex flex-row gap-3 items-start w-full border p-3 rounded-2xl text-black hover:text-white hover:bg-black transition-all duration-150 cursor-pointer">
                        <MdDesignServices size={50} />
                        <div className="flex flex-col w-9/12 ">
                            <p className='text-xl font-bold'>Digital marketing</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illum soluta voluptas nihil libero.</p>
                        </div>
                    </div>
                    <div className="card flex flex-row gap-3 items-start w-full border p-3 rounded-2xl text-black hover:text-white hover:bg-black transition-all duration-150 cursor-pointer">
                        <MdDesignServices size={50} />
                        <div className="flex flex-col w-9/12 ">
                            <p className='text-xl font-bold'>Digital marketing</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illum soluta voluptas nihil libero.</p>
                        </div>
                    </div>
                    <div className="card flex flex-row gap-3 items-start w-full border p-3 rounded-2xl text-black hover:text-white hover:bg-black transition-all duration-150 cursor-pointer">
                        <MdDesignServices size={50} />
                        <div className="flex flex-col w-9/12 ">
                            <p className='text-xl font-bold'>Digital marketing</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illum soluta voluptas nihil libero.</p>
                        </div>
                    </div>
                    <div className="card flex flex-row gap-3 items-start w-full border p-3 rounded-2xl text-black hover:text-white hover:bg-black transition-all duration-150 cursor-pointer">
                        <MdDesignServices size={50} />
                        <div className="flex flex-col w-9/12 ">
                            <p className='text-xl font-bold'>Digital marketing</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illum soluta voluptas nihil libero.</p>
                        </div>
                    </div>
                    <div className="card flex flex-row gap-3 items-start w-full border p-3 rounded-2xl text-black hover:text-white hover:bg-black transition-all duration-150 cursor-pointer">
                        <MdDesignServices size={50} />
                        <div className="flex flex-col w-9/12 ">
                            <p className='text-xl font-bold'>Digital marketing</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illum soluta voluptas nihil libero.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About