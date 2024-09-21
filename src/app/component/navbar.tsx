"use client"
import { useState } from 'react';
import ActiveLink from './activeLink';
import { CiMenuBurger } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';

export default function Navigation() {
    const [active, setActive] = useState<boolean>(false)
    const [activeLink, setActiveLink] = useState("");

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About me', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];
    return (
        <nav className='flex justify-end w-10/12 gap-[20px] py-5'>
            <button className='block md:hidden relative' onClick={() => setActive(true)}><CiMenuBurger /></button>
            <div className={`hidden xl:flex gap-3`}>

                {
                    links.map((linkInfo, index) => <ActiveLink active={activeLink === linkInfo.href} link={linkInfo.href} name={linkInfo.name} setActive={setActiveLink} key={index} />)
                }
            </div>
            <div className={`fixed top-0  flex-col md:hidden z-10 ${active ? "flex" : "hidden"} transition-all duration-75 w-full h-full bg-gray-800 bg-opacity-35 right-0`}>
                <div className="flex flex-col w-[280px] h-full bg-black  relative ">
                    <button className='block absolute right-2 top-3' onClick={() => {
                        setActive(!active)
                        console.log("ishlayapti");

                    }}><IoClose /></button>
                    <div className="flex flex-col w-full h-full  pt-10 pl-5">

                        {
                            links.map((linkInfo, index) => <ActiveLink active={activeLink === linkInfo.href} link={linkInfo.href} name={linkInfo.name} setActive={setActiveLink} key={index} />)
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}
