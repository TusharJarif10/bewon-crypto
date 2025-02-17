"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";

const CryptoTable = () => {
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
    <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
      <h3

        className="text-3xl md:text-5xl font-bold  text-center mt-5 mb-16"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-500">
          Market Trend Live Stream
        </span>
      </h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="rounded-2xl bg-tablebg p-8 overflow-x-auto relative z-10">
          <table className="table-auto w-full mt-10">
            <thead>
              <tr className="text-white bg-border rounded-2xl">
                <th className="px-4 py-4 font-normal">#</th>
                <th className="px-2 py-4 font-normal">Image</th>
                <th className="px-4 py-4 font-normal">Name</th>
                <th className="px-4 py-4 font-normal">Symbol</th>
                <th className="px-4 py-4 font-normal">Price (USD)</th>
                <th className="px-4 py-4 font-normal">Market Cap</th>
                <th className="px-4 py-4 font-normal">24h Change</th>
                
              </tr>
            </thead>
            <tbody>
              {coins.map((coin, index) => (
                <tr key={coin.id}>
                  <td className="px-4 py-6 text-center text-white">{index + 1}</td>
                  <td className="px-4 py-6 text-center text-white items-center justify-center "><img src={coin.image} alt={coin.name} width="30" height="30" /></td>
                  <td className="px-4 py-6 text-center">{coin.name}</td>
                  <td className="px-4 py-6 text-center">{coin.symbol.toUpperCase()}</td>
                  <td className="px-4 py-6 text-center">${coin.current_price.toLocaleString()}</td>
                  <td className="px-4 py-6 text-center">${coin.market_cap.toLocaleString()}</td>
                  <td className="px-4 py-6 text-center" style={{ color: coin.price_change_percentage_24h >= 0 ? "green" : "red" }}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      )}
    </div>
  );
};

export default CryptoTable;
