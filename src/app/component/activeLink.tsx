import Link from 'next/link'
import React from 'react'

const ActiveLink = ({ setActive, active, link, name }: { setActive: (activeLink: string) => void, active: boolean, link: string, name: string }) => {
    return (
        <Link href={link} className={`text-xl  ${active ? "font-bold" : "font-medium"} font-montserrat`} legacyBehavior={true} onClick={() => setActive(link)} scroll={true}>
            {name}
        </Link>
    )
}

export default ActiveLink