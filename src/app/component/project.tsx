import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiArrowToRight, BiLink } from 'react-icons/bi'
import { FaPersonWalkingDashedLineArrowRight, FaRightLeft, FaRightLong } from 'react-icons/fa6'
import { PiBracketsRoundLight } from 'react-icons/pi'
import { VscLinkExternal } from 'react-icons/vsc'

const Project = () => {
    const projects = [
        {
            image: require("../../assets/Screenshot_2.png"),
            title: "Palila.uz",
            information: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, ",
            categories: ["React Native", "Node Js"]
        },
        {
            image: require("../../assets/Screenshot_1.png"),
            title: "Assos.uz",
            information: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, ",
            categories: ["ReactJs", "Node Js", "MongoDB"]
        }
    ]
    return (
        <div id='projects' className="flex flex-col bg-white w-full items-center py-12">
            <div className='w-11/12  xl:w-10/12 max-w-[1400px] flex flex-col gap-3'>
                <p className='font-bold text-black text-4xl my-6'>Projects</p>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 justify-between ">
                    {
                        projects.map((project) => (
                            <div className="border text-black w-full  p-3 rounded-2xl">
                                <Image src={project.image} width={250} height={250} alt={project.title} className='w-full h-[382px] object-cover rounded-lg' />
                                <p className='my-3 text-xl font-bold' >{project.title}</p>
                                <p >{project.information}</p>
                                <div className="flex flex-wrap gap-2 my-5">
                                    {
                                        project.categories.map(category => <p className='border px-3 rounded-2xl text-[14px]'>{category}</p>)
                                    }
                                </div>
                                <Link href={`https://${project.title.toLowerCase()}`} target='_blank' className='flex gap-3 view my-3 items-center'>View Project <div className="arrow"><VscLinkExternal size={16} /></div></Link>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Project