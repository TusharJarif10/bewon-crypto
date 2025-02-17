"use client";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Companiesdata } from "@/app/api/data";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import axios from "axios";

// CAROUSEL SETTINGS
const Companies = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCryptoData();
  }, []);

  const fetchCryptoData = async () => {
    try {
      const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 10,
          page: 1,
          sparkline: false,
        },
      });

      setCoins(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <section >

      <h3 className="text-white/80 text-3xl md:text-5xl font-bold text-center  md:mb-14 mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-500">Crypto prices</span>
      </h3>

      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md max-w-screen-sm md:px-4 px-1">
        <div className=" flex flex-col gap-1">

          <Marquee pauseOnClick={true}>
          {coins.map((coin, index) => (
              <div className="flex items-center justify-center gap-1" key={coin.id}>
                <img className="rounded-full"
                  src={coin.image}
                  alt={coin.name}
                  height={30}
                  width={30}
                />
                <h3 className="uppercase">
                  {coin.symbol}
                </h3>
                <div className="text-white/60">
                <span className="text-blue-400">$</span>{coin.current_price}
                </div>
                <div className="px-4 py-6 text-center " style={{ color: coin.price_change_percentage_24h >= 0 ? "green" : "red" }}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </div>
                <div className="px-8">

                </div>
              </div>
            ))}
          </Marquee>
          <Marquee direction="right" pauseOnClick={true}>
          {coins.map((coin, index) => (
              <div className="flex items-center justify-center gap-1" key={coin.id}>
                <img className="rounded-full"
                  src={coin.image}
                  alt={coin.name}
                  height={30}
                  width={30}
                />
                <h3 className="uppercase">
                  {coin.symbol}
                </h3>
                <div className="text-white/60">
                <span className="text-blue-400">$</span>{coin.current_price}
                </div>
                <div className="px-4 py-6 text-center " style={{ color: coin.price_change_percentage_24h >= 0 ? "green" : "red" }}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </div>
                <div className="px-8">

                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>


    </section>
  );
};

export default Companies;
