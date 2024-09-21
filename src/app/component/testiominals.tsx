"use client"
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import 'tailwindcss/tailwind.css';
import { BiSolidStar, } from 'react-icons/bi';
import Image from 'next/image';

const EmblaCarousel: React.FC = () => {
    // Bir vaqtning o'zida ko'rinadigan slaydlar uchun containerni sozlash
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, slidesToScroll: 1, containScroll: 'trimSnaps' },
        [Autoplay({ delay: 1000 })] // Autoplay bilan sozlash
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        console.log(selectedIndex);

    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
    }, [emblaApi, onSelect]);
    const infromation = [
        {
            description: "Yaxshi dastur. Men hozir uni har kuni ishlataman. Hayz ko'rishni kuzatish kunlarim va haftalarim haqida o'ylashga yordam beradi. Ushbu ilovasiz men uchun oson bo'lmaydi.",
            name: "Yulduz."
        }, {
            description: "Yaxshi dastur. Men hozir uni har kuni ishlataman. Hayz ko'rishni kuzatish kunlarim va haftalarim haqida o'ylashga yordam beradi. Ushbu ilovasiz men uchun oson bo'lmaydi.",
            name: "Yulduz."
        }, {
            description: "Yaxshi dastur. Men hozir uni har kuni ishlataman. Hayz ko'rishni kuzatish kunlarim va haftalarim haqida o'ylashga yordam beradi. Ushbu ilovasiz men uchun oson bo'lmaydi.",
            name: "Yulduz."
        }, {
            description: "Yaxshi dastur. Men hozir uni har kuni ishlataman. Hayz ko'rishni kuzatish kunlarim va haftalarim haqida o'ylashga yordam beradi. Ushbu ilovasiz men uchun oson bo'lmaydi.",
            name: "Yulduz."
        }, {
            description: "Yaxshi dastur. Men hozir uni har kuni ishlataman. Hayz ko'rishni kuzatish kunlarim va haftalarim haqida o'ylashga yordam beradi. Ushbu ilovasiz men uchun oson bo'lmaydi.",
            name: "Yulduz."
        }, {
            description: "Yaxshi dastur. Men hozir uni har kuni ishlataman. Hayz ko'rishni kuzatish kunlarim va haftalarim haqida o'ylashga yordam beradi. Ushbu ilovasiz men uchun oson bo'lmaydi.",
            name: "Yulduz."
        }, {
            description: "Yaxshi dastur. Men hozir uni har kuni ishlataman. Hayz ko'rishni kuzatish kunlarim va haftalarim haqida o'ylashga yordam beradi. Ushbu ilovasiz men uchun oson bo'lmaydi.",
            name: "Yulduz."
        }
    ]
    return (
        <div className="embla overflow-hidden bg-white text-black py-12 w-full" ref={emblaRef}>
            <div className="embla__container flex ">
                {infromation.map((info, index) => (
                    <div className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] flex-col flex gap-3 p-3 border mr-12 rounded-xl" key={index}>
                        <Image src={require("../images/amirbek.png")} className='size-12 rounded-full border object-cover' width={50} height={50} alt={info.name} />
                        <p className='font-light'>{info.description}</p>
                        <div className="flex flex-row items-center justify-between">
                            <p className='font-bold'>{info.name}</p>
                            <div className='flex'>
                                {
                                    Array.from({ length: 5 }).map((title, inx) => (
                                        <BiSolidStar color='#FCD353' key={inx}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            {/* <div className="flex justify-center mt-4 space-x-2">
                {infromation.map((info, index) => (
                    <button
                        key={index}
                        className={`w-4 h-4 rounded-full ${selectedIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                        onClick={() => emblaApi?.scrollTo(index)}
                    />
                ))}
            </div> */}
        </div>
    );
};

export default EmblaCarousel;
