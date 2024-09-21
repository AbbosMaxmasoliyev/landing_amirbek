"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx'; // optional class name handler (for conditionally applying classes)
import ActiveLink from './activeLink';
import { CiBurger, CiMenuBurger } from 'react-icons/ci';
import { GiHamburger } from 'react-icons/gi';
import { IoClose, IoExit } from 'react-icons/io5';

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
            <button className='block md:hidden ' onClick={() => setActive(!active)}><CiMenuBurger /></button>
            <div className={`hidden xl:flex gap-3`}>

                {
                    links.map(linkInfo => <ActiveLink active={activeLink === linkInfo.href} link={linkInfo.href} name={linkInfo.name} setActive={setActiveLink} />)
                }
            </div>
            <div className={` fixed top-0  flex flex-col md:hidden z-10 left-[${active ? "0" : "-100%"}] transition-all duration-75 w-full h-full bg-gray-800 bg-opacity-35`}>
                <div className="flex flex-col w-[280px] h-full bg-black  relative ">
                    <button className='block absolute right-2 top-3' onClick={() => setActive(!active)}><IoClose /></button>
                    <div className="flex flex-col w-full h-full  pt-10 pl-5">

                        {
                            links.map(linkInfo => <ActiveLink active={activeLink === linkInfo.href} link={linkInfo.href} name={linkInfo.name} setActive={setActiveLink} />)
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}
