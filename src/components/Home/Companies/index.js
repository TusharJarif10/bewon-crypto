"use client";
import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Companiesdata } from "@/app/api/data";
import Marquee from "react-fast-marquee";
import Aos from "aos";
import 'aos/dist/aos.css'
import Image from "next/image";

// CAROUSEL SETTINGS
const Companies = () => {

  useEffect(() => {
    Aos.init();
  }, [] )

  

  return (
    <section >

      <h3 className="text-white/80 text-3xl md:text-5xl font-bold text-center  md:mb-14 mb-8">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-500">Our Partners</span> 
      </h3>

      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md max-w-screen-sm md:px-4 px-1">
        <div>
         
          <Marquee pauseOnClick={true}>
            {Companiesdata.map((item, i) => (
              <div key={i}>
                <img
                  src={item.imgSrc}
                  alt={item.imgSrc}
                  className="md:w-56 w-32"
                />
              </div>
            ))}
          </Marquee>
          <Marquee direction="right" pauseOnClick={true}>
            {Companiesdata.map((item, i) => (
              <div key={i}>
                <img
                  src={item.imgSrc}
                  alt={item.imgSrc}
                  className="md:w-56 w-32"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>


    </section>
  );
};

export default Companies;
