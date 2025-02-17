"use client";
import Image from "next/image";
import { workdata } from "@/app/api/data";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { Component, useEffect } from "react";

const Work = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const myStyle = {
    backgroundImage: "url(/images/Banner/mar.jpg)",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section style={myStyle}>
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 md:mt-10 relative">
        <div className="bg-banner-image hidden lg:block absolute w-full h-full top-1/2 -right-1/4 blur-390"></div>
        <div className="text-center md:mb-14 mb-6">
          <h3 className="text-white text-3xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-500">
              How it work
            </span>
          </h3>
          <p className="text-white/60 md:text-lg font-normal text-justify break-all ">
          BON Token is a cryptocurrency for AI-powered trading, using advanced AI to analyze market trends and execute trades efficiently. It enables secure transactions, fee payments, and staking rewards, making trading smarter and faster.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-y-20 gap-y-6 gap-x-5 md:mt-32 mt-20">
          <div className="bg-darkmode border border-darkmode group hover:border-primary hover:scale-105 duration-300 p-8 relative rounded-2xl">
            <div className="rounded-full flex justify-center absolute -top-10 left-40% p-6 bg-gradient-to-r from-primary to-secondary">
              <Image
                src={"/images/work/icon-one.svg"}
                alt={""}
                width={44}
                height={44}
              />
            </div>
            <div>
              <Image
                src={"/images/icons/bg-arrow.svg"}
                alt="arrow-bg"
                width={85}
                height={35}
              />
            </div>
            <h3 className="text-2xl text-white font-semibold text-center mt-8">
              Create Account
            </h3>
            <p className=" text-justify break-all text-base font-normal text-white/60 mt-2 overflow-hidden line-clamp-3 group-hover:h-auto group-hover:line-clamp-none transition-all duration-300">
              1. Install MetaMask <br />
              2. Go to MetaMask Website (https://metamask.io/) & download the
              extension for your browser or install the mobile app. <br />
              3. Go to <span className="font-bold">Create a Wallet</span> and
              set up a strong password. <br />
              4. Secure your Secret Recovery Phrase and store it safely. <br />
              <br />
              5. Add BON Token to MetaMask <br />
              6. Open MetaMask and switch to the correct blockchain network
              (e.g., BNB Chain, Ethereum, or any other as per BON Token). <br />
              7. Click <span className="font-bold">Import Tokens</span> and
              select <span className="font-bold">Custom Token</span>. <br />
              8. Enter the BON Token Contract Address (Get it from the official
              website or community). <br />
              9. Click Add Custom Token & confirm.
            </p>
          </div>
          <div className="bg-darkmode border border-darkmode group hover:border-primary hover:scale-105 duration-300 p-8 relative rounded-2xl">
            <div className="rounded-full flex justify-center absolute -top-10 left-40% p-6 bg-gradient-to-r from-primary to-secondary">
              <Image
                src={"/images/work/icon-one.svg"}
                alt={""}
                width={44}
                height={44}
              />
            </div>
            <div>
              <Image
                src={"/images/icons/bg-arrow.svg"}
                alt="arrow-bg"
                width={85}
                height={35}
              />
            </div>
            <h3 className="text-2xl text-white font-semibold text-center mt-8">
              Find your web3 wallet
            </h3>
            <p className="text-justify break-all text-base font-normal text-white/60 mt-2 overflow-hidden line-clamp-3 group-hover:h-auto group-hover:line-clamp-none transition-all duration-300">
              1. Open Your Web3 Wallet <br />
              2. Open MetaMask, Trust Wallet, Binance or any Web3-compatible
              wallet. Ensure you are on the correct blockchain network (e.g.,
              BNB Chain, Ethereum, or another specified by BON Token). <br />
              3. Add BON Token Manually, Click "Import Tokens" in your wallet.{" "}
              <br />
              4. Select "Custom Token" and enter the BON Token Contract Address
              (get it from the official website). <br />
              5. Confirm, and BON Token will be added to your wallet. <br />
               6. Connect to dApps or Exchanges - Go to the platform where you want to use
              BON Token. <br />
              7. Click "Connect Wallet" and choose your Web3 wallet.
               Approve the connection, and you’re ready to trade or
              use BON Token! 🚀
            </p>
          </div>
          <div className="bg-darkmode border border-darkmode group hover:border-primary hover:scale-105 duration-300 p-8 relative rounded-2xl">
            <div className="rounded-full flex justify-center absolute -top-10 left-40% p-6 bg-gradient-to-r from-primary to-secondary">
              <Image
                src={"/images/work/icon-one.svg"}
                alt={""}
                width={44}
                height={44}
              />
            </div>
            <div>
              <Image
                src={"/images/icons/bg-arrow.svg"}
                alt="arrow-bg"
                width={85}
                height={35}
              />
            </div>
            <h3 className="text-2xl text-white font-semibold text-center mt-8">
            Exchange Currency
            </h3>
            <p className="text-justify break-all text-base text-white/60 mt-2 overflow-hidden line-clamp-3 group-hover:h-auto group-hover:line-clamp-none transition-all duration-300">
            To exchange any cryptocurrency, follow these steps:  <br /> <br />
              1. Choose an Exchange – Use a centralized (Binance, Coinbase) or decentralized (Uniswap, PancakeSwap) exchange.  
              <br />
              2. Connect Wallet – Link your Web3 wallet (MetaMask, Trust Wallet) if using a DEX. <br />
              3. Select Coins – Choose the cryptocurrency you want to swap and the one you want to receive.  
              <br />
              4. Confirm Transaction – Enter the amount, check fees, and approve the swap. <br />
        
              5. Receive Funds – The exchanged currency will appear in your wallet after the transaction is processed.
             
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
