"use client";
import Image from "next/image";
import Hero from "./hero";
import { useState } from "react";
import Project1 from "./project-1";
import Project2 from "./project-2";
import Code from "./code";
import Other from "./other";
import Footer from "./footer";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <ParallaxProvider>
        <ParallaxBanner
            layers={[
                {
                    image: '/static/banner-background.svg',
                    speed: -60,
                },
                {
                    image: '/static/banner-foreground.svg',
                    speed: -100,
                },
            ]}
            className="bg-[#e4e4e4]"
            style={{ minHeight: '100vh' }}
        >
          <div className="relative">
            <Hero />
            <Project1 />
            <Project2 />
            <Code />
            <Other />
            <Footer />
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
    </div>
  );
}
