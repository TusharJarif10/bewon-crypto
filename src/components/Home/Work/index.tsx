"use client"
import Image from 'next/image';
import { workdata } from '@/app/api/data';
import Aos from "aos";
import 'aos/dist/aos.css'
import React, { Component, useEffect } from "react";

const Work = () => {

    useEffect(() => {
        Aos.init();
      }, [] )

    const myStyle = {
        backgroundImage: "url(/images/Banner/mar.jpg)",
        
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

    };

    return (
        <section style={myStyle}>
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 md:mt-10 relative'>
                <div className="bg-banner-image hidden lg:block absolute w-full h-full top-1/2 -right-1/4 blur-390"></div>
                <div className='text-center mb-14'>
                    <h3 data-aos="flip-down" data-aos-duration={1500} className='text-white text-3xl md:text-5xl font-bold mb-3'>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-500">
                        How it work</span>
                        </h3>
                    <p className='text-white md:text-lg font-normal leading-8 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry standard dummy text ever.</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>
                    {workdata.map((items, i) => (
                        <div className='bg-darkmode border border-darkmode group hover:border-primary hover:scale-105 duration-300 p-8 relative rounded-2xl' key={i}>
                            <div className='rounded-full flex justify-center absolute -top-10 left-40% p-6 bg-gradient-to-r from-primary to-secondary'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/icons/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-2xl text-white font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-white text-center mt-2 overflow-hidden line-clamp-3 group-hover:h-auto group-hover:line-clamp-none transition-all duration-300'>
                                {items.subheading}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;