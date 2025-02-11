import React from "react";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import Work from "@/components/Home/Work";
import Table from "@/components/Home/Table";
import Features from "@/components/Home/Features";
import Trade from "@/components/Home/Trade";
import Simple from "@/components/Home/Simple";
import Faq from "@/components/Home/Faq";
import { Metadata } from "next";
import ParticlesBackground from "@/components/Home/Particles";
export const metadata: Metadata = {
  title: "Crypto",
};

export default function Home() {
  return (
    
    <>
      <Hero />
      <Companies />
      <Work />
      <Table />
      <Features />
      <Simple />
      <Trade />
      <Faq />
    </>
  );
}
