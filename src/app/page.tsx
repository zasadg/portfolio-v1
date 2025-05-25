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
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <div className="relative bg-white">
      <Navigation />
      <ParallaxProvider>
        <ParallaxBanner
            layers={[
                {
                    image: '/static/banner-background.svg',
                    speed: -60,
                    opacity: [0, 0], // Reduced opacity
                },
                {
                    image: '/static/banner-foreground.svg',
                    speed: -200,
                    opacity: [0.3, 0.3], // Reduced opacity
                },
            ]}
            className="bg-white"
            style={{ minHeight: '100vh' }}
        >
            <Hero />
            <Project1 />
            <Project2 />
            <Code />
            <Other />
            <Footer />
        </ParallaxBanner>
      </ParallaxProvider>
    </div>
  );
}
