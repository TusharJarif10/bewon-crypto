"use client"
import Image from "next/image";
import { Featuresdata } from "@/app/api/data";
import Aos from "aos";
import 'aos/dist/aos.css'
import React, { Component, useEffect } from "react";

const Features = () => {

    useEffect(() => {
            Aos.init();
          }, [] )

  const myStyle = {
    backgroundImage: "url(/images/Banner/bitcoin1.jpg)",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section style={myStyle}>
      <div
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative"
        id="features-section"
      >
        <div className="bg-gradient-to-r from-primary to-secondary hidden lg:block absolute w-full h-full top-0 -left-1/4 blur-390"></div>
        <div className=" flex flex-col items-center justify-center">
          {/* Column-1 */}
          <div className="px-2">
            <h3
              
              className="text-center text-4xl md:text-5xl font-bold mb-10"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-500">
                Features
              </span>
            </h3>
            <h2 className="text-white/60 text-xl lg:text-3xl font-semibold leading-snug mb-4 text-center ">
              The most trusted cryptocurrency platform
            </h2>
            <p className="md:text-md text-justify font-normal text-white/60 leading-6 md:mb-10 mb:6 md:px-10">
            Binance, Coinbase, and Kraken are top cryptocurrency platforms known for secure trading and strong regulatory compliance. They offer advanced security, high liquidity, and user-friendly interfaces for efficient transactions.
            </p>
          </div>
          {/* Column-2 */}
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 mt-5">
              {Featuresdata.map((items, i) => (
                <div
                  className="bg-darkmode py-10 pr-12 pl-6 rounded-lg"
                  key={i}
                >
                  <div className="rounded-full bg-gradient-to-r from-primary to-secondary w-fit p-2 flex items-center justify-center mb-10">
                    <Image
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      width={24}
                      height={30}
                    />
                  </div>
                  <h5 className="text-white text-lg font-medium mb-4">
                    {items.heading}
                  </h5>
                  <p className="text-white text-sm font-normal">
                    {items.subheading}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
