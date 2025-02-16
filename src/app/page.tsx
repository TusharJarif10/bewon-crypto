import React from "react";
import Hero from "@/components/Home/Hero";
import TokenDescription from "@/components/Home/token";
import Companies from "@/components/Home/Companies";
import Work from "@/components/Home/Work";
import Table from "@/components/Home/Table";
import Features from "@/components/Home/Features";
import Trade from "@/components/Home/Trade";
import Simple from "@/components/Home/Simple";
import Faq from "@/components/Home/Faq";
import Contact from "@/components/Home/Contact";
import { Metadata } from "next";
import ParticlesComponent from "@/app/particles"
import AnimatedCursor from "react-animated-cursor"
export const metadata: Metadata = {
  title: "Crypto",
};

export default function Home() {
  return (
    
    <>
   <AnimatedCursor
      innerSize={12}
      outerSize={24}
      color='255, 255, 255'
      outerAlpha={0.2}
      outerStyle={{
        mixBlendMode: 'exclusion',
        color: 'white'
      }}
      innerScale={1.5}
      outerScale={3}
      
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}

    />
    <ParticlesComponent id="particles" />
      <Hero />
      <Companies />
      <Work />
      <Table />
      <Features />
      <TokenDescription />
      <Simple />
      <Trade />
      <Contact />
      <Faq />
    </>
  );
}
