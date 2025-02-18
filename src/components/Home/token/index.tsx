"use client";
import React from "react";
const TokenDescription = () => {
  // const images = [
  //   { url: "/images/Banner/alo1.jpg" },
  //   { url: "/images/Banner/alo2.jpg" },
  //   { url: "/images/Banner/alo3.jpg" },
  // ];

  return (
    <div className="">
      <div className="w-full lg:h-screen h-full m-auto flex items-center justify-cetner pb-5 bg-gradient-to-b from-indigo-800 to-gray-700 ">
        <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
          <h3 className="text-center text-3xl md:text-5xl font-bold mb-10 mt-10">
            <span className="text-transparent  bg-clip-text bg-gradient-to-r from-teal-400 to-amber-500">
              Learn more about BON Token
            </span>
          </h3>

          <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
            <div className="relative">
              {/* <img className="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src="https://images.unsplash.com/photo-1496483648148-47c686dc86a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxmbG93ZXJ8ZW58MHwwfHx8MTcyMDk0OTQ2MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Side Image" />

                <img className="absolute z-20 lg:top-[12rem] sm:top-[11rem] top-[5rem] sm:-left-[3rem] -left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src="https://images.unsplash.com/photo-1558281033-19cead6981dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Zmxvd2VyfGVufDB8MHx8fDE3MjA5NDk0NjB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Side Image 2" />

                <img className="absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[10.5rem] left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmbG93ZXJ8ZW58MHwwfHx8MTcyMDk0OTQ2MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Side Image 3" /> */}

              <img
                className=" relative object-fill right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem]  "
                src="/images/Banner/v2.png"
                alt="About us"
              />
            </div>
            <div className="lg:w-[60%] p-4 w-full h-full flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
              <p className="break-all md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 text-white/60 leading-6">
                BON Token is a Binance Smart Chain (BSC)-based cryptocurrency
                designed for AI-driven trading. It leverages advanced AI
                algorithms to analyze market trends and execute profitable
                trades automatically. With fast, low-cost transactions, BON
                ensures secure, transparent, and efficient trading.
              </p>

              {/* <button className="lg:mt-10 mt-6 lg:px-6 px-4 lg:py-4 py-2 bg-green-600 rounded-sm lg:text-xl text-lg text-white font-semibold">Read More</button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 pb-4 md:px-10 bg-gradient-to-b from-gray-700 to-indigo-800 flex md:flex-row flex-col items-center justify-center gap-4">
        <img src="/images/Banner/alo1.jpg" alt="" height={500} width={400}/>
        <img src="/images/Banner/alo2.jpg" alt="" height={500} width={400}/>
        <img src="/images/Banner/alo3.jpg" alt="" height={500} width={400}/>
      </div>
    </div>
  );
};

export default TokenDescription;
